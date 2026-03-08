export default function Footer() {
  return (
    <footer className="p5-footer">
      <div className="p5-footer-inner">

        {/* Top grid */}
        <div className="p5-footer-grid">

          {/* Brand column */}
          <div className="p5-footer-brand">
            <a href="/" aria-label="P5 Marketing – Home">
              <img src="/p5-logo.webp" alt="P5 Marketing" width="500" height="336" />
            </a>
            <p className="p5-footer-tagline">Data-driven marketing for high-growth verticals. We turn intent signals into booked revenue.</p>

            {/* Social */}
            <div className="p5-footer-social">
              <a href="https://www.linkedin.com/in/robertdonnell/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://x.com/P5Mark" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Pages column */}
          <div className="p5-footer-col">
            <h4>Pages</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about/">About</a></li>
              <li><a href="/how-it-works/">How It Works</a></li>
              <li><a href="/markets/">Markets</a></li>
              <li><a href="/the-id-suite/">The ID Suite</a></li>
              <li><a href="/contact/">Contact</a></li>
            </ul>
          </div>

          {/* Solutions column */}
          <div className="p5-footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="/markets/wedding-venues/">Wedding Venues</a></li>
              <li><a href="/markets/plastic-surgeons/">Plastic Surgeons</a></li>
              <li><a href="/the-id-suite/visitor-id/">Visitor ID</a></li>
              <li><a href="/the-id-suite/intent-id/">Intent ID</a></li>
              <li><a href="/the-id-suite/inbox-id/">Inbox ID</a></li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="p5-footer-col">
            <h4>Contact</h4>
            <div className="p5-footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <a href="mailto:rdonnell@p5marketing.com">rdonnell@p5marketing.com</a>
            </div>
            <div className="p5-footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Bedford, TX</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="p5-footer-bottom">
          <div className="p5-footer-legal">
            <a href="/privacy/">Privacy Policy</a>
            <span className="p5-footer-legal-sep">&middot;</span>
            <a href="/terms/">Terms of Service</a>
            <span className="p5-footer-legal-sep">&middot;</span>
            <a href="/do-not-sell/">Do Not Sell My Info</a>
          </div>
          <p className="p5-footer-copy">&copy; 2026 P5 Marketing. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
