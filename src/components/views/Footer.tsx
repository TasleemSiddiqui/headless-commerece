import React from "react";
import Link from "next/link";
interface IPage {
  id: number;
  name: string;
  link: string;
}

const about: IPage[] = [
  {
    id: 1,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 2,
    name: "About Company",
    link: "/about-company",
  },
  {
    id: 3,
    name: "Career",
    link: "/career",
  },
  {
    id: 4,
    name: "Press Releases",
    link: "/press-releases",
  },
  {
    id: 5,
    name: "Partners",
    link: "/partners",
  },
  {
    id: 6,
    name: "Social Projects",
    link: "/social-projects",
  },
  {
    id: 7,
    name: "Store Finder",
    link: "/store-finder",
  },
  {
    id: 8,
    name: "Company Values",
    link: "/company-values",
  },
  {
    id: 9,
    name: "Contact Us",
    link: "/contact-us",
  },
];

const globalPartners: IPage[] = [
  {
    id: 1,
    name: "Global Partners",
    link: "/global-partners",
  },
  {
    id: 2,
    name: "Zephyr",
    link: "/partners/zephyr",
  },
  {
    id: 3,
    name: "Apex Group",
    link: "/partners/apex-group",
  },
  {
    id: 4,
    name: "Stellar Poshta",
    link: "/partners/stellar-poshta",
  },
  {
    id: 5,
    name: "Innovate Inc.",
    link: "/partners/innovate-inc",
  },
  {
    id: 6,
    name: "Fusion Solutions",
    link: "/partners/fusion-solutions",
  },
  {
    id: 7,
    name: "Visionary Enterprises",
    link: "/partners/visionary-enterprises",
  },
];
const services: IPage[] = [
  {
    id: 1,
    name: "Fashionize",
    link: "/services/fashionize",
  },
  {
    id: 2,
    name: "Find your size",
    link: "/services/find-your-size",
  },
  {
    id: 3,
    name: "Tips & Advices",
    link: "/services/tips-advices",
  },
  {
    id: 4,
    name: "Support",
    link: "/services/support",
  },
  {
    id: 5,
    name: "Pickup Points",
    link: "/services/pickup-points",
  },
];
const siteInfoSections: IPage[] = [
  { id: 1, name: "Infos", link: "/infos" },
  { id: 2, name: "Payment Options", link: "/payment-options" },
  { id: 3, name: "Shipping and Returns", link: "/shipping-and-returns" },
  { id: 4, name: "FAQ", link: "/faq" },
  { id: 5, name: "Privacy Policy", link: "/privacy-policy" },
];

const productSections: IPage[] = [
  { id: 1, name: "Our Products", link: "/our-products" },
  { id: 2, name: "Free Delivery", link: "/free-delivery" },
  { id: 3, name: "30 Days Return Policy", link: "/30-days-return-policy" },
  { id: 4, name: "Free Returns", link: "/free-returns" },
];
const brandSections: IPage[] = [
  { id: 1, name: "Brands", link: "/brands" },
  { id: 2, name: "Skolka", link: "/brands/skolka" },
  { id: 3, name: "Slaviv +", link: "/brands/slaviv" },
  { id: 4, name: "Noticias", link: "/brands/noticias" },
  { id: 5, name: "Annusa", link: "/brands/annusa" },
];
const Footer = () => {
  return (
    <footer className={`footer h-screen w-full`}>
     <div className="grid grid-cols-4 p-4  ">
     <ul className="font-normal text-sm leading-8 ">
        <h1 className="text-2xl font-semibold">About us</h1>
        {about.map((page) => (
          <li key={page.id} >
            <Link href={page.link}>{page.name}</Link>{" "}
          </li>
        ))}
      </ul>
     <ul className="font-normal text-sm leading-8 ">
        <h1 className="text-2xl font-semibold">globalPartners</h1>
        {globalPartners.map((page) => (
          <li key={page.id} >
            <Link href={page.link}>{page.name}</Link>{" "}
          </li>
        ))}
      </ul>
     <ul className="font-normal text-sm leading-8 ">
        <h1 className="text-2xl font-semibold">services</h1>
        {services.map((page) => (
          <li key={page.id} >
            <Link href={page.link}>{page.name}</Link>{" "}
          </li>
        ))}
      </ul>
     <ul className="font-normal text-sm leading-8 ">
        <h1 className="text-2xl font-semibold">siteInfoSections</h1>
        {siteInfoSections.map((page) => (
          <li key={page.id} >
            <Link href={page.link}>{page.name}</Link>{" "}
          </li>
        ))}
      </ul>
     <ul className="font-normal text-sm leading-8 ">
        <h1 className="text-2xl font-semibold">productSections</h1>
        {productSections.map((page) => (
          <li key={page.id} >
            <Link href={page.link}>{page.name}</Link>{" "}
          </li>
        ))}
      </ul>
     <ul className="font-normal text-sm leading-8 ">
        <h1 className="text-2xl font-semibold">brandSections</h1>
        {brandSections.map((page) => (
          <li key={page.id} >
            <Link href={page.link}>{page.name}</Link>{" "}
          </li>
        ))}
      </ul>
     </div>
    </footer>
  );
};

export default Footer;
