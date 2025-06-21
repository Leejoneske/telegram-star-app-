

import React from 'react';
import Card from '../components/UI/Card';

const AboutPage: React.FC = () => {
  const keyFeatures = [
    'Instant transactions',
    'Competitive exchange rates',
    'Secure payment processing',
    'Referral rewards program',
    '24/7 customer support'
  ];

  const contactInfo = [
    { label: '📧 Email', value: 'support@telegramstars.app' },
    { label: '📱 Telegram', value: '@TelegramStarsSupport' },
    { label: '🌐 Website', value: 'www.telegramstars.app' }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-xl font-bold mb-4 text-center">About Telegram Stars</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Telegram Stars is the official virtual currency of Telegram, used for various 
            premium features and services within the platform.
          </p>
          <p>
            Our platform provides a simple and secure way to buy and sell Telegram Stars 
            at competitive rates with instant processing and reliable service.
          </p>
          <p>
            Whether you're looking to purchase stars for premium features or sell your 
            existing stars, we offer the best rates in the market with complete transparency.
          </p>
        </div>
      </Card>

      <Card>
        <h3 className="font-bold mb-3">Key Features</h3>
        <div className="space-y-3">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="font-bold mb-3">Why Choose Us?</h3>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">99.9%</div>
            <div className="text-xs text-gray-600">Uptime</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">10K+</div>
            <div className="text-xs text-gray-600">Happy Users</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">&lt;5min</div>
            <div className="text-xs text-gray-600">Processing Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">24/7</div>
            <div className="text-xs text-gray-600">Support</div>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="font-bold mb-3">Security & Trust</h3>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-start">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
            <div>SSL encrypted transactions for maximum security</div>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
            <div>KYC verified platform with regulatory compliance</div>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
            <div>Cold storage for user funds protection</div>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="font-bold mb-3">Contact Us</h3>
        <div className="space-y-2">
          {contactInfo.map((contact, index) => (
            <div key={index} className="text-gray-700">
              <span className="font-medium">{contact.label}:</span> {contact.value}
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-600">
            <strong>Business Hours:</strong><br />
            Monday - Friday: 9:00 AM - 6:00 PM (UTC)<br />
            Weekend: Limited support available
          </div>
        </div>
      </Card>

      <Card>
        <div className="text-center text-gray-600">
          <div className="text-sm font-medium">Telegram Stars Exchange</div>
          <div className="text-xs mt-1">Version 1.0.0</div>
          <div className="text-xs mt-2">© 2025 All rights reserved</div>
          <div className="text-xs mt-1 text-gray-500">
            Licensed & Regulated Digital Asset Exchange
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AboutPage;
