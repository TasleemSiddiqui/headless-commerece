import React from 'react';
import Link from 'next/link';

export type NavItem = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

export type BottomNavProps = {
  navItems: NavItem[];
};

const BottomNav: React.FC<BottomNavProps> = ({ navItems }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 shadow-lg flex justify-around lg:hidden">
      {navItems.map((item, index) => (
        <Link key={index} href={item.url} passHref>
          <div className="flex flex-col items-center cursor-pointer">
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm">{item.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};


export default BottomNav ;
