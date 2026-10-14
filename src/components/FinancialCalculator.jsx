import React, { useState, useEffect, useRef, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown,
  MessageCircle
} from 'lucide-react';
import { SITE_CONFIG, WALLETS_DATA } from '../data/siteData';

export default function FinancialCalculator({ selectedWalletId: externalWalletId, onSelectWallet }) {
  const [amount, setAmount] = useState(3000000);
  const [internalWalletId, setInternalWalletId] = useState('momo_trasau');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [method, setMethod] = useState('online'); // 'online' | 'offline'

  const dropdownRef = useRef(null);
  const amountInputId = useId();

  const selectedWalletId = externalWalletId || internalWalletId;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const quickAmounts = [1000000, 2000000, 3000000, 5000000, 10000000, 20000000];

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('vi-VN').format(val) + ' đ';
  };

  const handleAmountInputChange = (e) => {
    const rawVal = e.target.value.replace(/[^\d]/g, '');
    const num = rawVal ? parseInt(rawVal, 10) : 0;
    setAmount(num);
  };

  const handleSelectWallet = (id) => {
    if (onSelectWallet) {
      onSelectWallet(id);
    }
    setInternalWalletId(id);
    setIsDropdownOpen(false);
  };

  // Determine Fee Percentage
  const calculateFeePercent = () => {
    if (selectedWalletId === 'credit_card') {
      return method === 'offline' ? 2.0 : 1.8;
    }

    let base = 7.0;

    if (selectedWalletId === 'momo_trasau' || selectedWalletId === 'zalopay_trasau') {
      // MoMo & ZaloPay: 5% - 7%
      if (amount >= 10000000) {
        base = 5.0;
      } else if (amount >= 5000000) {
        base = 5.6;
      } else if (amount >= 2000000) {
        base = 6.2;
      } else {
        base = 7.0;
      }
    } else if (selectedWalletId === 'tiktok_paylater') {
      // TikTok PayLater: 10% - 12%
      if (amount >= 10000000) {
        base = 10.0;
      } else if (amount >= 5000000) {
        base = 10.8;
      } else if (amount >= 2000000) {
        base = 11.4;
      } else {
        base = 12.0;
      }
    } else if (selectedWalletId === 'fe_paylater') {
      // FE PayLater: 9% - 12%
      if (amount >= 10000000) {
        base = 9.0;
      } else if (amount >= 5000000) {
        base = 10.0;
      } else if (amount >= 2000000) {
        base = 11.0;
      } else {
        base = 12.0;
      }
    } else {
      // Kredivo, SPayLater, Viettel Money: 7.8% - 8.8%
      if (amount >= 10000000) {
        base = 7.5;
      } else if (amount >= 5000000) {
        base = 8.0;
      } else if (amount >= 2000000) {
        base = 8.4;
      } else {
        base = 8.8;
      }
    }

    if (method === 'offline') {
      base += 1.0;
    }

    return parseFloat(base.toFixed(1));
  };

  const feePercent = calculateFeePercent();
  const feeAmount = Math.round((amount * feePercent) / 100);
  const finalReceived = Math.max(0, amount - feeAmount);

  const selectedWallet = WALLETS_DATA.find((w) => w.id === selectedWalletId) || WALLETS_DATA[0];

  const handleZaloSubmit = () => {
    const message = `Chào RutVi24H, tôi muốn rút ${selectedWallet.name} số tiền ${formatCurrency(amount)} theo hình thức ${method === 'online' ? 'Online 24/7' : 'Tại quầy Hà Nội'}. Tư vấn giúp tôi với!`;
    const encoded = encodeURIComponent(message);
    window.open(`${SITE_CONFIG.zaloUrl}?text=${encoded}`, '_blank');
  };

  return (
    <div className="calc-card" id="calculator">
      <div className="calc-header">
        <h3 className="calc-title">
          <Calculator size={22} color="#a50064" />
          <span>Tính Phí Rút Tiền Nhanh</span>
        </h3>
        <span className="calc-badge">Ước tính chuẩn 100%</span>
      </div>

      {/* Số tiền cần rút */}
      <div className="calc-group">
        <div className="calc-label">
          <label htmlFor={amountInputId}>Số tiền muốn rút (VNĐ)</label>
          <span className="calc-label-hint">Tối thiểu 500.000đ</span>
        </div>
        <div className="calc-input-wrapper">
          <span className="calc-currency-prefix">₫</span>
          <input
            id={amountInputId}
            type="text"
            className="calc-amount-input"
            value={amount ? new Intl.NumberFormat('vi-VN').format(amount) : ''}
            onChange={handleAmountInputChange}
            placeholder="Ví dụ: 3.000.000"
            aria-label="Nhập số tiền muốn rút"
          />
        </div>

        {/* Quick Chips */}
        <div className="calc-quick-chips">
          {quickAmounts.map((q) => (
            <button
              key={q}
              type="button"
              className={`chip-btn ${amount === q ? 'active' : ''}`}
              onClick={() => setAmount(q)}
            >
              {q >= 1000000 ? `${q / 1000000} Triệu` : formatCurrency(q)}
            </button>
          ))}
        </div>

        {/* Range Slider */}
        <input
          type="range"
          min={500000}
          max={20000000}
          step={500000}
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value, 10))}
          className="calc-range-slider"
          aria-label="Thanh trượt chọn số tiền"
        />
      </div>

      {/* Custom Dropdown Chỉn Chu Cho Chọn Loại Ví */}
      <div className="calc-group" ref={dropdownRef}>
        <div className="calc-label">
          <span>Chọn loại ví / ứng dụng trả sau</span>
          <span className="calc-label-hint">Hạn mức lên tới {selectedWallet.maxLimit}</span>
        </div>

        <div className="custom-dropdown-container">
          <button
            type="button"
            className={`custom-dropdown-trigger ${isDropdownOpen ? 'open' : ''}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-haspopup="listbox"
            aria-expanded={isDropdownOpen}
          >
            <div className="custom-dropdown-selected-info">
              <div 
                className="wallet-mini-avatar" 
                style={{ backgroundColor: selectedWallet.color }}
              >
                {selectedWallet.logo ? (
                  <img
                    src={selectedWallet.logo}
                    alt={selectedWallet.name}
                    className="wallet-mini-avatar-img"
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
                  style={{ display: selectedWallet.logo ? 'none' : 'flex' }}
                >
                  {selectedWallet.name.charAt(0)}
                </span>
              </div>
              <div className="custom-dropdown-text">
                <span className="dropdown-wallet-name">{selectedWallet.name}</span>
                <span className="dropdown-wallet-provider">{selectedWallet.provider}</span>
              </div>
            </div>
            <ChevronDown 
              size={18} 
              className={`dropdown-chevron ${isDropdownOpen ? 'rotated' : ''}`} 
            />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div 
                className="custom-dropdown-menu" 
                role="listbox"
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
              >
                {WALLETS_DATA.map((wallet) => (
                  <div
                    key={wallet.id}
                    role="option"
                    aria-selected={wallet.id === selectedWalletId}
                    className={`custom-dropdown-option ${wallet.id === selectedWalletId ? 'active' : ''}`}
                    onClick={() => handleSelectWallet(wallet.id)}
                  >
                    <div className="wallet-mini-avatar" style={{ backgroundColor: wallet.color }}>
                      {wallet.logo ? (
                        <img
                          src={wallet.logo}
                          alt={wallet.name}
                          className="wallet-mini-avatar-img"
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
                    <div className="custom-dropdown-text">
                      <span className="dropdown-wallet-name">{wallet.name}</span>
                      <span className="dropdown-wallet-provider">{wallet.provider}</span>
                    </div>
                    <div className="dropdown-wallet-badge">
                      {wallet.badge}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Hình Thức Giao Dịch - Cân Đối, Không Lệch Trên Mobile */}
      <div className="calc-group">
        <span className="calc-label">Hình thức giao dịch</span>
        <div className="calc-methods-toggle">
          <div
            className={`method-radio-card ${method === 'online' ? 'active' : ''}`}
            onClick={() => setMethod('online')}
            role="radio"
            aria-checked={method === 'online'}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setMethod('online'); }}
          >
            <div className="method-radio-header">
              <div className="method-radio-title-group">
                <span className={`method-custom-radio ${method === 'online' ? 'checked' : ''}`}>
                  {method === 'online' && <span className="method-radio-dot" />}
                </span>
                <span className="method-title">Online 24/7</span>
              </div>
              <span className="method-speed-badge">⚡ 2-3 phút</span>
            </div>
            <p className="method-desc">Nhận tiền nhanh qua STK ngân hàng mọi lúc</p>
          </div>

          <div
            className={`method-radio-card ${method === 'offline' ? 'active' : ''}`}
            onClick={() => setMethod('offline')}
            role="radio"
            aria-checked={method === 'offline'}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setMethod('offline'); }}
          >
            <div className="method-radio-header">
              <div className="method-radio-title-group">
                <span className={`method-custom-radio ${method === 'offline' ? 'checked' : ''}`}>
                  {method === 'offline' && <span className="method-radio-dot" />}
                </span>
                <span className="method-title">Tại Quầy Hà Nội</span>
              </div>
              <span className="method-offline-fee">+1.5% phí</span>
            </div>
            <p className="method-desc">Gặp trực tiếp tại Đường Láng (Đống Đa)</p>
          </div>
        </div>
      </div>

      {/* Kết Quả Tính Phí */}
      <div className="calc-result-box">
        <div className="result-breakdown-row">
          <span className="result-label">Loại ví giao dịch:</span>
          <span className="result-val">{selectedWallet.name}</span>
        </div>
        <div className="result-breakdown-row">
          <span className="result-label">Số tiền quy đổi:</span>
          <span className="result-val">{formatCurrency(amount)}</span>
        </div>
        <div className="result-breakdown-row">
          <span className="result-label">Tỷ lệ phí dịch vụ:</span>
          <span className="result-val" style={{ color: '#fbcfe8', fontWeight: 700 }}>
            {feePercent}%
          </span>
        </div>
        <div className="result-breakdown-row">
          <span className="result-label">Phí dịch vụ trọn gói:</span>
          <span className="result-val fee">- {formatCurrency(feeAmount)}</span>
        </div>

        <div className="result-final-banner">
          <span className="result-final-label">
            <CheckCircle2 size={15} />
            Số Tiền Thực Nhận Về Tài Khoản:
          </span>
          <motion.span 
            key={finalReceived}
            className="result-final-amount"
            initial={{ scale: 0.94, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {formatCurrency(finalReceived)}
          </motion.span>
        </div>
      </div>

      {/* Button Action */}
      <motion.button
        type="button"
        whileTap={{ scale: 0.98 }}
        className="btn btn-primary btn-lg calc-submit-btn"
        onClick={handleZaloSubmit}
      >
        <MessageCircle size={18} style={{ flexShrink: 0 }} />
        <span>Nhận Ngay {formatCurrency(finalReceived)}</span>
        <ArrowRight size={18} style={{ flexShrink: 0 }} />
      </motion.button>

      {/* Security Note */}
      <div className="calc-security-note">
        <ShieldCheck size={14} color="#10b981" />
        <span>Cam kết không phụ phí</span>
      </div>
    </div>
  );
}
