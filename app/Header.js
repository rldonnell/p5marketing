'use client';

import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const header = document.getElementById('p5Header');
    const hamburger = document.getElementById('p5Hamburger');
    const mobileNav = document.getElementById('p5MobileNav');

    if (!header) return;

    /* â Scroll â add "scrolled" class â */
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          header.classList.toggle('p5-header--scrolled', window.scrollY > 24);
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* â Hamburger toggle â */
    function handleHamburger() {
      const isOpen = mobileNav.classList.toggle('p5-mobile-nav--open');
      hamburger.classList.toggle('p5-hamburger--active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    function closeMobileNav() {
      mobileNav.classList.remove('p5-mobile-nav--open');
      hamburger.classList.remove('p5-hamburger--active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', handleHamburger);
      mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMobileNav);
      });
    }

    /* â Dropdown: keyboard & touch support â */
    function closeAllDropdowns() {
      document.querySelectorAll('.p5-has-dropdown').forEach(function (li) {
        li.classList.remove('p5-dropdown-open');
        li.querySelector('a').setAttribute('aria-expanded', 'false');
      });
    }

    document.querySelectorAll('.p5-has-dropdown').forEach(function (li) {
      var toggle = li.querySelector('a');

      toggle.addEventListener('click', function (e) {
        if (window.innerWidth > 960 && 'ontouchstart' in window) {
          if (!li.classList.contains('p5-dropdown-open')) {
            e.preventDefault();
            closeAllDropdowns();
            li.classList.add('p5-dropdown-open');
            toggle.setAttribute('aria-expanded', 'true');
          }
        }
      });

      toggle.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          var isOpen = li.classList.toggle('p5-dropdown-open');
          toggle.setAttribute('aria-expanded', isOpen);
        }
      });
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.p5-has-dropdown')) {
        closeAllDropdowns();
      }
    });

    /* â Highlight active page link â */
    var currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
    document.querySelectorAll('.p5-header-nav a').forEach(function (a) {
      var linkPath = new URL(a.href, window.location.origin).pathname.replace(/\/+$/, '') || '/';
      if (linkPath === currentPath) {
        a.classList.add('p5-nav-active');
      }
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (hamburger) hamburger.removeEventListener('click', handleHamburger);
      if (mobileNav) {
        mobileNav.querySelectorAll('a').forEach(function (link) {
          link.removeEventListener('click', closeMobileNav);
        });
      }
    };
  }, []);

  return (
    <>
      <header className="p5-header" id="p5Header">
        <div className="p5-header-inner">

          {/* Logo */}
          <div className="p5-header-logo">
            <a href="/" aria-label="P5 Marketing â Home">
              <img src="/p5-logo.webp" alt="P5 Marketing" width="500" height="336" />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation">
            <ul className="p5-header-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/about/">About</a></li>
              <li><a href="/how-it-works/">How It Works</a></li>
              <li className="p5-has-dropdown">
                <a href="/markets/" aria-haspopup="true" aria-expanded="false">
                  Markets
                  <svg className="p5-nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </a>
                <ul className="p5-nav-dropdown" role="menu">
                  <li role="none"><a role="menuitem" href="/markets/wedding-venues/">Wedding Venues</a></li>
                  <li role="none"><a role="menuitem" href="/markets/plastic-surgeons/">Plastic Surgeons</a></li>
                </ul>
              </li>
              <li className="p5-has-dropdown">
                <a href="/the-id-suite/" aria-haspopup="true" aria-expanded="false">
                  The ID Suite
                  <svg className="p5-nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </a>
                <ul className="p5-nav-dropdown" role="menu">
                  <li role="none"><a role="menuitem" href="/the-id-suite/seo-accelerator/">SEO Accelerator</a></li>
                  <li role="none"><a role="menuitem" href="/the-id-suite/visitorid/">VisitorID</a></li>
                  <li role="none"><a role="menuitem" href="/the-id-suite/intentid/">IntentID</a></li>
                  <li role="none"><a role="menuitem" href="/the-id-suite/inboxid/">InboxID</a></li>
                </ul>
              </li>
              <li><a href="/blog/">Blog</a></li>
              <li><a href="/contact/">Contact</a></li>
            </ul>
          </nav>

          {/* CTA */}
          <div className="p5-header-cta">
            <a href="/contact/" className="p5-btn">Book a Conversation</a>
          </div>

          {/* Hamburger (mobile) */}
          <button className="p5-hamburger" id="p5Hamburger" aria-label="Toggle menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className="p5-mobile-nav" id="p5MobileNav">
        <a href="/">Home</a>
        <a href="/about/">About</a>
        <a href="/how-it-works/">How It Works</a>
        <a href="/markets/">Markets</a>
        <a href="/markets/wedding-venues/" className="p5-mobile-sub">Wedding Venues</a>
        <a href="/markets/plastic-surgeons/" className="p5-mobile-sub">Plastic Surgeons</a>
        <a href="/the-id-suite/">The ID Suite</a>
        <a href="/the-id-suite/seo-accelerator/" className="p5-mobile-sub">SEO Accelerator</a>
        <a href="/the-id-suite/visitorid/" className="p5-mobile-sub">VisitorID</a>
        <a href="/the-id-suite/intentid/" className="p5-mobile-sub">IntentID</a>
        <a href="/the-id-suite/inboxid/" className="p5-mobile-sub">InboxID</a>
        <a href="/blog/">Blog</a>
        <a href="/contact/">Contact</a>
        <a href="/contact/" className="p5-btn">Book a Conversation</a>
      </div>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="p5-header-spacer"></div>
    </>
  );
}
