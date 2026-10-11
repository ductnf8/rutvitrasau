import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Lock,
  EyeOff
} from 'lucide-react';
import { SECURITY_COMPARISON, SITE_CONFIG } from '../data/siteData';

export default function SecurityCenter() {
  return (
    <section className="section" id="security" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge" style={{ backgroundColor: '#ecfdf5', color: '#059669', borderColor: 'rgba(5, 150, 105, 0.2)' }}>
            <Lock size={14} />
            <span>Tiêu Chuẩn Bảo Mật Cao Cấp</span>
          </div>
          <h2 className="section-title">
            Bảo Mật 100% & Cảnh Báo Lừa Đảo
          </h2>
          <p className="section-desc">
            Sự an toàn của tài khoản và thông tin cá nhân là ưu tiên hàng đầu tại RutVi24H. Hãy phân biệt rõ dấu hiệu an toàn để tránh rơi vào bẫy của các đối tượng mạo danh.
          </p>
        </div>

        {/* Security Shield Card */}
        <motion.div 
          className="security-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="security-grid">
            {/* Legit Column */}
            <div>
              <div className="security-box-header">
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="security-box-title" style={{ color: '#34d399' }}>
                    Quy Chuẩn Tại RutVi24H
                  </h3>
                  <span style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>Cam kết bảo mật tuyệt đối</span>
                </div>
              </div>

              <div className="promise-list">
                {SECURITY_COMPARISON.legit.map((item, idx) => (
                  <div key={idx} className="promise-item">
                    <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scam Column */}
            <div>
              <div className="security-box-header">
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#f87171', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AlertTriangle size={22} />
                </div>
                <div>
                  <h3 className="security-box-title" style={{ color: '#f87171' }}>
                    Dấu Hiệu Mạo Danh Cần Cảnh Giác
                  </h3>
                  <span style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>Cảnh báo chiêu trò lừa đảo</span>
                </div>
              </div>

              <div className="warning-list">
                {SECURITY_COMPARISON.scam.map((item, idx) => (
                  <div key={idx} className="warning-item">
                    <XCircle size={18} color="#f87171" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hotline Verification Alert */}
          <div className="security-alert-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="security-alert-icon">
                <EyeOff size={20} color="#b45309" />
              </div>
              <span className="security-alert-text">
                Kênh liên hệ chính thức duy nhất của RutVi24H: <strong className="security-alert-phone">Zalo/Hotline: {SITE_CONFIG.hotlineFormatted}</strong>
              </span>
            </div>
            <a
              href={`tel:${SITE_CONFIG.hotline}`}
              className="btn btn-primary btn-sm"
              id="security-verify-call"
            >
              Xác Minh Gọi {SITE_CONFIG.hotlineFormatted}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
