import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.png";
import SearchBar from "../widgets/SearchBar";
import { Heart, LogIn, ShoppingBag, User } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "../ui/button";
import Link from "next/link";

interface ICategory {
  id: number;
  name: string;
  link: string;
}

interface IPage {
  id: number;
  name: string;
  link: string;
}

const categoryItems: ICategory[] = [
  {
    id: 1,
    name: "Men",
    link: "/men",
  },
  {
    id: 2,
    name: "Women",
    link: "/women",
  },
  {
    id: 3,
    name: "Kids",
    link: "/kids",
  },
];

const pageItems: IPage[] = [
  {
    id: 1,
    name: "Collections",
    link: "/collections",
  },
  {
    id: 2,
    name: "New",
    link: "/New",
  },
  {
    id: 3,
    name: "Inspration",
    link: "/inspration",
  },
  {
    id: 4,
    name: "Brands",
    link: "/brands",
  },
  {
    id: 5,
    name: "Lookbook",
    link: "/lookbook",
  },
  {
    id: 6,
    name: "Accessory",
    link: "/accessory",
  },
  {
    id: 7,
    name: "Deals",
    link: "/deals",
  },
  {
    id: 8,
    name: "Outlet",
    link: "/outlet",
  },
];

const Navbar = () => {
  return (
    <div className="flex flex-col  px-4 py-5">
      {/* navigation header */}
      <div className="grid grid-cols-3 w-full">
        {/* logo */}
        <div>
          <Image
            src={logo}
            alt="Logo"
            width={80}
            height={80}
            className="dark:text-white"
          />
        </div>
        {/* SearchBar */}
        <div>
          <SearchBar />
        </div>

        <div className="flex flex-wrap gap-6 justify-center items-center">
          <div className=" p-2 border rounded-full">
            <Heart className={`text-primary-theme`} />
          </div>

          {/* Account */}
          <div>
            <HoverCard>
              <HoverCardTrigger className={`flex flex-wrap gap-2 text-base li`}>
                Account <User />
              </HoverCardTrigger>
              <HoverCardContent className={`w-[300px] h-fit`}>
                <div className="space-y-4">
                  <Button className="w-full space-x-4 py-6">Login</Button>
                  <ul className="leading-8 text-wrap tracking-tight font-light">
                    <li>
                      <Link
                        href={"/"}
                        className=" duration-300 hover:border-b-[1px] border-black py-1"
                      >
                        {" "}
                        Your account{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/"}
                        className=" duration-300 hover:border-b-[1px] border-black py-1"
                      >
                        {" "}
                        Order Tracking{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/"}
                        className=" duration-300 hover:border-b-[1px] border-black py-1"
                      >
                        {" "}
                        Support{" "}
                      </Link>
                    </li>

                    <hr className="w-full h-1 mt-10" />
                    <li>
                      <Link
                        href={"/"}
                        className=" duration-300 hover:border-none border-b-[1px] border-black py-1"
                      >
                        {" "}
                        Register
                      </Link>
                    </li>
                  </ul>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div>
            <HoverCard>
              <HoverCardTrigger className={`flex flex-wrap gap-2 text-base li`}>
                Bag <ShoppingBag />
              </HoverCardTrigger>
              <HoverCardContent className={``}>
                <div className="space-y-4">
                  <h1 className="text-foreground font-semibold text-base">
                    YOUR BAG IS EMPTY
                  </h1>
                  <p className="font-normal text-sm">
                    Stock your bag with all of your stylish items and needs.
                  </p>

                  <Button className="w-full space-x-4 py-6">Login</Button>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
      {/* navigation bar */}
      <div className="flex flex-wrap pt-5 gap-24">
        <div className="">
            {
                categoryItems.map((item) => (
                  <Link
                    href={item.link}
                    key={item.id}
                    className="duration-300 hover:border-b-[1px] border-primary-theme py-4 mx-3 font-semibold hover:text-primary-theme/100"
                  >
                    {item.name}
                  </Link>))
                
            }
        </div>
        <div className="space-x-12 text-muted-foreground">
            |
        </div>
        
        <div>
        {
                pageItems.map((item) => (
                  <Link
                    href={item.link}
                    key={item.id}
                    className="duration-300 hover:border-b-[1px] border-primary-theme py-4 mx-6"
                  >
                    {item.name}
                  </Link>))
                
            }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
