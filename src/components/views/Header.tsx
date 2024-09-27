import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-3 bg-white border-b-2">
      <div>
        <ul className="flex gap-x-4">
          <li className="link">
            <Link href={"/"}>
              <span className={`text-primary-theme`}>Help</span> and support
            </Link>
          </li>
          <div className="h-1 bg-foreground/20 rounded-full w-1 mx-auto my-auto"></div>
          <li className="link">
            <Link href={"/"}>
              <span className={`text-primary-theme`}>Track</span> your orders
            </Link>
          </li>
          <div className="h-1 bg-foreground/20 rounded-full w-1 mx-auto my-auto"></div>
          <li className="link">
            <Link href={"/"}>
              <span className={`text-primary-theme`}>Our</span> articles
            </Link>

            
        
          </li>
        </ul>
      </div>

      <div>
        <p className="link">
          {" "}
          <span className={`text-primary-theme`}> Need support ? </span>
          Call +0 123-456-7890 for Instant Assistance
        </p>
      </div>
    </header>
  );
};

export default Header;
