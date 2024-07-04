import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div>
      <div className="container pt-16 pb-16 grid-cols-2">
        <h2 className="text-2xl pb-4 font-medium">Testimonials</h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
            <div className="text-center flex flex-col items-center gap-1">
              <Image
                src="/user.webp"
                alt="dp"
                width={80}
                height={80}
                className="rounded-full inline-block"
              />
              <h2 className="text-gray-500 font-black text-[20px]">
                Vera Francis
              </h2>
              <p>CEO & Founder XYZ</p>
              <Image
                src="/quotes.svg"
                alt="quotes"
                width={30}
                height={30}
                className="inline-block py-2"
              />
              <p className="text-gray-500 max-w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
          </div>
          <div className="bg-red-600 bg-[url(/cta-banner.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
            <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
              <button className="bg-accent text-white text-sm md:text-base py-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish uppercase">
                25% discount
              </button>
              <h2 className="text-[#272727] font-extrabold text-2xl">
                Summer Collection
              </h2>
              <p className="text-gray-500 text-[20px]">
                Starting @ $20 <b>Shop Now</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
