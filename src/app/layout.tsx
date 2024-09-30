import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/views/Footer";
import Navbar from "@/components/views/Navbar";
import Header from "@/components/views/Header";
import Wrapper from "@/components/shared/Wrapper";
import MobNav from "@/components/views/MobNav";
import { Roboto } from "next/font/google";

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
        </Wrapper>
      </body>
    </html>
  );
}
