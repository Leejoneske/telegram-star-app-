
export interface Transaction {
  id: string;
  type: 'buy' | 'sell';
  amount: number;
  price: number;
  date: string;
}

export interface NavItem {
  id: string;
  icon: any;
  label: string;
}

export interface ReferralStats {
  totalReferrals: number;
  totalEarned: number;
  commissionRate: number;
}
