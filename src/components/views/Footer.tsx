import React from "react";
import Link from "next/link";
import {
  TbShoppingBagCheck,
  TbTruckDelivery,
  TbTruckReturn,
  TbWorld,
} from "react-icons/tb";

import {
  IoLanguage,
  IoLogoApple,
  IoLogoGooglePlaystore,
} from "react-icons/io5";
import {
  FaAmazon,
  FaBox,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";

interface IPage {
  id: number;
  name: string;
  link: string;
}

const about: IPage[] = [
 
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
  { id: 2, name: "Payment Options", link: "/payment-options" },
  { id: 3, name: "Shipping and Returns", link: "/shipping-and-returns" },
  { id: 4, name: "FAQ", link: "/faq" },
  { id: 5, name: "Privacy Policy", link: "/privacy-policy" },
];

const productSections: IPage[] = [
  { id: 2, name: "Free Delivery", link: "/free-delivery" },
  { id: 3, name: "30 Days Return Policy", link: "/30-days-return-policy" },
  { id: 4, name: "Free Returns", link: "/free-returns" },
];
const brandSections: IPage[] = [
  { id: 2, name: "Skolka", link: "/brands/skolka" },
  { id: 3, name: "Slaviv +", link: "/brands/slaviv" },
  { id: 4, name: "Noticias", link: "/brands/noticias" },
  { id: 5, name: "Annusa", link: "/brands/annusa" },
];
const Footer = () => {
  return (
    <footer className="mb-16 lg:mb-0">
       <div className={`footer h-fit bg-primary-theme2 text-white w-full font-sans font-medium`}>
      {/* section 1 */}
      <div className="h-fit border-b border-b-gray-500 w-full px-2 py-3 lg:px-6 lg:py-10">
        <ul className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4  ">
          <li className="flex items-center gap-4">
            <TbTruckDelivery size={40} />
            <span className="text-base "> Fast Next Day Delivery</span>
          </li>
          <li className="flex items-center gap-4">
            <TbTruckReturn size={40} />
            <span className="text-base "> 30 Days Return & Refund</span>
          </li>
          <li className="flex items-center gap-4">
            <TbWorld size={40} />
            <span className="text-base "> All Around Pakistan</span>
          </li>
          <li className="flex items-center gap-4">
            <TbShoppingBagCheck size={40} />
            <span className="text-base "> Secure Shopping</span>
          </li>
        </ul>
      </div>

      {/* section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-fit p-4  ">
        {/* column 1 */}
        <div className="space-y-6 w-auto ">
          <ul className="font-normal text-sm leading-8  ">
            <h1 className="text-2xl font-semibold">About us</h1>
            {about.map((page) => (
              <li key={page.id}>
                <Link href={page.link}>{page.name}</Link>{" "}
              </li>
            ))}
          </ul>

          <h1 className="text-2xl font-semibold">Stay Connected</h1>
          <ul className=" flex gap-x-2 ">
            <li className="duration-500 rounded-md p-2 border  w-fit group hover:bg-white ">
              {" "}
              <FaFacebook
                size={16}
                className="group-hover:text-[#1877F2] "
              />{" "}
            </li>
            <li className="duration-500 rounded-md p-2 border  w-fit group hover:bg-white ">
              {" "}
              <FaTwitter
                size={16}
                className="group-hover:text-[#1877F2]"
              />{" "}
            </li>
            <li className="duration-500 rounded-md p-2 border  w-fit group hover:bg-white ">
              {" "}
              <FaYoutube
                size={16}
                className="group-hover:text-[#1877F2]"
              />{" "}
            </li>
            <li className="duration-500 rounded-md p-2 border  w-fit group hover:bg-white ">
              {" "}
              <FaInstagram
                size={16}
                className="group-hover:text-[#1877F2]"
              />{" "}
            </li>
            <li className="duration-500 rounded-md p-2 border  w-fit group hover:bg-white ">
              {" "}
              <FaPinterest
                size={16}
                className="group-hover:text-[#1877F2]"
              />{" "}
            </li>
            <li className="duration-500 rounded-md p-2 border  w-fit group hover:bg-white ">
              {" "}
              <FaTiktok size={16} className="group-hover:text-[#1877F2]" />{" "}
            </li>
            <li className="duration-500 rounded-md p-2 border  w-fit group hover:bg-white ">
              {" "}
              <FaAmazon size={16} className="group-hover:text-[#1877F2]" />{" "}
            </li>
          </ul>
        </div>
        {/* column 2 */}
        <div className="space-y-6 lg:ml-10">
          <ul className="font-normal text-sm leading-8 h-fit ">
            <h1 className="text-2xl font-semibold">Global partners</h1>
            {globalPartners.map((page) => (
              <li key={page.id}>
                <Link href={page.link}>{page.name}</Link>{" "}
              </li>
            ))}
          </ul>
          <ul className="font-normal text-sm leading-8 ">
            <h1 className="text-2xl font-semibold">Our Products</h1>
            {productSections.map((page) => (
              <li key={page.id}>
                <Link href={page.link}>{page.name}</Link>{" "}
              </li>
            ))}
          </ul>
          <h1 className="flex gap-2">
            <IoLanguage /> Language{" "}
          </h1>
        </div>
        {/* column 3 */}
        <div className="space-y-6">
          <ul className="font-normal text-sm leading-8 ">
            <h1 className="text-2xl font-semibold">Services</h1>
            {services.map((page) => (
              <li key={page.id}>
                <Link href={page.link}>{page.name}</Link>{" "}
              </li>
            ))}
          </ul>
          {/* mobile apps */}
          {/* <div className="space-y-4">
            <h1>Mobile Apps</h1>
            <div className="flex flex-col space-y-2">
              <div className="flex gap-1 border rounded-md px-2 py-1 items-center  w-fit">
                <IoLogoApple size={30} />
                <div className="flex font-thin -space-y-2 flex-col">
                  <span className="text-[8px]">Download on the </span>
                  <span className="text-lg font-normal">App store </span>
                </div>
              </div>
              <div className="flex gap-1 border rounded-md px-2 py-1 items-center  w-fit">
                <IoLogoGooglePlaystore size={30} />
                <div className="flex font-thin -space-y-2 flex-col">
                  <span className="text-[8px]">Get it on </span>
                  <span className="text-lg font-normal">Google play </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* Column 4 */}
        <div className="space-y-6 ">
          <ul className="font-normal text-sm leading-8 ">
            <h1 className="text-2xl font-semibold">Infos</h1>
            {siteInfoSections.map((page) => (
              <li key={page.id}>
                <Link href={page.link}>{page.name}</Link>{" "}
              </li>
            ))}
          </ul>

          <ul className="font-normal text-sm leading-8 ">
            <h1 className="text-2xl font-semibold">Brands</h1>
            {brandSections.map((page) => (
              <li key={page.id}>
                <Link href={page.link}>{page.name}</Link>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* section 3 */}

      <div className="h-fit md:p-4 p-2 text-wrap  text-white md:text-base text-sm font-normal bg-black ">
        {" "}
        <span className=" "> &copy 2024 Gulf style | where comfort meet style </span>{" "}
      </div>
    </div>
    </footer>
   
  );
};

export default Footer;
