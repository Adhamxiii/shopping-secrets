import Image from "next/image";
import React from "react";

interface props {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<props> = ({ img, title, mainTitle, price }: props) => {
  return (
    <div className="outline-none border-none relative">
      <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        <h3 className="text-accent text-[24px] lg:text-[28px]">{title}</h3>
        <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2] uppercase">
          {mainTitle}
        </h2>

        <h3 className="text-gray-500 text-[24px] ">
          starting at
          <b className="text-[20px] md:text-[24px] lg:text-[30px]"> {price}</b>
          .00
        </h3>

        <div className="bg-accent text-white text-sm md:text-base py-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
          Shop Now
        </div>
      </div>

      <Image
        src={img}
        alt="banner"
        className="w-full h-[300px] md:h-auto rounded-lg object-cover object-right md:object-left-bottom"
        width={2000}
        height={2000}
      />
    </div>
  );
};

export default Slide;
