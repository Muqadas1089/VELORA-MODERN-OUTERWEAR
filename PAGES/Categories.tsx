
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaMagnifyingGlass,
  FaArrowRight,
  FaSliders,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

import women1 from "../src/assets/pg1.jpg";
import women2 from "../src/assets/pg2.jpg";
import women3 from "../src/assets/pg3.jpg";
import women4 from "../src/assets/pg4.jpg";
import women5 from "../src/assets/pg5.jpg";
import women6 from "../src/assets/pg6.jpg";
import women7 from "../src/assets/pg7.jpg";
import women8 from "../src/assets/pg8.jpg";
import women9 from "../src/assets/pg9.jpg";
import women10 from "../src/assets/pg10.jpg";

import men1 from "../src/assets/pb1.jpg";
import men2 from "../src/assets/pb2.jpg";
import men3 from "../src/assets/pb3.jpg";
import men4 from "../src/assets/pb4.jpg";
import men5 from "../src/assets/pb5.jpg";
import men6 from "../src/assets/pb6.jpg";
import men7 from "../src/assets/pb7.jpg";
import men8 from "../src/assets/pb8.jpg";
import men9 from "../src/assets/pb9.jpg";
import men10 from "../src/assets/pb10.jpg";

type Product = {
  id: number;
  name: string;
  category: string;
  gender: string;
  price: number;
  image: string;
};

const products: Product[] = [
  // MEN PRODUCTS
  {
    id: 1,
    name: "The Noir Coat",
    category: "Overcoat",
    gender: "Men",
    price: 285,
    image: men1,
  },
  {
    id: 2,
    name: "Midnight Overcoat",
    category: "Overcoat",
    gender: "Men",
    price: 320,
    image: men2,
  },
  {
    id: 3,
    name: "Executive Wool Jacket",
    category: "Jacket",
    gender: "Men",
    price: 260,
    image: men3,
  },
  {
    id: 4,
    name: "Velvet Evening Coat",
    category: "Overcoat",
    gender: "Men",
    price: 340,
    image: men4,
  },
  {
    id: 5,
    name: "Classic Camel Coat",
    category: "Overcoat",
    gender: "Men",
    price: 295,
    image: men5,
  },
  {
    id: 6,
    name: "Urban Leather Jacket",
    category: "Jacket",
    gender: "Men",
    price: 375,
    image: men6,
  },
  {
    id: 7,
    name: "Signature Puffer",
    category: "Jacket",
    gender: "Men",
    price: 240,
    image: men7,
  },
  {
    id: 8,
    name: "Tailored Trench",
    category: "Overcoat",
    gender: "Men",
    price: 310,
    image: men8,
  },
  {
    id: 9,
    name: "The Essential Jacket",
    category: "Jacket",
    gender: "Men",
    price: 225,
    image: men9,
  },
  {
    id: 10,
    name: "Royal Winter Coat",
    category: "Overcoat",
    gender: "Men",
    price: 390,
    image: men10,
  },

  // WOMEN PRODUCTS
  {
    id: 11,
    name: "The Celeste Coat",
    category: "Overcoat",
    gender: "Women",
    price: 420,
    image: women1,
  },
  {
    id: 12,
    name: "The Noir Trench",
    category: "Overcoat",
    gender: "Women",
    price: 480,
    image: women2,
  },
  {
    id: 13,
    name: "The Elara Jacket",
    category: "Jacket",
    gender: "Women",
    price: 360,
    image: women3,
  },
  {
    id: 14,
    name: "The Essential Overcoat",
    category: "Overcoat",
    gender: "Women",
    price: 390,
    image: women4,
  },
  {
    id: 15,
    name: "The Midnight Blazer",
    category: "Jacket",
    gender: "Women",
    price: 340,
    image: women5,
  },
  {
    id: 16,
    name: "The Heritage Coat",
    category: "Overcoat",
    gender: "Women",
    price: 450,
    image: women6,
  },
  {
    id: 17,
    name: "The Urban Layer",
    category: "Jacket",
    gender: "Women",
    price: 310,
    image: women7,
  },
  {
    id: 18,
    name: "The Atelier Jacket",
    category: "Jacket",
    gender: "Women",
    price: 380,
    image: women8,
  },
  {
    id: 19,
    name: "The Classic Trench",
    category: "Overcoat",
    gender: "Women",
    price: 430,
    image: women9,
  },
  {
    id: 20,
    name: "The Velora Signature",
    category: "Overcoat",
    gender: "Women",
    price: 520,
    image: women10,
  },
];

