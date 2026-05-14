import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { isAuthed } from '@/lib/auth';

export const runtime = 'nodejs';
export const maxDuration = 30;

type Suggestion = { name: string; domain: string; rationale: string };

const TOOL = {
  name: 'suggest_competitors',
  description:
    "Return five direct competitors of the target brand based on web research. " +
    "Each entry has the company name, primary domain, and a one-sentence rationale.",
  input_schema: {
    type: 'object' as const,
    required: ['competitors'],
    properties: {
      competitors: {
        type: 'array',
        minItems: 5,
        maxItems: 5,
        items: {
          type: 'object',
          required: ['name', 'domain', 'rationale'],
          properties: {
            name: { type: 'string', description: 'Brand name as the public would write it.' },
            domain: { type: 'string', description: 'Primary domain only, no protocol. Example: betteracme.com' },
            rationale: {
              type: 'string',
              description:
                'One sentence: why this is a meaningful competitor for the target brand in this industry.',
            },
          },
        },
      },
    },
  },
};

export async function POST(req: Request) {
  if (!isAuthed()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let brand_name = '';
  let primary_domain = '';
  let industry = '';
  try {
    const body = await req.json();
    brand_name = String(body.brand_name ?? '').trim();
    primary_domain = String(body.primary_domain ?? '').trim();
    industry = String(body.industry ?? '').trim();
  } catch {
    return NextResponse.json({ error: 'Bad JSON' }, { status: 400 });
  }

  if (!brand_name || !primary_domain || !industry) {
    return NextResponse.json({ error: 'brand_name, primary_domain, industry are required' }, { status: 400 });
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'ANTHROPIC_API_KEY is not set on the server.' }, { status: 500 });
  }

  const client = new Anthropic();

  // Use Anthropic's hosted web_search tool when available, plus our structured-output tool.
  const messages = [
    {
      role: 'user' as const,
      content:
        `Research direct competitors of this brand and return five, using web search to verify they exist and operate in the same space:\n\n` +
        `Brand: ${brand_name}\n` +
        `Domain: ${primary_domain}\n` +
        `Industry / vertical: ${industry}\n\n` +
        `Definition of "direct competitor": targets the same customers, solves a similar problem, in the same geographic and product space. ` +
        `Avoid generic industry giants if the target is a regional or specialized business. ` +
        `Prefer competitors of similar size and positioning. ` +
        `When you have five candidates with verified domains, call the suggest_competitors tool with them.`,
    },
  ];

  try {
    const resp = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 4000,
      tools: [
        // Hosted web search tool. Will gracefully degrade if not available.
        { type: 'web_search_20250305', name: 'web_search', max_uses: 4 } as any,
        TOOL as any,
      ],
      tool_choice: { type: 'auto' } as any,
      messages,
    });

    // Find the last tool_use block of type 'suggest_competitors'
    const competitors: Suggestion[] = [];
    for (const block of resp.content) {
      // @ts-expect-error narrowing tool_use block
      if (block.type === 'tool_use' && block.name === 'suggest_competitors') {
        // @ts-expect-error
        const list = block.input?.competitors;
        if (Array.isArray(list)) {
          for (const c of list) {
            if (c?.name && c?.domain) {
              competitors.push({
                name: String(c.name),
                domain: String(c.domain).replace(/^https?:\/\//, '').replace(/\/$/, ''),
                rationale: String(c.rationale ?? ''),
              });
            }
          }
        }
      }
    }

    if (competitors.length === 0) {
      return NextResponse.json(
        { error: 'Claude did not return a structured suggestion. Try again, or fill in manually.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ competitors });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Anthropic call failed' }, { status: 500 });
  }
}
