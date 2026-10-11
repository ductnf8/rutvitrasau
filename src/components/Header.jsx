import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export default function Header({ onOpenCalculator }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Ví Hỗ Trợ", href: "#wallets" },
    { label: "Bảng Biểu Phí", href: "#fees" },
    { label: "Quy Trình", href: "#process" },
    { label: "Bảo Mật", href: "#security" },
    { label: "Hỏi Đáp", href: "#faq" },
    { label: "Hướng Dẫn", href: "#guides" },
    { label: "Liên Hệ", href: "#contact" }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Sticky Header */}
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-fluid-container header-container">
          {/* Logo */}
          <a href="#hero" className="brand-logo" onClick={(e) => handleNavClick(e, '#hero')}>
            <div className="brand-logo-icon">
              <Sparkles size={20} />
            </div>
            <span>
              {SITE_CONFIG.brandName}<span className="brand-accent">.vn</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="header-actions">
            <a
              href={`tel:${SITE_CONFIG.hotline}`}
              className="btn btn-secondary btn-sm header-phone-btn"
              id="header-phone-btn"
            >
              <Phone size={15} />
              <span>Gọi Trực Tiếp</span>
            </a>

            <a
              href={SITE_CONFIG.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-zalo btn-sm"
              id="header-zalo-cta"
            >
              <MessageCircle size={16} />
              <span>Báo Phí Zalo</span>
            </a>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="mobile-drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            >
              <div className="mobile-drawer-header">
                <div className="brand-logo">
                  <div className="brand-logo-icon">
                    <Sparkles size={18} />
                  </div>
                  <span>{SITE_CONFIG.brandName}<span className="brand-accent">.vn</span></span>
                </div>
                <button
                  type="button"
                  className="mobile-drawer-close"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Đóng menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mobile-nav-list">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={16} color="#94a3b8" />
                  </a>
                ))}
              </div>

              <div className="mobile-drawer-footer">
                <a
                  href={SITE_CONFIG.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-zalo btn-lg"
                  style={{ width: '100%' }}
                >
                  <MessageCircle size={18} />
                  <span>Chat Zalo {SITE_CONFIG.zaloPhone}</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.hotline}`}
                  className="btn btn-hotline btn-lg"
                  style={{ width: '100%' }}
                >
                  <Phone size={18} />
                  <span>Gọi Hotline 24/7</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
