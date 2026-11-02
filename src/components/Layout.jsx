import { Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFloatEnquire, setShowFloatEnquire] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const footerRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowFloatEnquire(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(nav);
    return () => observer.disconnect();
  }, [location.pathname]);

  // Hide the floating CTA while the footer's own CTA is on screen.
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowFloatEnquire(false);
        } else if (window.scrollY > 120 && navRef.current &&
                   navRef.current.getBoundingClientRect().bottom < 0) {
          setShowFloatEnquire(true);
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowFloatEnquire(false);
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/customization', label: 'Customization' },
    { path: '/certifications', label: 'Certifications' },
  ];

  return (
    <>
      <nav className="nav" ref={navRef}>
        <Link className="logo" to="/" aria-label="Sri Jothi Traders home">
          <img
            className="logo-mark"
            src="/Sri_Jothi_Traders_SYMBOL_MASTER.svg"
            alt="Sri Jothi Traders"
          />
          <span>SRI JOTHI TRADERS</span>
        </Link>

        <div className="navlinks">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
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
          id="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <Link
        to="/contact"
        className={`float-enquire ${showFloatEnquire ? 'is-visible' : ''}`}
        aria-label="Contact us"
        aria-hidden={!showFloatEnquire}
        tabIndex={showFloatEnquire ? 0 : -1}
      >
        Contact us <span aria-hidden="true">↗</span>
      </Link>

      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`} id="mobileDrawer">
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
        <Link to="/contact" className="mob-cta" onClick={closeMenu}>
          Contact us
          <svg className="cta-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </Link>
      </div>

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
