import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.png";
import SearchBar from "../widgets/SearchBar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";

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
    <div className="lg:hidden flex flex-col space-y-2  px-4 py-5">
      <div className="flex justify-between">
        {/* logo */}
        <div>
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
            className="dark:text-white"
          />
        </div>

        <Sheet>
          <SheetTrigger>
            <Menu />{" "}
          </SheetTrigger>
          <SheetContent >
            <div className=" flex flex-col space-y-2 z-10">
              {categoryItems.map((item) => (
                <Link
                  href={item.link}
                  key={item.id}
                  className="font-semibold border-b py-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <hr />
            <div className=" flex flex-col space-y-2">
              {pageItems.map((item) => (
                <Link
                  href={item.link}
                  key={item.id}
                  className=" border-b py-2 text-xs"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        {/* <div className="hidden md:flex flex-wrap pt-5 gap-24">
          <div className="">
            {categoryItems.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                className="duration-300 hover:border-b-[1px] border-primary-theme py-4 mx-3 font-semibold hover:text-primary-theme/100"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="space-x-12 text-muted-foreground">|</div>

          <div>
            {pageItems.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                className="duration-300 hover:border-b-[1px] border-primary-theme py-4 mx-6"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div> */}
      </div>

      <div className="w-full">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
