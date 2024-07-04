import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface productCardProps {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<productCardProps> = ({
  img,
  title,
  desc,
  rating,
  price,
}: productCardProps) => {
  const generateRating = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<AiFillStar key={i} />);
    }
    for (let i = 0; i < 5 - rating; i++) {
      stars.push(<AiOutlineStar key={i + 5} />);
    }
    return stars;
  };

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          src={img}
          alt={title}
          width={200}
          height={300}
          className="w-full h-auto"
        />
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
      </div>

      <div className="flex gap-1 text-[20px] text-[#ff9529]">
        {generateRating(rating)}
      </div>

      <div className="font-bold flex gap-4">
        ${price}
        <del className="text-gray-500 font-normal">${+price + 8.5}.00</del>
      </div>
    </div>
  );
};

export default ProductCard;
