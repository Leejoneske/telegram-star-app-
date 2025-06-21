

import React, { useState } from 'react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const SellPage: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSell = () => {
    if (!amount) return;
    
    setLoading(true);
    setTimeout(() => {
      alert(`Successfully initiated sale of ${amount} Telegram Stars!`);
      setAmount('');
      setLoading(false);
    }, 1000);
  };

  const pricePerStar = 0.011;
  const userBalance = 1250;

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-xl font-bold mb-4 text-center">Sell Telegram Stars</h2>
        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-green-600">${pricePerStar}</div>
          <div className="text-gray-600">per star</div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount of Stars to Sell
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              max={userBalance}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {amount && (
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between">
                <span>You'll Receive:</span>
                <span className="font-bold text-green-600">
                  ${(parseFloat(amount) * pricePerStar).toFixed(2)}
                </span>
              </div>
            </div>
          )}
          
          <Button 
            onClick={handleSell} 
            fullWidth 
            disabled={!amount || loading || parseFloat(amount) > userBalance}
          >
            {loading ? 'Processing...' : 'Sell Stars'}
          </Button>
          
          {amount && parseFloat(amount) > userBalance && (
            <div className="text-red-500 text-sm text-center">
              Insufficient balance. You have {userBalance} stars available.
            </div>
          )}
        </div>
      </Card>

      <Card>
        <h3 className="font-bold mb-3">Your Balance</h3>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{userBalance.toLocaleString()} ⭐</div>
          <div className="text-sm text-gray-600">Available to sell</div>
          <div className="text-xs text-gray-500 mt-1">
            Worth approximately ${(userBalance * pricePerStar).toFixed(2)}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SellPage;
