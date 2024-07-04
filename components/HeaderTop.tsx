import Image from "next/image";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container mx-auto flex justify-between items-center px-4 py-6">
        <div className="w-full flex items-center justify-between">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <BsFacebook />
            </div>
            <div className="header_top__icon_wrapper">
              <BsTwitter />
            </div>
            <div className="header_top__icon_wrapper">
              <BsInstagram />
            </div>
            <div className="header_top__icon_wrapper">
              <BsLinkedin />
            </div>
          </div>

          <div className="text-gray-500 text-[12px] uppercase">
            <b>free shipping</b> this week order over - $55
          </div>

          <div className="flex gap-4">
            <select
              className="text-[12px] text-gray-500 w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="usd">USD $</option>
              <option value="eur">EUR €</option>
              <option value="egp">EGP E£</option>
            </select>

            <select
              className="text-[12px] text-gray-500 w-[80px]"
              name="language"
              id="language"
            >
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
