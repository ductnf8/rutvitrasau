import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Wallet, 
  Check, 
  ArrowRight, 
  Calculator,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { WALLETS_DATA, SITE_CONFIG } from '../data/siteData';

export default function WalletsShowcase({ onSelectWallet }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { id: 'all', label: 'Tất Cả Loại Ví' },
    { id: 'popular', label: 'Ví Trả Sau Phổ Biến' },
    { id: 'bnpl', label: 'Ứng Dụng BNPL' },
    { id: 'card', label: 'Thẻ Tín Dụng' }
  ];

  const allFiltered = activeCategory === 'all' 
    ? WALLETS_DATA 
    : WALLETS_DATA.filter((w) => w.category === activeCategory);

  const INITIAL_COUNT = 3;
  const displayedWallets = isExpanded || allFiltered.length <= INITIAL_COUNT
    ? allFiltered
    : allFiltered.slice(0, INITIAL_COUNT);

  const handleCalculateThis = (walletId) => {
    if (onSelectWallet) {
      onSelectWallet(walletId);
    }
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

  const handleDirectZalo = (walletName) => {
    const text = encodeURIComponent(`Chào RutVi24H, tôi muốn rút ${walletName}. Tư vấn biểu phí giúp tôi nhé!`);
    window.open(`${SITE_CONFIG.zaloUrl}?text=${text}`, '_blank');
  };

  const toggleExpand = () => {
    if (isExpanded) {
      setIsExpanded(false);
      const walletsEl = document.querySelector('#wallets');
      if (walletsEl) {
        walletsEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <section className="section section-alt" id="wallets">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Wallet size={14} />
            <span>Đa Dạng Lựa Chọn</span>
          </div>
          <h2 className="section-title">
            Các Loại Ví Hỗ Trợ Quy Đổi
          </h2>
          <p className="section-desc">
            Chúng tôi hỗ trợ hầu hết các loại ví điện tử trả sau, ứng dụng mua trước trả sau và thẻ tín dụng ngân hàng tại Việt Nam với hạn mức lên đến 50 triệu đồng.
          </p>
        </div>

        {/* Filter Tabs - Instant, clean switching */}
        <div className="filter-tabs" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setIsExpanded(false);
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Wallets Grid with Staggered Reload Animation */}
        <div className="wallets-grid" key={`${activeCategory}-${isExpanded}`}>
          {displayedWallets.map((wallet, index) => (
            <motion.div 
              key={`${activeCategory}-${wallet.id}`} 
              className="wallet-card"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.32, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div>
                <div className="wallet-card-header">
                  <div 
                    className="wallet-logo-wrapper"
                    style={{ backgroundColor: wallet.color }}
                  >
                    {wallet.logo ? (
                      <img 
                        src={wallet.logo} 
                        alt={wallet.name}
                        className="wallet-avatar-img"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          if (e.currentTarget.nextElementSibling) {
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }
                        }}
                      />
                    ) : null}
                    <span 
                      className="wallet-avatar-letter"
                      style={{ display: wallet.logo ? 'none' : 'flex' }}
                    >
                      {wallet.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="wallet-name">{wallet.name}</h3>
                    <p className="wallet-provider">{wallet.provider}</p>
                  </div>
                </div>

                <div className="wallet-details-list">
                  <div className="wallet-detail-row">
                    <span className="wallet-detail-label">Hạn mức hỗ trợ:</span>
                    <span className="wallet-detail-val highlight">{wallet.maxLimit}</span>
                  </div>
                  <div className="wallet-detail-row">
                    <span className="wallet-detail-label">Phí tham khảo:</span>
                    <span className="wallet-detail-val">{wallet.feeRange}</span>
                  </div>
                  <div className="wallet-detail-row">
                    <span className="wallet-detail-label">Thời gian giải ngân:</span>
                    <span className="wallet-detail-val">{wallet.speed}</span>
                  </div>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  {wallet.features.map((feat, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: '#475569' }}>
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#fdf2f8', color: '#a50064', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="wallet-actions">
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  style={{ flex: 1 }}
                  onClick={() => handleDirectZalo(wallet.name)}
                >
                  <span>Rút Ngay</span>
                  <ArrowRight size={14} />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleCalculateThis(wallet.id)}
                  title="Tính phí số tiền mong muốn"
                >
                  <Calculator size={15} />
                  <span>Tính Phí</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nút Xem Thêm / Thu Gọn (Nếu danh sách nhiều hơn 3 ví) */}
        {allFiltered.length > INITIAL_COUNT && (
          <div className="wallets-expand-wrap">
            <button
              type="button"
              className="wallets-expand-btn"
              onClick={toggleExpand}
              aria-expanded={isExpanded}
            >
              {!isExpanded ? (
                <>
                  <span>Xem Thêm ({allFiltered.length - INITIAL_COUNT} Loại Ví Khác)</span>
                  <span className="expand-icon-circle">
                    <ChevronDown size={16} strokeWidth={2.5} />
                  </span>
                </>
              ) : (
                <>
                  <span>Thu Gọn Danh Sách</span>
                  <span className="expand-icon-circle">
                    <ChevronUp size={16} strokeWidth={2.5} />
                  </span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
