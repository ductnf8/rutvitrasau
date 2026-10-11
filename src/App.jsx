import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import WalletsShowcase from './components/WalletsShowcase';
import ProcessStepper from './components/ProcessStepper';
import SecurityCenter from './components/SecurityCenter';
import FeeTable from './components/FeeTable';
import LocationsSection from './components/LocationsSection';
import FaqSection from './components/FaqSection';
import GuidesSection from './components/GuidesSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [selectedWalletId, setSelectedWalletId] = useState('momo_trasau');

  return (
    <div className="app-container">
      {/* Site Header */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 1. Hero with Live Financial Calculator */}
        <Hero 
          selectedWalletId={selectedWalletId} 
          onSelectWallet={setSelectedWalletId} 
        />

        {/* 2. Trust Metrics Bar (10.000+ Khách Tin Chọn) */}
        <StatsBar />

        {/* 3. Supported Wallets Matrix */}
        <WalletsShowcase onSelectWallet={(id) => setSelectedWalletId(id)} />

        {/* 4. Standard 5-Step Process */}
        <ProcessStepper />

        {/* 5. Transparent Fee Tiers (Bảng Phí Rút Ví Trả Sau Minh Bạch) */}
        <FeeTable />

        {/* 6. Security & Anti-Scam Shield (Bảo Mật 100% & Cảnh Báo Lừa Đảo) */}
        <SecurityCenter />

        {/* 7. Locations: Direct Hanoi Branch & Nationwide 24/7 */}
        <LocationsSection />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />

        {/* 9. Smart Financial & Security Guides */}
        <GuidesSection />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Quick Action Buttons (Floating & Mobile Sticky) */}
      <FloatingActions />
    </div>
  );
}
