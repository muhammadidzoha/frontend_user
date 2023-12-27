import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";
import clsx from "clsx";
import Brand from "../Brand";

const index = () => {
  return (
    <header
      className={clsx(
        "flex flex-wrap bg-white/10 rounded-3xl backdrop-blur-xl z-[50] w-full border-b border-gray-200 text-sm pb-5",
        "sm:justify-start sm:flex-col sm:pb-0"
      )}
    >
      {/* Topbar */}
      <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center sm:justify-between gap-x-5 w-full py-2 sm:pt-5 sm:pb-0">
          <div className="hidden sm:block">
            <Brand />
          </div>
          <Button />
        </div>
      </div>
      {/* End Topbar */}

      <nav
        className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <div className="sm:hidden">
            <Brand />
          </div>
          <HamburgerMenu />
        </div>
        <Navbar />
      </nav>
    </header>
  );
};

export default index;
