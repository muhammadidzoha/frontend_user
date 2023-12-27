import React from "react";

const Brand = () => {
  return (
    <div className="flex gap-2 items-center">
      <img
        src="/logo.png"
        alt="logo"
        className="w-[40px] sm:w-[50px] object-cover object-center"
      />
      <div className="hidden sm:w-max sm:block text-text">
        <h1 className="font-semibold">Desa Citeureup</h1>
        <span className="font-light">Kabupaten Bandung</span>
      </div>
    </div>
  );
};

export default Brand;
