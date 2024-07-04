import Link from "next/link";
import React from "react";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container mx-auto justify-between items-center px-4 sm:flex">
        <Link href="/">
          <div className="flex-1 max-sm:text-center font-bold text-4xl pb-4 sm:pb-0 to-blackish">
            Shopping<span className="text-accent"> Secrets</span>
          </div>
        </Link>

        <div className="w-full max-w-[800px] sm:w-[280px] md:w-[50%] relative">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Enter any product name..."
            className="border-gray-200 border p-2 rounded-lg w-full"
          />

          <BsSearch
            className="absolute top-0 right-0 text-gray-400 mr-3 mt-3 "
            size={20}
          />
        </div>

        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <BiUser />

          <div className="relative">
            <FiHeart />
            <span className="bg-red-600 rounded-full absolute top-0 right-0 w-[20px] h-[20px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </span>
          </div>
          <div className="relative">
            <HiOutlineShoppingBag />
            <span className="bg-red-600 rounded-full absolute top-0 right-0 w-[20px] h-[20px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
