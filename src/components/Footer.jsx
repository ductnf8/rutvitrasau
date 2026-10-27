import React from 'react';
import { Sparkles, MapPin, Phone, Clock, MessageCircle, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-fluid-container">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div>
            <div className="brand-logo" style={{ color: 'var(--text-main)', marginBottom: '16px' }}>
              <img
                src={SITE_CONFIG.logoFull}
                alt={`${SITE_CONFIG.brandName} Logo`}
                className="brand-logo-full-img"
                width="140"
                height="36"
              />
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#334155', marginBottom: '20px' }}>
              <strong>RutVi24H</strong> – Đơn vị uy tín hàng đầu cung cấp giải pháp quy đổi hạn mức Ví Trả Sau và Mua trước trả sau thành tiền mặt an toàn, minh bạch, giải ngân 2-3 phút tại Hà Nội & toàn quốc.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem', color: '#1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="#a50064" />
                <span>{SITE_CONFIG.addressHanoi}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="#059669" />
                <span>Hotline/Zalo: <strong style={{ color: '#8a0053' }}>{SITE_CONFIG.hotlineFormatted}</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} color="#2563eb" />
                <span>Làm việc: <strong>{SITE_CONFIG.workingHours}</strong></span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="footer-col-title">Dịch Vụ Nổi Bật</h4>
            <div className="footer-links-list">
              <a href="#wallets" className="footer-link" onClick={(e) => handleNavClick(e, '#wallets')}>Rút Ví Trả Sau MoMo</a>
              <a href="#wallets" className="footer-link" onClick={(e) => handleNavClick(e, '#wallets')}>Rút Tài Khoản ZaloPay</a>
              <a href="#wallets" className="footer-link" onClick={(e) => handleNavClick(e, '#wallets')}>Rút Hạn Mức Kredivo</a>
              <a href="#wallets" className="footer-link" onClick={(e) => handleNavClick(e, '#wallets')}>Rút SPayLater ShopeePay</a>
              <a href="#wallets" className="footer-link" onClick={(e) => handleNavClick(e, '#wallets')}>Rút Viettel Money Trả Sau</a>
              <a href="#wallets" className="footer-link" onClick={(e) => handleNavClick(e, '#wallets')}>Rút Thẻ Tín Dụng Quốc Tế</a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="footer-col-title">Về Chúng Tôi</h4>
            <div className="footer-links-list">
              <a href="#hero" className="footer-link" onClick={(e) => handleNavClick(e, '#hero')}>Giới Thiệu Chung</a>
              <a href="#calculator" className="footer-link" onClick={(e) => handleNavClick(e, '#calculator')}>Công Cụ Tính Phí</a>
              <a href="#fees" className="footer-link" onClick={(e) => handleNavClick(e, '#fees')}>Bảng Biểu Phí Minh Bạch</a>
              <a href="#process" className="footer-link" onClick={(e) => handleNavClick(e, '#process')}>Quy Trình 5 Bước</a>
              <a href="#security" className="footer-link" onClick={(e) => handleNavClick(e, '#security')}>Cam Kết Bảo Mật 100%</a>
              <a href="#faq" className="footer-link" onClick={(e) => handleNavClick(e, '#faq')}>Hỏi Đáp Thường Gặp</a>
            </div>
          </div>

          {/* Col 4: Trust & Support */}
          <div>
            <h4 className="footer-col-title">Hỗ Trợ Nhanh</h4>
            <p style={{ fontSize: '0.875rem', color: '#334155', marginBottom: '16px', lineHeight: 1.6 }}>
              Nhân viên tư vấn túc trực 24/7 để báo phí và hướng dẫn quý khách thao tác trong 1 phút.
            </p>
            <a
              href={SITE_CONFIG.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-zalo btn-md"
              style={{ width: '100%', marginBottom: '10px' }}
            >
              <MessageCircle size={16} />
              <span>Chat Zalo Báo Phí</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.hotline}`}
              className="btn btn-hotline btn-md hide-on-desktop"
              style={{ width: '100%' }}
            >
              <Phone size={16} />
              <span>Hotline: {SITE_CONFIG.hotlineFormatted}</span>
            </a>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div style={{
          padding: '16px 20px',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-md)',
          border: '1.5px solid #fce7f3',
          fontSize: '0.8rem',
          lineHeight: 1.65,
          color: '#475569',
          marginBottom: '28px'
        }}>
          * <strong>Khuyến cáo tiêu dùng:</strong> RutVi24H là giải pháp hỗ trợ thanh toán hóa đơn tiêu dùng và tiện ích hợp lệ theo quy định của các nhà cung cấp dịch vụ ví điện tử. Chúng tôi không phải là tổ chức tín dụng đen và tuyệt đối không thu các loại phí phi pháp. Khách hàng vui lòng có trách nhiệm thanh toán lại dư nợ đúng hạn hàng tháng để bảo vệ điểm tín dụng cá nhân (CIC).
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© 2026 {SITE_CONFIG.domain} – Dịch Vụ Rút Ví Trả Sau Uy Tín Toàn Quốc. Bảo lưu mọi quyền.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#security" className="footer-link" onClick={(e) => handleNavClick(e, '#security')}>Chính sách bảo mật</a>
            <a href="#fees" className="footer-link" onClick={(e) => handleNavClick(e, '#fees')}>Điều khoản dịch vụ</a>
            <a href="#contact" className="footer-link" onClick={(e) => handleNavClick(e, '#contact')}>Liên hệ hỗ trợ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