const categories = ["All", "Jacket", "Hoodie", "Overcoat"];

const Categories: React.FC = () => {
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("All");
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(600);
  const [sort, setSort] = useState("Featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesGender =
        gender === "All" || product.gender === gender;

      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;

      return (
        matchesGender &&
        matchesCategory &&
        matchesSearch &&
        matchesPrice
      );
    });

    if (sort === "Price: Low to High") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "Price: High to Low") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (sort === "Name: A to Z") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [search, gender, category, minPrice, maxPrice, sort]);

  const clearFilters = () => {
    setSearch("");
    setGender("All");
    setCategory("All");
    setMinPrice(0);
    setMaxPrice(600);
    setSort("Featured");
  };

  return (
    <main className="w-full overflow-hidden bg-[#0B0B0B] text-[#F4F0E8]">
      {/* COLLECTION SECTION */}
      <section
        id="collection"
        className="bg-[#F4F0E8] px-5 py-20 text-[#0B0B0B] md:px-12 lg:px-20"
      >
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-[10px] tracking-[0.5em] text-[#A78342]">
              CURATED FOR YOU
            </p>

            <h2 className="font-serif text-5xl font-light md:text-7xl">
              The Collection
              <span className="text-[#C6A15B]">.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#0B0B0B]/55">
            Find pieces that reflect your individuality. Filter,
            explore, and discover your next favorite.
          </p>
        </motion.div>

        {/* Search bar */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <FaMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-sm text-[#A78342]" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search jackets, hoodies, overcoats..."
              className="h-14 w-full border border-[#0B0B0B]/15 bg-transparent pl-12 pr-5 text-sm outline-none transition-all duration-300 placeholder:text-[#0B0B0B]/40 focus:border-[#C6A15B]"
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex h-14 items-center justify-center gap-3 border border-[#0B0B0B]/20 px-7 text-[10px] tracking-[0.25em] transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#0B0B0B] hover:text-[#F4F0E8]"
          >
            <FaSliders />
            FILTERS
          </button>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-14 w-full appearance-none border border-[#0B0B0B]/15 bg-transparent px-5 pr-10 text-[10px] tracking-[0.15em] outline-none focus:border-[#C6A15B] lg:w-[210px]"
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="mb-10 overflow-hidden"
            >
              <div className="grid gap-8 border border-[#0B0B0B]/15 p-6 md:grid-cols-3 md:p-8">
                {/* Gender */}
                <div>
                  <h3 className="mb-5 text-[10px] tracking-[0.3em] text-[#A78342]">
                    SHOP BY
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {["All", "Men", "Women"].map((item) => (
                      <button
                        key={item}
                        onClick={() => setGender(item)}
                        className={`border px-5 py-3 text-[10px] tracking-[0.2em] transition-all duration-300 ${
                          gender === item
                            ? "border-[#0B0B0B] bg-[#0B0B0B] text-[#F4F0E8]"
                            : "border-[#0B0B0B]/20 hover:border-[#C6A15B]"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="mb-5 text-[10px] tracking-[0.3em] text-[#A78342]">
                    CATEGORY
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {categories.map((item) => (
                      <button
                        key={item}
                        onClick={() => setCategory(item)}
                        className={`border px-4 py-3 text-[10px] tracking-[0.15em] transition-all duration-300 ${
                          category === item
                            ? "border-[#0B0B0B] bg-[#0B0B0B] text-[#F4F0E8]"
                            : "border-[#0B0B0B]/20 hover:border-[#C6A15B]"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price range */}
                <div>
                  <h3 className="mb-5 text-[10px] tracking-[0.3em] text-[#A78342]">
                    PRICE RANGE
                  </h3>

                  <div className="flex items-center justify-between text-xs">
                    <span>${minPrice}</span>
                    <span>${maxPrice}</span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="600"
                    step="10"
                    value={maxPrice}
                    onChange={(e) =>
                      setMaxPrice(Number(e.target.value))
                    }
                    className="mt-5 w-full accent-[#C6A15B]"
                  />

                  <p className="mt-2 text-[10px] text-[#0B0B0B]/50">
                    Maximum price
                  </p>
                </div>

                {/* Clear filters */}
                <div className="md:col-span-3">
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#A78342] transition-colors hover:text-black"
                  >
                    <FaRotateIcon />
                    CLEAR ALL FILTERS
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category quick buttons */}
        <div className="mb-10 flex flex-wrap gap-3 border-b border-[#0B0B0B]/15 pb-6">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`text-[10px] tracking-[0.2em] transition-all duration-300 ${
                category === item
                  ? "border-b border-[#A78342] pb-2 text-[#A78342]"
                  : "text-[#0B0B0B]/50 hover:text-[#0B0B0B]"
              }`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-[10px] tracking-[0.2em] text-[#0B0B0B]/55">
            SHOWING {filteredProducts.length} PRODUCTS
          </p>

          <button
            onClick={clearFilters}
            className="text-[10px] tracking-[0.2em] text-[#A78342] hover:text-black"
          >
            RESET
          </button>
        </div>

        {/* Products grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  className="group"
                >
                  <Link
                    to="/products"
                    className="relative block overflow-hidden bg-[#E9E3D9]"
                  >
                    <div className="relative h-[370px] overflow-hidden sm:h-[400px]">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        whileHover={{ scale: 1.07 }}
                        transition={{ duration: 0.7 }}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />

                      <span className="absolute left-4 top-4 bg-[#0B0B0B] px-3 py-2 text-[9px] tracking-[0.2em] text-[#F4F0E8]">
                        {product.gender.toUpperCase()}
                      </span>

                      <span className="absolute bottom-5 right-5 hidden h-11 w-11 items-center justify-center rounded-full bg-[#F4F0E8] text-[#0B0B0B] transition-all duration-300 group-hover:flex">
                        <FaArrowRight />
                      </span>
                    </div>
                  </Link>

                  <div className="mt-5 flex items-start justify-between gap-3">
                    <div>
                      <p className="mb-2 text-[9px] tracking-[0.25em] text-[#A78342]">
                        {product.category.toUpperCase()}
                      </p>

                      <h3 className="font-serif text-xl transition-colors duration-300 group-hover:text-[#A78342]">
                        {product.name}
                      </h3>
                    </div>

                    <p className="pt-1 text-sm">${product.price}</p>
                  </div>

                  <button
                    onClick={() =>
                      (window.location.href = "/products")
                    }
                    className="mt-4 flex items-center gap-3 border-b border-[#0B0B0B]/20 pb-2 text-[9px] tracking-[0.25em] transition-all duration-300 hover:border-[#A78342] hover:text-[#A78342]"
                  >
                    VIEW PRODUCT
                    <FaArrowRight className="text-[8px]" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-24 text-center"
          >
            <p className="mb-4 font-serif text-3xl">
              No products found.
            </p>

            <p className="mb-7 text-sm text-[#0B0B0B]/50">
              Try changing your search or filters.
            </p>

            <button
              onClick={clearFilters}
              className="border border-[#0B0B0B] px-7 py-4 text-[10px] tracking-[0.2em] transition-all hover:bg-[#0B0B0B] hover:text-[#F4F0E8]"
            >
              CLEAR FILTERS
            </button>
          </motion.div>
        )}
      </section>

      {/* BOTTOM CTA */}
      <section className="relative overflow-hidden bg-[#0B0B0B] px-6 py-24 text-center md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-3xl"
        >
          <p className="mb-5 text-[10px] tracking-[0.5em] text-[#C6A15B]">
            THE VELORA EXPERIENCE
          </p>

          <h2 className="font-serif text-5xl font-light leading-tight md:text-7xl">
            Style that speaks
            <br />
            <span className="italic text-[#C6A15B]">
              without words.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-sm leading-8 text-[#F4F0E8]/50">
            Discover timeless pieces made to become part of your
            everyday story.
          </p>

          <Link
            to="/women"
            className="mt-9 inline-flex items-center gap-4 border border-[#C6A15B] px-8 py-4 text-[10px] tracking-[0.3em] transition-all duration-300 hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
          >
            EXPLORE WOMEN
            <FaArrowRight />
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

const FaRotateIcon = () => (
  <span className="inline-block text-xs">↻</span>
);

export default Categories;
