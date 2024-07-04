"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Categories",
    href: "/categories",
  },
  {
    name: "Men's",
    href: "/men",
  },
  {
    name: "Women's",
    href: "/women",
  },
  {
    name: "Accessories",
    href: "/accessories",
  },
  {
    name: "Perfume",
    href: "/perfume",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Sale",
    href: "/sale",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          {links.map((link) => (
            <Link
              key={link.name}
              className={`navbar__link relative ${
                pathname === link.href ? "navbar__link--active" : ""
              }`}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
