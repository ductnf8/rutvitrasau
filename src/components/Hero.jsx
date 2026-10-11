import React from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  MapPin,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import FinancialCalculator from './FinancialCalculator';

export default function Hero({ selectedWalletId, onSelectWallet }) {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        {/* Unified Hero Shell (Khối Hero Cao Cấp Hoàn Chỉnh) */}
        <div className="hero-shell">
          <div className="hero-grid">
            {/* Left Column: Hero Information */}
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge */}
              <div className="section-badge hero-top-badge">
                <Sparkles size={15} color="#8a0053" />
                <span>Đối Tác Tài Chính Uy Tín Số 1</span>
              </div>

              {/* Main H1 Title */}
              <h1 className="hero-headline">
                Dịch Vụ Rút Ví Trả Sau <br />
                <span className="hero-gradient-text">Nhanh Chóng & An Toàn</span>
              </h1>

              {/* Subtitle - Độ tương phản cao, nét đậm, không mờ */}
              <p className="hero-subheadline">
                Chuyển đổi hạn mức <strong>Ví Trả Sau MoMo, ZaloPay, Kredivo, SPayLater...</strong> thành tiền mặt chuyển khoản trong 2-3 phút. Cam kết <strong>chi phí minh bạch</strong>, tuyệt đối <strong>không giữ OTP</strong>, không yêu cầu mật khẩu.
              </p>

              {/* 4 Core Features */}
              <div className="hero-features-list">
                <div className="hero-feature-item">
                  <div className="feature-check-icon">
                    <CheckCircle2 size={16} strokeWidth={2.5} />
                  </div>
                  <span>Bảo mật 100% (Không giữ OTP/Pass)</span>
                </div>
                <div className="hero-feature-item">
                  <div className="feature-check-icon">
                    <CheckCircle2 size={16} strokeWidth={2.5} />
                  </div>
                  <span>Giải ngân tiền mặt sau 2-3 phút</span>
                </div>
                <div className="hero-feature-item">
                  <div className="feature-check-icon">
                    <CheckCircle2 size={16} strokeWidth={2.5} />
                  </div>
                  <span>Báo phí trọn gói minh bạch 1 lần</span>
                </div>
                <div className="hero-feature-item">
                  <div className="feature-check-icon">
                    <CheckCircle2 size={16} strokeWidth={2.5} />
                  </div>
                  <span>Hỗ trợ tại quầy Láng & Online 24/7</span>
                </div>
              </div>

              {/* Quick CTA Buttons */}
              <div className="hero-cta-group">
                <a
                  href={SITE_CONFIG.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-zalo btn-lg"
                  id="hero-zalo-cta"
                >
                  <MessageCircle size={18} />
                  <span>Chat Zalo</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.hotline}`}
                  className="btn btn-secondary btn-lg"
                  id="hero-call-cta"
                >
                  <PhoneCall size={18} />
                  <span>Gọi Trực Tiếp</span>
                </a>
              </div>

              {/* Address & Hours */}
              <div className="hero-support-tag">
                <MapPin size={16} color="#a50064" />
                <span>Điểm giao dịch trực tiếp: <strong>{SITE_CONFIG.addressShort}</strong></span>
              </div>
            </motion.div>

            {/* Right Column: Financial Calculator */}
            <motion.div
              className="hero-calc-wrapper"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <FinancialCalculator
                selectedWalletId={selectedWalletId}
                onSelectWallet={onSelectWallet}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
