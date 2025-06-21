
import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import BottomNav from './components/Layout/BottomNav';
import BuyPage from './pages/Buy';
import SellPage from './pages/Sell';
import ReferralPage from './pages/Referral';
import AboutPage from './pages/About';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('buy');

  const renderPage = () => {
    switch (currentPage) {
      case 'buy':
        return <BuyPage />;
      case 'sell':
        return <SellPage />;
      case 'referral':
        return <ReferralPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <BuyPage />;
    }
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'buy':
        return 'Buy Stars';
      case 'sell':
        return 'Sell Stars';
      case 'referral':
        return 'Referrals';
      case 'about':
        return 'About';
      default:
        return 'Telegram Stars';
    }
  };

  return (
    <>
      <Layout title={getPageTitle()}>
        {renderPage()}
      </Layout>
      <BottomNav currentPage={currentPage} onPageChange={setCurrentPage} />
    </>
  );
};

export default App;
