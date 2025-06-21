

import React, { useState } from 'react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const BuyPage: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBuy = () => {
    if (!amount) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      alert(`Successfully initiated purchase of ${amount} Telegram Stars!`);
      setAmount('');
      setLoading(false);
    }, 1000);
  };

  const quickBuyOptions = [100, 500, 1000, 5000];
  const pricePerStar = 0.013;

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-xl font-bold mb-4 text-center">Buy Telegram Stars</h2>
        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-blue-600">${pricePerStar}</div>
          <div className="text-gray-600">per star</div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount of Stars
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {amount && (
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between">
                <span>Total Cost:</span>
                <span className="font-bold">${(parseFloat(amount) * pricePerStar).toFixed(2)}</span>
              </div>
            </div>
          )}
          
          <Button 
            onClick={handleBuy} 
            fullWidth 
            disabled={!amount || loading}
          >
            {loading ? 'Processing...' : 'Buy Stars'}
          </Button>
        </div>
      </Card>

      <Card>
        <h3 className="font-bold mb-3">Quick Buy Options</h3>
        <div className="grid grid-cols-2 gap-3">
          {quickBuyOptions.map((qty) => (
            <button
              key={qty}
              onClick={() => setAmount(qty.toString())}
              className="p-3 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
            >
              <div className="font-medium">{qty} ⭐</div>
              <div className="text-sm text-gray-600">${(qty * pricePerStar).toFixed(2)}</div>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default BuyPage;
