'use client';

import { CiUser, CiLock, CiBellOn, CiCreditCard1 } from 'react-icons/ci';
import Link from 'next/link';
import React, { ReactNode } from 'react';

// Define the props interface for the SideBarComponent
interface SideBarProps {
  icon: ReactNode;
  text: string;
  urlLink: string;
}

// Reusable sidebar item component
const SideBarComponent: React.FC<SideBarProps> = ({ icon, text, urlLink }) => {
  return (
    <Link
      href={urlLink}
      className="flex w-full items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors duration-200"
    >
      <span className="text-2xl text-gray-800">{icon}</span>
      <span className="text-lg font-medium text-gray-800">{text}</span>
    </Link>
  );
};

// Main sidebar component
const SideBar: React.FC = () => {
  // Sidebar navigation items
  const navItems = [
    {
      icon: <CiUser className="text-2xl text-gray-800" />,
      text: 'Account Settings',
      urlLink: '/pages/settings/AccountSettings',
    },
    {
      icon: <CiLock className="text-2xl text-gray-800" />,
      text: 'Security',
      urlLink: '/pages/settings/security',
    },
    {
      icon: <CiBellOn className="text-2xl text-gray-800" />,
      text: 'Notifications',
      urlLink: '/pages/settings/Notifications',
    },
    {
      icon: <CiCreditCard1 className="text-2xl text-gray-800" />,
      text: 'Payment Settings',
      urlLink: '/pages/settings/PaymentSetting',
    },
  ];

  return (
    <div className="flex flex-col min-w-fit h-screen bg-white border-r-2 border-gray-300 shadow-lg">
      {/* Header */}
      <div className="w-full py-4 border-b border-gray-200 text-center">
        <h2 className="text-xl font-semibold text-gray-800">SETTINGS</h2>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col gap-2 mt-4">
        {navItems.map((item, index) => (
          <SideBarComponent
            key={index}
            icon={item.icon}
            text={item.text}
            urlLink={item.urlLink}
          />
        ))}
      </nav>
    </div>
  );
};

export default SideBar;