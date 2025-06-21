
import React from 'react';
import { Star } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-blue-600 text-white p-4 sticky top-0 z-10">
        <div className="flex items-center justify-center max-w-md mx-auto">
          <Star className="mr-2" size={24} />
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
      </header>
      <main className="max-w-md mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
