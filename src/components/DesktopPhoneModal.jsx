import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  PhoneCall, 
  Copy, 
  Check, 
  X, 
  MessageCircle, 
  Info,
  Clock
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export default function DesktopPhoneModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Global click interceptor for tel: links on desktop / laptop screens
  useEffect(() => {
    const handleTelClick = (e) => {
      const link = e.target.closest('a[href^="tel:"]');
      // If clicking a telephone link on laptop/desktop (screen width >= 992px)
      if (link && window.innerWidth >= 992) {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(true);
      }
    };

    // Use capture to intercept before any default browser action
    document.addEventListener('click', handleTelClick, true);
    return () => document.removeEventListener('click', handleTelClick, true);
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(SITE_CONFIG.hotline);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="desktop-modal-portal" role="dialog" aria-modal="true" aria-labelledby="modal-phone-title">
          {/* Backdrop Overlay */}
          <motion.div
            className="desktop-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Container */}
          <div className="desktop-modal-wrap">
            <motion.div
              className="desktop-modal-card"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
            >
              {/* Close Button */}
              <button
                type="button"
                className="desktop-modal-close"
                onClick={() => setIsOpen(false)}
                aria-label="Đóng cửa sổ"
              >
                <X size={20} />
              </button>

              {/* Header Icon */}
              <div className="desktop-modal-icon-wrapper">
                <div className="desktop-modal-icon-ring">
                  <Smartphone size={32} className="desktop-phone-icon" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 id="modal-phone-title" className="desktop-modal-title">
                Bạn Đang Dùng Laptop / Máy Tính
              </h3>

              <div className="desktop-modal-notice">
                <Info size={16} className="notice-icon" />
                <p>
                  Vui lòng <strong>sử dụng thao tác này trên điện thoại</strong> để kết nối cuộc gọi trực tiếp nhanh nhất.
                </p>
              </div>

              {/* Phone Copy Card */}
              <div className="desktop-phone-card">
                <div className="phone-card-info">
                  <span className="phone-card-label">Số Hotline & Zalo 24/7:</span>
                  <strong className="phone-card-number">{SITE_CONFIG.hotlineFormatted}</strong>
                </div>

                <button
                  type="button"
                  className={`btn-copy-phone ${copied ? 'copied' : ''}`}
                  onClick={handleCopyPhone}
                >
                  {copied ? (
                    <>
                      <Check size={16} />
                      <span>Đã chép số</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Sao chép</span>
                    </>
                  )}
                </button>
              </div>

              {/* Working Hours Badge */}
              <div className="desktop-modal-working-badge">
                <Clock size={14} color="#059669" />
                <span>Trực tổng đài: {SITE_CONFIG.workingHours}</span>
              </div>

              {/* Action Buttons */}
              <div className="desktop-modal-actions">
                <a
                  href={SITE_CONFIG.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-zalo btn-md"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle size={18} />
                  <span>Chat Zalo Ngay (Khuyên dùng trên Web)</span>
                </a>

                <button
                  type="button"
                  className="btn btn-outline-cancel"
                  onClick={() => setIsOpen(false)}
                >
                  Đã hiểu & Đóng
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
