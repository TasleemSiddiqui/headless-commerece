import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/views/Footer";
import Navbar from "@/components/views/Navbar";
import Header from "@/components/views/Header";
import Wrapper from "@/components/shared/Wrapper";
import MobNav from "@/components/views/MobNav";
import { Roboto } from "next/font/google";
import { FaHome, FaHeart, FaUser, FaShoppingBag } from 'react-icons/fa';
import BottomNav, { NavItem } from "@/components/views/BottomNav";

const navItems: NavItem[] = [
  { name: 'Home', url: '/', icon: <FaHome /> },
  { name: 'Favorites', url: '/favorites', icon: <FaHeart /> },
  { name: 'Account', url: '/account', icon: <FaUser /> },
  { name: 'My Bag', url: '/bag', icon: <FaShoppingBag /> },
];


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Headless e-Commerece",
  description: "Created by Tasleem Siddiqui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Wrapper>
          <Header />
          <MobNav />
          <Navbar />

          {children}
          <Footer />
          <BottomNav navItems={navItems} />
        </Wrapper>
      </body>
    </html>
  );
}
