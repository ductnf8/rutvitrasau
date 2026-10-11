import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Clock, ArrowRight, X, CheckCircle, ShieldAlert } from 'lucide-react';
import { BLOG_GUIDES, SITE_CONFIG } from '../data/siteData';

export default function GuidesSection() {
  const [activeGuide, setActiveGuide] = useState(null);

  const getFullContent = (guideId) => {
    switch (guideId) {
      case 'bi-quyet-rut-vi-momo-an-toan':
        return (
          <>
            <p>Ví Trả Sau MoMo do ngân hàng TPBank và Shinhan Bank hợp tác cung cấp, mang lại hạn mức chi tiêu từ 1 triệu đến 20 triệu đồng. Để quy đổi hạn mức sang tiền mặt an toàn nhất mà không lo bị hạn chế tính năng hay khóa ví, người dùng cần lưu ý các nguyên tắc quan trọng sau:</p>
            <h4 style={{ margin: '16px 0 8px', color: '#0f172a' }}>1. Chỉ thanh toán qua các hóa đơn dịch vụ hợp lệ</h4>
            <p>MoMo áp dụng thuật toán kiểm soát giao dịch rất nghiêm ngặt. Khi quy đổi tại RutVi24H, giao dịch được thực hiện bằng cách thanh toán các hóa đơn mua sắm tiện ích, dịch vụ thực tế, có mã đối tác rõ ràng. Điều này giúp tài khoản của bạn được ghi nhận là một giao dịch tiêu dùng bình thường, giữ điểm uy tín cho ví.</p>
            <h4 style={{ margin: '16px 0 8px', color: '#0f172a' }}>2. Tuyệt đối không đưa mật khẩu và OTP cho bất kỳ ai</h4>
            <p>Nhiều khách hàng đã bị mất tài khoản do tin lời kẻ gian đòi gửi mã OTP để "kích hoạt hạn mức cao". Hãy ghi nhớ: Quy trình an toàn chuẩn là khách hàng tự tay mở app MoMo cá nhân để quét mã thanh toán dịch vụ.</p>
            <h4 style={{ margin: '16px 0 8px', color: '#0f172a' }}>3. Tận dụng tối đa chu kỳ miễn lãi 45 ngày</h4>
            <p>Sau khi nhận tiền mặt, hãy chủ động thanh toán lại khoản chi tiêu vào ngày đến hạn của tháng tiếp theo để không phát sinh phí chậm trả, đồng thời nâng cao điểm tin cậy trên hệ thống tín dụng quốc gia CIC.</p>
          </>
        );
      case 'nhan-biet-bay-lua-dao-rut-vi':
        return (
          <>
            <p>Lợi dụng nhu cầu tài chính khẩn cấp của nhiều người dùng ví trả sau, các đối tượng xấu liên tục tung ra các chiêu trò lừa đảo tinh vi. Hãy nhận biết ngay 5 dấu hiệu dưới đây để bảo vệ tài sản của mình:</p>
            <h4 style={{ margin: '16px 0 8px', color: '#0f172a' }}>1. Chào mời phí rẻ bất thường (1% - 2%)</h4>
            <p>Thực tế, chi phí chiết khấu cổng thanh toán trung gian và thuế đối tác luôn dao động từ 6% - 8%. Những bên hứa hẹn rút ví chỉ với 1% - 2% đa phần là chiêu trò dụ dỗ để khách thanh toán hóa đơn xong rồi lập tức chặn liên lạc.</p>
            <h4 style={{ margin: '16px 0 8px', color: '#0f172a' }}>2. Đòi cung cấp mã OTP và mật khẩu đăng nhập</h4>
            <p>Không có bất kỳ lý do kỹ thuật nào đòi hỏi nhân viên rút ví phải cầm mật khẩu hay OTP của khách. Khi đối tượng có được mã OTP, chúng sẽ chiếm quyền kiểm soát toàn bộ tài khoản và chuyển tiền đi nơi khác.</p>
            <h4 style={{ margin: '16px 0 8px', color: '#0f172a' }}>3. Bắt cài đặt app lạ qua link đuôi .apk</h4>
            <p>Tuyệt đối không nhấn vào các đường link lạ tự xưng là "Cổng giải ngân" gửi qua tin nhắn. Mọi thao tác thanh toán chỉ được diễn ra duy nhất trong ứng dụng chính thức của MoMo, ZaloPay, Shopee tải từ Google Play hoặc App Store.</p>
          </>
        );
      case 'tang-han-muc-kredivo-spaylater':
        return (
          <>
            <p>Kredivo và SPayLater (Shopee) là hai nền tảng Mua trước trả sau (BNPL) có hạn mức cấp rất cao (lên tới 25 - 50 triệu đồng). Dưới đây là cách giúp bạn nâng hạn mức nhanh chóng:</p>
            <h4 style={{ margin: '16px 0 8px', color: '#0f172a' }}>1. Duy trì lịch sử thanh toán đúng hạn</h4>
            <p>Đây là yếu tố tiên quyết chiếm 60% quyết định xét duyệt nâng hạn mức của hệ thống AI. Chỉ cần thanh toán đúng hoặc trước hạn 2-3 ngày trong 2 kỳ liên tiếp, bạn sẽ tự động được mở thêm hạn mức mới.</p>
            <h4 style={{ margin: '16px 0 8px', color: '#0f172a' }}>2. Tần suất giao dịch đều đặn</h4>
            <p>Sử dụng ví trả sau thường xuyên cho các giao dịch nhỏ và vừa giúp thuật toán đánh giá bạn là khách hàng năng động và có khả năng tài chính ổn định.</p>
            <h4 style={{ margin: '16px 0 8px', color: '#0f172a' }}>3. Bổ sung thông tin xác thực định danh (eKYC) đầy đủ</h4>
            <p>Cập nhật tài khoản ngân hàng chính chủ và xác thực CCCD gắn chip để nâng cấp tài khoản lên gói Basic/Premium, mở khóa hạn mức tối đa của ví.</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="section section-alt" id="guides">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <BookOpen size={14} />
            <span>Kiến Thức Hữu Ích</span>
          </div>
          <h2 className="section-title">
            Cẩm Nang & Kinh Nghiệm Tiêu Dùng Thông Minh
          </h2>
          <p className="section-desc">
            Trang bị kiến thức tài chính số cần thiết, các mẹo sử dụng ví trả sau an toàn và bảo vệ điểm tín dụng cá nhân của bạn.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="guides-grid">
          {BLOG_GUIDES.map((guide) => (
            <motion.article 
              key={guide.id} 
              className="guide-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div>
                <span className="guide-tag">{guide.category}</span>
                <h3 className="guide-title" style={{ marginTop: '8px', marginBottom: '10px' }}>
                  {guide.title}
                </h3>
                <p className="guide-summary">{guide.summary}</p>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8125rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={13} />
                  <span>{guide.readTime}</span>
                </span>
                <button
                  type="button"
                  className="guide-read-more"
                  onClick={() => setActiveGuide(guide)}
                >
                  <span>Đọc tiếp</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activeGuide && (
          <div 
            className="guide-modal-overlay"
            onClick={() => setActiveGuide(null)}
          >
            <motion.div
              className="guide-modal-card"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Cố Định Tuyệt Đối - Không Bao Giờ Bị Cuộn Khi Vuốt */}
              <div className="guide-modal-fixed-header">
                <div className="guide-modal-fixed-header-left">
                  <span className="guide-tag" style={{ margin: 0 }}>{activeGuide.category}</span>
                  <span className="guide-modal-fixed-title">{activeGuide.title}</span>
                </div>
                <button
                  type="button"
                  className="guide-modal-close-btn"
                  onClick={() => setActiveGuide(null)}
                  aria-label="Đóng bài viết"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Phần Thân Cuộn Độc Lập Bên Dưới */}
              <div className="guide-modal-scroll-body">
                <h3 className="guide-modal-body-title">
                  {activeGuide.title}
                </h3>
                <div className="guide-modal-meta-row">
                  <span>Tác giả: <strong>{activeGuide.author}</strong></span>
                  <span>•</span>
                  <span>Cập nhật: {activeGuide.date}</span>
                </div>

                <div className="guide-modal-content-text">
                  {getFullContent(activeGuide.id)}
                </div>

                <div className="guide-modal-bottom-cta">
                  <span style={{ fontSize: '0.875rem', color: '#475569', fontWeight: 600 }}>Cần hỗ trợ quy đổi ví ngay?</span>
                  <a
                    href={SITE_CONFIG.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-zalo btn-sm"
                  >
                    <span>Chat Zalo Tư Vấn 24/7</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
