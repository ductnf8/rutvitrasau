import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, ArrowUp, Calculator } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToCalculator = () => {
    const calcEl = document.querySelector('#calculator');
    if (calcEl) {
      const headerHeight = document.querySelector('.site-header')?.offsetHeight || 74;
      const elementPosition = calcEl.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 16;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Floating Action Buttons (Desktop & Tablet) */}
      <div className="floating-actions" aria-label="Hỗ trợ nhanh">
        {/* Scroll To Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              type="button"
              className="scroll-top-btn"
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Cuộn lên đầu trang"
            >
              <ArrowUp size={20} strokeWidth={2.5} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Sticky Bottom Action Bar on Mobile Screens (< 768px) */}
      <div className="mobile-bottom-bar" aria-label="Thao tác nhanh trên điện thoại">
        <a
          href={`tel:${SITE_CONFIG.hotline}`}
          className="btn btn-secondary btn-sm"
          style={{ padding: '8px 10px', fontSize: '0.78rem' }}
          id="mobile-bottom-call"
        >
          <Phone size={15} color="#10b981" />
          <span>Gọi Ngay</span>
        </a>

        <a
          href={SITE_CONFIG.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-zalo btn-sm"
          style={{ padding: '8px 12px', fontSize: '0.8125rem', fontWeight: 700 }}
          id="mobile-bottom-zalo"
        >
          <MessageCircle size={15} />
          <span>Zalo 24/7</span>
        </a>

        <button
          type="button"
          className="btn btn-secondary btn-sm"
          style={{ padding: '8px 10px', fontSize: '0.78rem' }}
          onClick={scrollToCalculator}
          id="mobile-bottom-calc"
        >
          <Calculator size={15} color="#6366f1" />
          <span>Tính Phí</span>
        </button>
      </div>
    </>
  );
}
