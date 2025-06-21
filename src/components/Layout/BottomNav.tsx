
import React from 'react';
import { ShoppingCart, TrendingUp, Users, Info } from 'lucide-react';

interface BottomNavProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'buy', icon: ShoppingCart, label: 'Buy' },
    { id: 'sell', icon: TrendingUp, label: 'Sell' },
    { id: 'referral', icon: Users, label: 'Referral' },
    { id: 'about', icon: Info, label: 'About' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around max-w-md mx-auto">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onPageChange(id)}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              currentPage === id 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <Icon size={20} />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
