import React from 'react';
import { MapPin, Globe, Clock, Phone, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export default function LocationsSection() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <MapPin size={14} />
            <span>Điểm Hỗ Trợ Đáng Tin Cậy</span>
          </div>
          <h2 className="section-title">
            Giao Dịch Trực Tiếp & Online Toàn Quốc
          </h2>
          <p className="section-desc">
            Quý khách có thể đến trực tiếp điểm giao dịch tại Hà Nội để an tâm tuyệt đối, hoặc thực hiện giao dịch Online siêu tốc bất kỳ lúc nào trong 24/7.
          </p>
        </div>

        {/* Location Grid */}
        <div className="location-grid">
          {/* Hanoi Offline Card */}
          <div className="location-card">
            <span className="location-badge">
              <MapPin size={13} />
              <span>Giao Dịch Tại Quầy Hà Nội</span>
            </span>

            <div className="location-image-wrapper">
              <img 
                src="/van-phong-lang.jpg" 
                alt="Văn phòng hỗ trợ rút ví trả sau Đường Láng Hà Nội" 
                className="location-office-img"
                loading="lazy" 
              />
              <span className="location-image-caption">📍 Văn phòng tiếp đón khách hàng tại Đường Láng</span>
            </div>

            <h3 className="location-title">
              Văn Phòng Đường Láng (Đống Đa - Hà Nội)
            </h3>

            <div className="location-info-list">
              <div className="location-info-item">
                <MapPin size={18} color="#a50064" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Địa chỉ tiếp đón:</strong>
                  <p>{SITE_CONFIG.addressHanoi}</p>
                </div>
              </div>

              <div className="location-info-item">
                <Clock size={18} color="#a50064" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Giờ tiếp đón trực tiếp:</strong>
                  <p>08:00 - 22:00 hàng ngày (Vui lòng liên hệ Zalo trước khi qua để chuẩn bị tiếp đón chu đáo).</p>
                </div>
              </div>

              <div className="location-info-item">
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Tiện ích quầy:</strong>
                  <p>Bãi đỗ xe máy & ô tô miễn phí, nhân viên hỗ trợ thao tác trực tiếp, xuất biên nhận đầy đủ.</p>
                </div>
              </div>
            </div>

            <div className="hide-on-desktop" style={{ marginTop: 'auto', paddingTop: '16px' }}>
              <a
                href={`tel:${SITE_CONFIG.hotline}`}
                className="btn btn-secondary btn-md"
                style={{ width: '100%' }}
                id="location-hanoi-call"
              >
                <Phone size={16} />
                <span>Gọi Đặt Hẹn Trước</span>
              </a>
            </div>
          </div>

          {/* Online Nationwide Card */}
          <div className="location-card">
            <span className="location-badge" style={{ backgroundColor: '#ecfdf5', color: '#059669' }}>
              <Globe size={13} />
              <span>Hỗ Trợ Online Toàn Quốc 24/7</span>
            </span>

            <div className="location-image-wrapper">
              <img 
                src="/anh-bia-zalo.jpg" 
                alt="Hệ thống hỗ trợ rút ví trả sau Online toàn quốc 24/7" 
                className="location-office-img"
                loading="lazy" 
              />
              <span className="location-image-caption" style={{ background: 'rgba(0, 104, 255, 0.88)' }}>
                ⚡ Giải ngân Napas 24/7 nổ tài khoản trong 30 giây
              </span>
            </div>

            <h3 className="location-title">
              Hệ Thống Giải Ngân Tự Động 63 Tỉnh Thành
            </h3>

            <div className="location-info-list">
              <div className="location-info-item">
                <Globe size={18} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Phạm vi hỗ trợ:</strong>
                  <p>Hà Nội, TP.HCM, Đà Nẵng, Hải Phòng, Cần Thơ và tất cả 63 tỉnh thành trên toàn quốc.</p>
                </div>
              </div>

              <div className="location-info-item">
                <Clock size={18} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Thời gian hoạt động:</strong>
                  <p>24/7/365 xuyên suốt ngày đêm, Thứ Bảy, Chủ Nhật và các ngày Lễ, Tết.</p>
                </div>
              </div>

              <div className="location-info-item">
                <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Tốc độ chuyển khoản:</strong>
                  <p>Napas 24/7 chuyển tiền nổ STK chính chủ trong 30 giây tới mọi ngân hàng tại Việt Nam.</p>
                </div>
              </div>

              <div className="location-info-item">
                <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Thao tác:</strong>
                  <p>100% Online qua Zalo, khách hàng chỉ cần quét mã QR hóa đơn ngay trên điện thoại của mình.</p>
                </div>
              </div>
            </div>

            <div className="hide-on-desktop" style={{ marginTop: 'auto', paddingTop: '16px' }}>
              <a
                href={SITE_CONFIG.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-zalo btn-md"
                style={{ width: '100%' }}
                id="location-online-zalo"
              >
                <span>Nhắn Zalo Nhận Tiền Ngay</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
