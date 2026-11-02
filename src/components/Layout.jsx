import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';

const NAV_LINKS = [
  { path: '/', label: 'Home', end: true },
  { path: '/about', label: 'About' },
  { path: '/products', label: 'Products' },
  { path: '/customization', label: 'Customization' },
  { path: '/certifications', label: 'Certifications' },
];

const FOOTER_LINKS = [
  { path: '/about', label: 'About' },
  { path: '/products', label: 'Products' },
  { path: '/news-media', label: 'News & Media' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' },
];

function ArrowIcon() {
  return (
    <svg className="cta-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFloatEnquire, setShowFloatEnquire] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const footerRef = useRef(null);
  const menuButtonRef = useRef(null);

  const closeMenu = useCallback((restoreFocus = false) => {
    setMenuOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  // Close the mobile menu on route changes and return the page to its top.
  useEffect(() => {
    setMenuOpen(false);
    setShowFloatEnquire(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lock background scrolling while the mobile drawer is open.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu(true);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  // Show the floating contact link after the main navigation leaves view,
  // but keep it hidden while the footer is visible.
  useEffect(() => {
    const nav = navRef.current;
    const footer = footerRef.current;
    if (!nav) return undefined;

    let navIsVisible = true;
    let footerIsVisible = false;

    const updateVisibility = () => {
      setShowFloatEnquire(!navIsVisible && !footerIsVisible && window.scrollY > 120);
    };

    const navObserver = new IntersectionObserver(
      ([entry]) => {
        navIsVisible = entry.isIntersecting;
        updateVisibility();
      },
      { threshold: 0 }
    );

    navObserver.observe(nav);

    let footerObserver;
    if (footer) {
      footerObserver = new IntersectionObserver(
        ([entry]) => {
          footerIsVisible = entry.isIntersecting;
          updateVisibility();
        },
        { threshold: 0.01 }
      );
      footerObserver.observe(footer);
    }

    const onScroll = () => updateVisibility();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      navObserver.disconnect();
      footerObserver?.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [location.pathname]);

  const handleNavClick = () => closeMenu(false);

  return (
    <>
      <header className="site-header">
        <nav className="nav" ref={navRef} aria-label="Main navigation">
          <Link className="logo" to="/" aria-label="Sri Jothi Traders home" onClick={handleNavClick}>
            <img
              className="logo-mark"
              src="/Sri_Jothi_Traders_SYMBOL_MASTER.svg"
              alt=""
              width="42"
              height="42"
            />
            <span>SRI JOTHI TRADERS</span>
          </Link>

          <div className="navlinks">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <Link className="navcta" to="/contact">
            <span>Contact us</span>
            <ArrowIcon />
          </Link>

          <button
            ref={menuButtonRef}
            className={`hamburger${menuOpen ? ' open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobileDrawer"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <Link
        to="/contact"
        className={`float-enquire${showFloatEnquire ? ' is-visible' : ''}`}
        aria-label="Contact Sri Jothi Traders"
        aria-hidden={!showFloatEnquire}
        tabIndex={showFloatEnquire ? 0 : -1}
      >
        Contact us <span aria-hidden="true">↗</span>
      </Link>

      <div
        className={`mobile-menu-backdrop${menuOpen ? ' is-open' : ''}`}
        aria-hidden="true"
        onClick={() => closeMenu(false)}
      />

      <aside
        className={`mobile-drawer${menuOpen ? ' open' : ''}`}
        id="mobileDrawer"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-drawer-head">
          <Link className="mobile-drawer-logo" to="/" onClick={handleNavClick}>
            <img src="/Sri_Jothi_Traders_SYMBOL_MASTER.svg" alt="" width="34" height="34" />
            <span>SRI JOTHI TRADERS</span>
          </Link>
          <button
            className="mobile-drawer-close"
            type="button"
            aria-label="Close navigation menu"
            onClick={() => closeMenu(true)}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <nav className="mobile-drawer-links" aria-label="Mobile navigation links">
          {NAV_LINKS.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              onClick={handleNavClick}
              className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
            >
              <span className="mobile-nav-number">0{index + 1}</span>
              <span>{item.label}</span>
              <span className="mobile-nav-arrow" aria-hidden="true">↗</span>
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="mob-cta" onClick={handleNavClick}>
          Start a conversation <ArrowIcon />
        </Link>
        <p className="mobile-drawer-note">Indian products. Prepared with care. Delivered worldwide.</p>
      </aside>

      <main id="top">
        <Outlet />
      </main>

      <footer className="site-footer" ref={footerRef}>
        <div className="site-footer-inner">
          <div className="site-footer-brandline">
            <Link className="site-footer-logo" to="/" aria-label="Sri Jothi Traders home">
              <img src="/Sri_Jothi_Traders_SYMBOL_MASTER.svg" alt="" width="38" height="38" />
              <span>SRI JOTHI TRADERS</span>
            </Link>
          </div>

          <h2 className="site-footer-statement">
            Indian products. Prepared with care. Delivered worldwide.
          </h2>

          <div className="site-footer-action-row">
            <Link className="site-footer-contact" to="/contact">
              Start a conversation <span aria-hidden="true">↗</span>
            </Link>

            <div className="site-footer-certifications">
              <span className="site-footer-label">Certifications</span>
              <div className="site-footer-certs">
                <span>FSSAI</span>
                <span>APEDA</span>
                <span>ISO 22000</span>
              </div>
            </div>
          </div>

          <div className="site-footer-divider" />

          <div className="site-footer-bottom">
            <nav className="site-footer-links" aria-label="Footer navigation">
              {FOOTER_LINKS.map((item) => (
                <Link key={item.path} to={item.path}>{item.label}</Link>
              ))}
            </nav>

            <div className="site-footer-meta">
              <span className="site-footer-copyright">
                © {new Date().getFullYear()} Sri Jothi Traders. All rights reserved.
              </span>
              <div className="site-footer-legal">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-of-use">Terms of Use</Link>
                <Link to="/cookie-policy">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
