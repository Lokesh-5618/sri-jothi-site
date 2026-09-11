import { Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const progressBarRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    let progressTicking = false;

    const updateProgress = () => {
      if (progressBarRef.current) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progressBarRef.current.style.width =
          (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
      }
      progressTicking = false;
    };

    const handleScroll = () => {
      if (!progressTicking) {
        requestAnimationFrame(updateProgress);
        progressTicking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/customization', label: 'Customization' },
    { path: '/certifications', label: 'Certifications' }
  ];

  return (
    <>
      <div id="scroll-progress" ref={progressBarRef}></div>

      <nav className="nav">
        <Link className="logo" to="/">
          <span className="logo-placeholder" aria-hidden="true">LOGO</span>
          SRI JOTHI
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
          Enquire Now
          <svg
            className="cta-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
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
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <Link to="/contact" className="float-enquire" aria-label="Enquire Now">
        Enquire Now <span aria-hidden="true">↗</span>
      </Link>

      <div
        className={`mobile-drawer ${menuOpen ? 'open' : ''}`}
        id="mobileDrawer"
      >
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}

        <Link to="/contact" className="mob-cta" onClick={closeMenu}>
          Enquire Now
          <svg
            className="cta-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </Link>
      </div>

      <main id="top">
        <Outlet />
      </main>

      <footer>
        {/* Connect section */}
        <div className="wrap footer-connect-section">
          <div className="footer-connect">
            <span className="footer-connect-label">Connect with us</span>

            <div className="footer-socials">
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener">
                IG
              </a>
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener">
                in
              </a>
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener">
                FB
              </a>
              <a href="#" aria-label="WhatsApp" target="_blank" rel="noopener">
                WA
              </a>
            </div>
          </div>
        </div>

        {/* Certifications — separate row below Connect with us */}
        <div className="wrap footer-cert-section">
          <div className="footer-certs">
            <span>FSSAI</span>
            <span>APEDA</span>
            <span>ISO 22000</span>
          </div>
        </div>

        {/* Bottom section */}
        <div className="wrap footer-inner">
          <span>
            &copy; 2026 Sri Jothi Traders &middot; Dindigul, Tamil Nadu
          </span>

          <nav className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/customization">Customization</Link>
            <Link to="/certifications">Certifications</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
