import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Category = {
  name: string;
  url: string;
};

export type CategoryLinksProps = {
  categories: Category[];
};

const CategorySec: React.FC<CategoryLinksProps> = ({ categories }) => {
  return (
    <div className="lg:px-5 px-2 lg:py-4 py-2 grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-2 ">
      {categories.map((category, index) => (
        <div key={index}>
          <ul>
            <li className="flex my-1">
              <Link href={category.url} passHref className="flex justify-center items-center gap-2 ">
                <ChevronRight size={14} />

                <span className="hover:underline cursor-pointer text-sm font-medium">
                  {category.name}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategorySec;
