/* ===== P5 HEADER INTERACTIONS ===== */
(function () {
  "use strict";

  const header = document.getElementById("p5Header");
  const hamburger = document.getElementById("p5Hamburger");
  const mobileNav = document.getElementById("p5MobileNav");

  if (!header) return;

  /* — Scroll → add "scrolled" class — */
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        header.classList.toggle("p5-header--scrolled", window.scrollY > 24);
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); /* run once on load */

  /* — Hamburger toggle — */
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", function () {
      const isOpen = mobileNav.classList.toggle("p5-mobile-nav--open");
      hamburger.classList.toggle("p5-hamburger--active", isOpen);
      hamburger.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    /* close mobile nav when a link is tapped */
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("p5-mobile-nav--open");
        hamburger.classList.remove("p5-hamburger--active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* — Dropdown: keyboard & touch support — */
  document.querySelectorAll(".p5-has-dropdown").forEach(function (li) {
    var toggle = li.querySelector("a");

    /* touch devices: first tap opens dropdown, second navigates */
    toggle.addEventListener("click", function (e) {
      if (window.innerWidth > 960 && "ontouchstart" in window) {
        if (!li.classList.contains("p5-dropdown-open")) {
          e.preventDefault();
          closeAllDropdowns();
          li.classList.add("p5-dropdown-open");
          toggle.setAttribute("aria-expanded", "true");
        }
      }
    });

    /* keyboard: Enter/Space toggles dropdown */
    toggle.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        var isOpen = li.classList.toggle("p5-dropdown-open");
        toggle.setAttribute("aria-expanded", isOpen);
      }
    });
  });

  function closeAllDropdowns() {
    document.querySelectorAll(".p5-has-dropdown").forEach(function (li) {
      li.classList.remove("p5-dropdown-open");
      li.querySelector("a").setAttribute("aria-expanded", "false");
    });
  }

  /* close dropdown when clicking outside */
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".p5-has-dropdown")) {
      closeAllDropdowns();
    }
  });

  /* — Highlight active page link — */
  var currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  document.querySelectorAll(".p5-header-nav a").forEach(function (a) {
    var linkPath = new URL(a.href, window.location.origin).pathname.replace(/\/+$/, "") || "/";
    if (linkPath === currentPath) {
      a.classList.add("p5-nav-active");
    }
  });
})();
