"use client";

import React from "react";
import Slide from "./Slide";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const sliderData = [
    {
      id: 0,
      image: "/banner-1.webp",
      title: "Trending Item",
      mainTitle: "women's latest fashion sale",
      price: "$20",
    },
    {
      id: 1,
      image: "/banner-2.webp",
      title: "Trending Accessories",
      mainTitle: "modern sunglasses",
      price: "$15",
    },
    {
      id: 2,
      image: "/banner-3.webp",
      title: "sale offer",
      mainTitle: "new fashion summer sale",
      price: "$30",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-6">
        <Slider {...settings}>
          {sliderData.map((slide) => (
            <Slide
              key={slide.id}
              img={slide.image}
              title={slide.title}
              mainTitle={slide.mainTitle}
              price={slide.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
