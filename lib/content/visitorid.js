/**
 * VisitorID™ Landing Page Content - Single Source of Truth
 *
 * Every heading, paragraph, stat, FAQ answer, and CTA label on the
 * /the-id-suite/visitorid/ page is driven from this object.
 * Do NOT hard-code copy in the page component.
 */

export const visitorIdPageContent = {
  seo: {
    title: "VisitorID\u2122 | Website Visitor Identification",
    description:
      "VisitorID\u2122 identifies up to 60% of anonymous website visitors by name, email, phone, and address \u2014 scores buying intent and routes the serious ones to your CRM.",
  },

  hero: {
    eyebrow: "VisitorID\u2122 by P5 Marketing",
    headline: "Recover the Website Visitors Your Marketing Already Paid For",
    subheadline:
      "Most of your best prospects never fill out a form. VisitorID\u2122 helps you see who visited, what they researched, and which people are serious enough to send into your CRM automatically.",
    primaryCta: {
      label: "Schedule a Demo",
      href: "#final-cta",
    },
    secondaryCta: {
      label: "See How It Works",
      href: "#how-it-works",
    },
  },

  stats: [
    {
      value: "95%",
      label: "of website visitors leave without taking action",
    },
    {
      value: "Next-day delivery",
      label: "qualified visitor data processed overnight",
    },
    {
      value: "No form fill required",
      label: "to identify and score a visitor",
    },
  ],

  productScreenshots: {
    headline: "See What Your Team Actually Gets",
    intro:
      "VisitorID\u2122 delivers a full-featured dashboard, not a spreadsheet. Your team sees who visited, what they researched, and which prospects deserve immediate attention.",
    screens: [
      {
        src: "/images/visitorid/dashboard-overview.png",
        alt: "VisitorID\u2122 dashboard showing KPI summary cards, intent distribution chart, and traffic source breakdown",
        caption: "Real-time dashboard with intent scoring, traffic sources, and filterable date windows",
      },
      {
        src: "/images/visitorid/contacts-table.png",
        alt: "VisitorID\u2122 high-intent visitor table showing names, locations, scores, tier badges, and research interests",
        caption: "Every visitor scored and sorted. Filter by tier, search by name, and download by segment.",
      },
      {
        src: "/images/visitorid/visitor-profile.png",
        alt: "VisitorID\u2122 individual visitor profile showing personal information, intent score, identity confidence, and research interests",
        caption: "Deep visitor profiles with demographic attributes, income and affluence ratings, intent signals, and page-level browsing history",
      },
    ],
  },

  problem: {
    id: "problem",
    headline: "You\u2019re Already Paying for the Traffic",
    paragraphs: [
      "You spend money on SEO, Google Ads, Meta, referrals, and content to get the right people to your website.",
      "Then most of them leave.",
      "They browse your services, compare options, review results, and research quietly without ever filling out a form or calling your office. Traditional analytics can tell you how many people visited. VisitorID\u2122 is built to help you understand who showed up, what they cared about, and which visitors look worth acting on.",
    ],
    bottomLine:
      "The problem is not just getting traffic. The problem is losing visibility into the people who never raise their hand.",
  },

  howItWorks: {
    id: "how-it-works",
    headline: "How VisitorID\u2122 Works",
    intro:
      "A fully automated four-stage pipeline that turns anonymous traffic into prioritized CRM opportunities.",
    steps: [
      {
        title: "Identify",
        body:
          "As visitors browse, VisitorID\u2122 helps turn anonymous traffic into identifiable prospects without requiring a form submission.",
      },
      {
        title: "Classify",
        body:
          "Every page view is mapped to the services, products, procedures, or topics the visitor is actively researching. You do not just see traffic. You see buyer interest.",
      },
      {
        title: "Score",
        body:
          "Each visitor is evaluated on two dimensions: likely buying intent and record confidence. Serious opportunities rise to the top. Junk, bots, and low-quality records are filtered down or excluded.",
      },
      {
        title: "Deliver",
        body:
          "Qualified leads are pushed into your CRM automatically, tagged by interest, intent tier, and source, so your team can start the day with a clearer follow-up list.",
      },
    ],
  },

  benefits: {
    headline: "What You Get",
    items: [
      {
        title: "Real People, Not Just Anonymous Sessions",
        body:
          "Move beyond pageviews and session counts. Get actual visitor records your team can review and act on.",
      },
      {
        title: "Behavioral Intelligence",
        body:
          "See what each visitor was researching on your site, not just that they arrived.",
      },
      {
        title: "Intent Prioritization",
        body:
          "Focus first on the visitors who look most likely to buy, book, or contact.",
      },
      {
        title: "Cleaner CRM Input",
        body:
          "Confidence filtering helps keep bots, fake records, and junk from cluttering your pipeline.",
      },
      {
        title: "Automatic Delivery",
        body:
          "No manual exports. No piecing together reports. Qualified records are delivered automatically.",
      },
      {
        title: "A Better Use of Traffic Spend",
        body:
          "Get more value from the traffic you are already paying to generate.",
      },
    ],
  },

  comparison: {
    headline: "VisitorID\u2122 vs. Traditional Analytics",
    intro:
      "Traditional analytics tells you traffic happened. VisitorID\u2122 helps make that traffic more actionable.",
    columns: ["Capability", "Traditional Analytics", "VisitorID\u2122"],
    rows: [
      [
        "What you learn",
        "Sessions, sources, pageviews",
        "Who visited, what they researched, and how important they appear to be",
      ],
      [
        "Requires a form fill",
        "Usually yes for lead capture",
        "No form required to surface many visitors",
      ],
      [
        "Lead qualification",
        "Manual",
        "Automated interest and intent scoring",
      ],
      [
        "Spam protection",
        "Limited",
        "Confidence filtering helps reduce junk",
      ],
      [
        "CRM workflow",
        "Manual exports or disconnected tools",
        "Automated delivery of qualified records",
      ],
      [
        "Business value",
        "Reporting",
        "Recovering and prioritizing lost demand",
      ],
    ],
  },

  bestFit: {
    headline: "Who VisitorID\u2122 Is Best For",
    intro:
      "VisitorID\u2122 is best for businesses where every missed prospect is expensive.",
    bullets: [
      "high-ticket services",
      "businesses with long consideration cycles",
      "brands spending meaningful money on paid or organic traffic",
      "teams that want more value from website visitors who never convert on the first visit",
    ],
    closing:
      "If your sales process depends on a small number of valuable opportunities, this can materially change how much value you get from your website.",
  },

  faq: {
    headline: "Frequently Asked Questions",
    items: [
      {
        question: "Is this just another analytics tool?",
        answer:
          "No. Traditional analytics is built for reporting. VisitorID\u2122 is built to help surface and prioritize website visitors your team may actually want to act on.",
      },
      {
        question: "Do visitors need to fill out a form?",
        answer:
          "No. The point is to help recover value from visitors who never raise their hand.",
      },
      {
        question: "Will this create junk in the CRM?",
        answer:
          "VisitorID\u2122 uses confidence filtering to help separate stronger records from low-quality or suspicious ones before delivery.",
      },
      {
        question: "What does my team actually receive?",
        answer:
          "Qualified visitor records tagged by interest, intent tier, and related context, delivered into your workflow automatically.",
      },
      {
        question: "Who is this best for?",
        answer:
          "Businesses spending real money on traffic and frustrated that most of it disappears without becoming a lead.",
      },
    ],
  },

  notFor: {
    headline: "Who VisitorID\u2122 Is Not For",
    body:
      "VisitorID\u2122 is not for low-traffic websites or businesses with low-value leads. It is built for companies that spend real money on traffic and where each missed prospect matters.",
  },

  finalCta: {
    id: "final-cta",
    headline: "You\u2019re Already Paying for the Traffic. Now Know Who\u2019s Showing Up.",
    body:
      "Most of your prospects will never fill out a form. That does not mean they are not valuable. Schedule a demo to see how VisitorID\u2122 helps recover, score, and deliver more of the opportunity already reaching your website.",
    cta: {
      label: "Schedule a Conversation",
      href: "/contact/",
    },
  },
};

export default visitorIdPageContent;
