import { Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/products', label: 'Products' },
  { path: '/customization', label: 'Customization' },
  { path: '/certifications', label: 'Certifications' },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFloatEnquire, setShowFloatEnquire] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const footerRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  // Lock background scrolling while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  // Show the floating contact link only after the header has left the viewport.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setShowFloatEnquire(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(nav);
    return () => observer.disconnect();
  }, [location.pathname]);

  // Keep the floating CTA out of the way when the footer CTA is visible.
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowFloatEnquire(false);
        } else if (
          window.scrollY > 120 &&
          navRef.current &&
          navRef.current.getBoundingClientRect().bottom < 0
        ) {
          setShowFloatEnquire(true);
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [location.pathname]);

  // Reset route-specific UI after navigation.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setShowFloatEnquire(false);
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="nav" ref={navRef} aria-label="Main navigation">
        <Link className="logo" to="/" aria-label="Sri Jothi Traders home">
          <img
            className="logo-mark"
            src="/Sri_Jothi_Traders_SYMBOL_MASTER.svg"
            alt=""
          />
          <span>SRI JOTHI TRADERS</span>
        </Link>

        <div className="navlinks">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
              aria-current={location.pathname === link.path ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link className="navcta" to="/contact">
          Contact us
          <svg className="cta-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </Link>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="site-mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`site-mobile-menu ${menuOpen ? 'is-open' : ''}`}
        id="site-mobile-menu"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="site-mobile-menu-inner">
          <div className="site-mobile-menu-kicker">Explore Sri Jothi</div>

          <nav className="site-mobile-menu-links" aria-label="Mobile navigation">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                aria-current={location.pathname === link.path ? 'page' : undefined}
              >
                <span className="site-mobile-menu-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{link.label}</span>
                <span className="site-mobile-menu-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>

          <Link className="site-mobile-menu-cta" to="/contact" onClick={closeMenu}>
            Start a conversation
            <span aria-hidden="true">↗</span>
          </Link>

          <p className="site-mobile-menu-note">
            Indian products. Prepared with care. Delivered worldwide.
          </p>
        </div>
      </div>

      <Link
        to="/contact"
        className={`float-enquire ${showFloatEnquire && !menuOpen ? 'is-visible' : ''}`}
        aria-label="Contact us"
        aria-hidden={!showFloatEnquire || menuOpen}
        tabIndex={showFloatEnquire && !menuOpen ? 0 : -1}
      >
        Contact us <span aria-hidden="true">↗</span>
      </Link>

      <main id="top">
        <Outlet />
      </main>

      <footer className="site-footer" ref={footerRef}>
        <div className="site-footer-inner">
          <div className="site-footer-brandline">
            <Link className="site-footer-logo" to="/" aria-label="Sri Jothi Traders home">
              <img src="/Sri_Jothi_Traders_SYMBOL_MASTER.svg" alt="" />
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
              <Link to="/about">About</Link>
              <Link to="/products">Products</Link>
              <Link to="/news-media">News &amp; Media</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact</Link>
            </nav>

            <div className="site-footer-meta">
              <span className="site-footer-copyright">
                © 2026 Sri Jothi Traders. All rights reserved.
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
