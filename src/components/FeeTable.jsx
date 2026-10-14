import React from 'react';
import { motion } from 'motion/react';
import { 
  Percent, 
  Check, 
  Crown
} from 'lucide-react';

export default function FeeTable() {
  const COMPACT_FEES = [
    { 
      limit: "Dưới 2 Triệu", 
      rate: "Từ 7.0%", 
      time: "2 - 3 phút", 
      isVip: false, 
      supportType: "Online & Quầy", 
      note: "Phù hợp tiêu dùng cấp bách" 
    },
    { 
      limit: "Từ 2 - 5 Triệu", 
      rate: "Từ 6.2%", 
      time: "2 - 3 phút", 
      isVip: false, 
      supportType: "Online & Quầy", 
      note: "Mức rút phổ biến nhất" 
    },
    { 
      limit: "Từ 5 - 10 Triệu", 
      rate: "Từ 5.6%", 
      time: "2 - 3 phút", 
      isVip: false, 
      supportType: "Online & Quầy", 
      note: "Chiết khấu tối ưu chi phí" 
    },
    { 
      limit: "Từ 10 - 50 Triệu", 
      rate: "Từ 5.0%", 
      time: "3 - 5 phút", 
      isVip: true, 
      supportType: "Online & Quầy", 
      note: "Mức chiết khấu VIP số 1 thị trường" 
    }
  ];

  return (
    <section className="section" id="fees">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Percent size={14} />
            <span>Biểu Phí Công Khai</span>
          </div>
          <h2 className="section-title">
            Bảng Phí Rút Ví Trả Sau Minh Bạch
          </h2>
          <p className="section-desc">
            Không phí ẩn, không phí duy trì, không phí chuyển khoản ngân hàng. Quý khách nhận đúng số tiền đã chốt trước khi tiến hành thanh toán hóa đơn.
          </p>
        </div>

        {/* Bảng Tinh Gọn Duy Nhất (Chuẩn Gọn Gàng Cả Mobile Lẫn Desktop) */}
        <motion.div 
          className="table-responsive fees-compact-table-container"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <table className="fees-table">
            <thead>
              <tr>
                <th className="col-limit">Hạn Mức</th>
                <th className="col-rate">Phí Rút</th>
                <th className="col-speed">Giải Ngân</th>
                <th className="col-type desktop-col">Hình Thức</th>
                <th className="col-note desktop-col">Ghi Chú</th>
              </tr>
            </thead>
            <tbody>
              {COMPACT_FEES.map((tier, idx) => (
                <tr key={idx}>
                  <td className="col-limit">
                    <strong className="fee-limit-text">{tier.limit}</strong>
                  </td>
                  <td className="col-rate">
                    <span className="fee-rate-wrapper">
                      <span className="badge-fee-rate">
                        {tier.rate}
                      </span>
                      {tier.isVip && (
                        <span className="vip-crown-floating" title="Ưu đãi VIP">
                          <Crown 
                            size={16} 
                            color="#f59e0b" 
                            fill="#f59e0b" 
                            strokeWidth={1.5}
                          />
                        </span>
                      )}
                    </span>
                  </td>
                  <td className="col-speed">
                    <span className="fee-time-badge">
                      {tier.time}
                    </span>
                  </td>
                  <td className="col-type desktop-col">
                    <span className="fee-support-tag">{tier.supportType}</span>
                  </td>
                  <td className="col-note desktop-col">
                    <span className="fee-note-text">{tier.note}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* 4 Guarantees */}
        <div className="fee-guarantees-grid">
          <div className="fee-guarantee-item">
            <div className="guarantee-icon-wrap">
              <Check size={16} color="#059669" strokeWidth={3} />
            </div>
            <span>Cam kết không phát sinh phí ẩn</span>
          </div>
          <div className="fee-guarantee-item">
            <div className="guarantee-icon-wrap">
              <Check size={16} color="#059669" strokeWidth={3} />
            </div>
            <span>Miễn 100% phí chuyển khoản ngân hàng</span>
          </div>
          <div className="fee-guarantee-item">
            <div className="guarantee-icon-wrap">
              <Check size={16} color="#059669" strokeWidth={3} />
            </div>
            <span>Báo phí trọn gói rõ ràng trước khi làm</span>
          </div>
          <div className="fee-guarantee-item">
            <div className="guarantee-icon-wrap">
              <Check size={16} color="#059669" strokeWidth={3} />
            </div>
            <span>Hạn mức càng lớn - Chiết khấu càng cao</span>
          </div>
        </div>
      </div>
    </section>
  );
}
