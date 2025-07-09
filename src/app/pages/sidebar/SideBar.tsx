"use client";
import Link from 'next/link';
import { useState } from 'react';
import { 
  CgHome, 
  CgList, 
  CgBox, 
  CgShoppingCart, 
  CgCreditCard, 
  CgChart, 
  CgUser,   
  CgLogOut 
} from 'react-icons/cg';
import{FaCog} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen] = useState(true);
  const navItems = [
   
    { name: 'Dashboard', href: "/pages/Dashboard", icon: CgList },
    { name: 'Livestock', href: '/pages/livestock', icon: CgBox },
    { name: 'Orders', href: '/pages/orders', icon: CgShoppingCart },
    { name: 'Transactions', href: '/pages/transaction', icon: CgCreditCard },
    { name: 'Reports', href: '/pages/reports', icon: CgChart },
  ];

  const accountItems = [
    { name: 'Account Management', href: '/pages/accountManagement', icon: CgUser },
    { name: 'Settings', href: "/pages/settings", icon: FaCog },
    { name: 'Logout', href: '/pages/logout', icon: CgLogOut },
  ];

  return (
    <div className={`bg-white text-black h-screen border-r-2 border-gray-700 ${isOpen ? 'w-full' : 'w-20'} transition-all duration-300 flex  flex-col `}>
      {/* Logo Section */}
      <div className="p-4 flex items-center gap-2">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 font-bold">
          LOGO
        </div>
        {isOpen && <span className="text-xl font-semibold">FarmApp</span>}
      </div>
      

      {/* Navigation Section */}
      <nav className="flex-1 mt-2">
        <div className="px-2 py-4 ">
      <p>OverView</p>
      </div>
        <div className="px-2">
          {navItems.map((top) => (
            <Link
              key={top.name}
              href={top.href}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-400 transition-colors"
            >
              <top.icon className="w-5 h-5" />
              {isOpen && <span>{top.name}</span>}
            </Link>
          ))}
        </div>
      </nav>

      {/* Account Section */}
      <div className="p-4 border-t border-gray-700">
        {/* {isOpen && (
          <div className="mb-4">
            <p className="text-sm font-medium">Farmer’s Name</p>
            <span className="text-xs text-gray-400">farmer@example.com</span>
          </div>
        )} */}
        <div className='"px-2 py-4'>
          <p className="text-sm font-medium">Account</p>
        </div>
        {accountItems.map(( bottom) => (
          <Link
            key={bottom.name}
            href={ bottom.href}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-400 transition-colors"
          >
            <bottom.icon className="w-5 h-5" />
            {isOpen && <span>{bottom.name}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;