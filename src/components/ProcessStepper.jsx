import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  Clock, 
  Send, 
  FileCheck2, 
  Smartphone, 
  ShieldCheck, 
  Banknote,
  ArrowRight
} from 'lucide-react';
import { PROCESS_STEPS, SITE_CONFIG } from '../data/siteData';

export default function ProcessStepper() {
  const getStepIcon = (index) => {
    switch (index) {
      case 0: return <Send size={18} />;
      case 1: return <FileCheck2 size={18} />;
      case 2: return <Smartphone size={18} />;
      case 3: return <ShieldCheck size={18} />;
      case 4: return <Banknote size={18} />;
      default: return <CheckCircle size={18} />;
    }
  };

  return (
    <section className="section" id="process">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge section-badge-emerald">
            <Clock size={14} />
            <span>Nhanh Chóng & Chuẩn Hóa</span>
          </div>
          <h2 className="section-title">
            Quy Trình 5 Bước Rút Tiền Đơn Giản
          </h2>
          <p className="section-desc">
            Nhận tiền về tài khoản ngân hàng chính chủ chỉ trong <strong>2 - 3 phút</strong>. Khách hàng hoàn toàn chủ động, an tâm tuyệt đối nhờ không cung cấp OTP hay mật khẩu.
          </p>
        </div>

        {/* Stepper Grid (Desktop: 5 Cột Ngang • Mobile: Danh Sách Thẻ Tinh Gọn Không Bị Dài) */}
        <div className="process-grid">
          {PROCESS_STEPS.map((stepItem, idx) => (
            <motion.div
              key={idx}
              className="process-step-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="step-badge-icon-group">
                <div className="step-number-badge">
                  {stepItem.step}
                </div>
                <div className="step-icon-wrap">
                  {getStepIcon(idx)}
                </div>
              </div>

              <div className="step-content-group">
                <div className="step-title-row">
                  <h3 className="step-title">{stepItem.title}</h3>
                  <span className="step-time-tag">
                    ⏱️ {stepItem.time}
                  </span>
                </div>
                <p className="step-desc">
                  {stepItem.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="process-bottom-banner">
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '4px' }}>
              Bạn cần rút tiền ví gấp ngay bây giờ?
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#4338ca' }}>
              Chuyên viên tài chính của RutVi24H đang trực tuyến và sẵn sàng hỗ trợ giải ngân sau 2 phút.
            </p>
          </div>
          <a
            href={SITE_CONFIG.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-zalo btn-md"
            style={{ flexShrink: 0 }}
          >
            <span>Nhắn Zalo Ngay</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
