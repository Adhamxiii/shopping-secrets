import ProductCard from "./ProductCard";

const productData = [
  {
    img: "/jacket-1.webp",
    title: "Jacket",
    desc: "MEN Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/skirt-1.webp",
    title: "SKIRT",
    desc: "Black Floral Wrap Midi Skirt",
    rating: 5,
    price: "55.00",
  },
  {
    img: "/party-wear-1.webp",
    title: "PARTY WEAR",
    desc: "Women's Party Wear Shoes",
    rating: 3,
    price: "25.00",
  },
  {
    img: "/shirt-1.webp",
    title: "SHIRT",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/sports-1.webp",
    title: "Sports",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    price: "58.00",
  },
  {
    img: "/watch-1.webp",
    title: "WATCHES",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/watch-2.webp",
    title: "WATCHES",
    desc: "Pocket Watch Leather Pouch",
    rating: 4,
    price: "120.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="text-2xl pb-4 font-medium">New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 xl:gap-x-20 xl:gap-y-10">
          {productData.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
