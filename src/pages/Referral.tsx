
import React, { useState } from 'react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const ReferralPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  
  const referralData = {
    code: "STAR123456",
    totalReferrals: 12,
    totalEarned: 24.50,
    commissionRate: 5
  };

  const referralLink = `https://telegramstars.app/ref/${referralData.code}`;

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const howItWorksSteps = [
    "Share your referral link with friends",
    "They sign up and make their first transaction",
    "You earn 5% commission on all their transactions"
  ];

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-xl font-bold mb-4 text-center">Referral Program</h2>
        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-purple-600">{referralData.commissionRate}%</div>
          <div className="text-gray-600">commission on each referral</div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Referral Link
            </label>
            <div className="flex">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 p-3 border border-gray-300 rounded-l-lg bg-gray-50 text-sm"
              />
              <Button onClick={copyReferralCode}>
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="font-bold mb-4">Your Referral Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{referralData.totalReferrals}</div>
            <div className="text-sm text-gray-600">Total Referrals</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">${referralData.totalEarned}</div>
            <div className="text-sm text-gray-600">Total Earned</div>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="font-bold mb-3">How It Works</h3>
        <div className="space-y-3 text-sm text-gray-600">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">
                {index + 1}
              </div>
              <div>{step}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="font-bold mb-3">Recent Referrals</h3>
        <div className="space-y-2">
          {[
            { name: "User #1234", earned: "$2.45", date: "2 days ago" },
            { name: "User #5678", earned: "$1.20", date: "5 days ago" },
            { name: "User #9012", earned: "$3.80", date: "1 week ago" }
          ].map((referral, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <div>
                <div className="font-medium text-sm">{referral.name}</div>
                <div className="text-xs text-gray-500">{referral.date}</div>
              </div>
              <div className="text-green-600 font-medium">{referral.earned}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ReferralPage;
