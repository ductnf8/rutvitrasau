import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQ_DATA, SITE_CONFIG } from '../data/siteData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // Open first item by default

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={14} />
            <span>Giải Đáp Thắc Mắc</span>
          </div>
          <h2 className="section-title">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="section-desc">
            Tổng hợp câu trả lời chi tiết và chính xác nhất cho những băn khoăn của khách hàng khi tìm hiểu dịch vụ quy đổi hạn mức ví trả sau.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-container">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  id={`faq-trigger-${idx}`}
                  aria-controls={`faq-content-${idx}`}
                >
                  <span>{idx + 1}. {faq.question}</span>
                  <div className="faq-icon-wrapper">
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${idx}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${idx}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="faq-content">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contact help prompt */}
        <div className="faq-bottom-cta">
          <p className="faq-bottom-cta-text">
            Bạn vẫn còn câu hỏi khác cần được tư vấn chi tiết hơn?
          </p>
          <a
            href={SITE_CONFIG.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-md faq-cta-button"
            id="faq-zalo-cta"
          >
            <MessageCircle size={18} color="#0068ff" style={{ flexShrink: 0 }} />
            <span>Chat Zalo Tư Vấn: {SITE_CONFIG.hotlineFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
