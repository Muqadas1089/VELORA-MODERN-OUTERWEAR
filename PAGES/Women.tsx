
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  FaArrowRight,
  FaArrowDown,
  FaArrowLeft,
  FaBagShopping,
  FaXmark,
  FaPlus,
  FaMinus,
  FaRotate,
  FaCheck,
} from "react-icons/fa6";

import { useCart } from "../COMPONENTS/CartContext";

// =========================================================
// WOMEN PRODUCT IMAGES
// =========================================================

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

// =========================================================
// TYPES
// =========================================================

type Product = {
  id: string;
  image: string;
  name: string;
  category: string;
  price: string;
};

type CheckoutStep = "product" | "checkout" | "confirmed";

// =========================================================
// PRODUCTS
// =========================================================

const products: Product[] = [
  {
    id: "women-01",
    image: women1,
    name: "The Celeste Coat",
    category: "SIGNATURE OUTERWEAR",
    price: "$420",
  },
  {
    id: "women-02",
    image: women2,
    name: "The Noir Trench",
    category: "TRAVEL EDIT",
    price: "$480",
  },
  {
    id: "women-03",
    image: women3,
    name: "The Elara Jacket",
    category: "MODERN CLASSICS",
    price: "$360",
  },
  {
    id: "women-04",
    image: women4,
    name: "The Essential Overcoat",
    category: "ESSENTIALS",
    price: "$390",
  },
  {
    id: "women-05",
    image: women5,
    name: "The Midnight Blazer",
    category: "FORMAL EDIT",
    price: "$340",
  },
  {
    id: "women-06",
    image: women6,
    name: "The Heritage Coat",
    category: "HERITAGE",
    price: "$450",
  },
  {
    id: "women-07",
    image: women7,
    name: "The Urban Layer",
    category: "CITY EDIT",
    price: "$310",
  },
  {
    id: "women-08",
    image: women8,
    name: "The Atelier Jacket",
    category: "ATELIER",
    price: "$380",
  },
  {
    id: "women-09",
    image: women9,
    name: "The Classic Trench",
    category: "TIMELESS",
    price: "$430",
  },
  {
    id: "women-10",
    image: women10,
    name: "The Velora Signature",
    category: "SIGNATURE",
    price: "$520",
  },
];

// =========================================================
// OPTIONS
// =========================================================

const sizes = ["XS", "S", "M", "L", "XL"];

const colors = [
  {
    name: "Black",
    value: "#111111",
  },
  {
    name: "Ivory",
    value: "#E8E0D2",
  },
  {
    name: "Camel",
    value: "#A87955",
  },
  {
    name: "Burgundy",
    value: "#642F39",
  },
];

// =========================================================
// WOMEN PAGE
// =========================================================

const Women: React.FC = () => {
  const { addToCart } = useCart();

  // =======================================================
  // STATES
  // =======================================================

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [selectedSize, setSelectedSize] = useState("M");

  const [selectedColor, setSelectedColor] =
    useState("Black");

  const [checkoutStep, setCheckoutStep] =
    useState<CheckoutStep>("product");

  const [checkoutInfo, setCheckoutInfo] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    address: "",
  });

  const [checkoutError, setCheckoutError] =
    useState("");

  const [orderNumber, setOrderNumber] =
    useState("");

  const [zoom, setZoom] = useState(1);

  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  const [dragging, setDragging] = useState(false);

  const [startPosition, setStartPosition] = useState({
    x: 0,
    y: 0,
  });

  const [addedMessage, setAddedMessage] =
    useState(false);

  // Duplicate products for seamless continuous movement
  const marqueeProducts = [...products, ...products];

  // =======================================================
  // OPEN PRODUCT
  // =======================================================

  const openProduct = (product: Product) => {
    setSelectedProduct(product);

    setSelectedSize("M");
    setSelectedColor("Black");

    setCheckoutStep("product");
    setCheckoutError("");

    setCheckoutInfo({
      fullName: "",
      phone: "",
      email: "",
      city: "",
      address: "",
    });

    setOrderNumber("");

    setZoom(1);

    setRotation({
      x: 0,
      y: 0,
    });

    setAddedMessage(false);
  };

  // =======================================================
  // CLOSE PRODUCT
  // =======================================================

  const closeProduct = () => {
    setSelectedProduct(null);

    setCheckoutStep("product");
    setCheckoutError("");

    setZoom(1);

    setRotation({
      x: 0,
      y: 0,
    });

    setDragging(false);
  };

  // =======================================================
  // ADD TO CART
  // =======================================================

  const handleAddToCart = () => {
    if (!selectedProduct) return;

    const numericPrice = Number(
      selectedProduct.price.replace("$", "")
    );

    addToCart({
      id: `${selectedProduct.id}-${selectedSize}-${selectedColor}`,
      name: `${selectedProduct.name} - ${selectedSize} - ${selectedColor}`,
      price: numericPrice,
      image: selectedProduct.image,
      quantity: 1,
    });

    setAddedMessage(true);

    setTimeout(() => {
      setAddedMessage(false);
    }, 2000);
  };

  // =======================================================
  // BUY NOW
  // =======================================================

  const handleBuyNow = () => {
    setCheckoutStep("checkout");
    setCheckoutError("");
  };

  // =======================================================
  // CHECKOUT CHANGE
  // =======================================================

  const handleCheckoutChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setCheckoutInfo((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =======================================================
  // CONFIRM ORDER
  // =======================================================

  const handleConfirmOrder = (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    if (
      !checkoutInfo.fullName.trim() ||
      !checkoutInfo.phone.trim() ||
      !checkoutInfo.email.trim() ||
      !checkoutInfo.city.trim() ||
      !checkoutInfo.address.trim()
    ) {
      setCheckoutError(
        "Please fill all the fields."
      );

      return;
    }

    if (!selectedProduct) return;

    const numericPrice = Number(
      selectedProduct.price.replace("$", "")
    );

    addToCart({
      id: `${selectedProduct.id}-${selectedSize}-${selectedColor}`,
      name: `${selectedProduct.name} - ${selectedSize} - ${selectedColor}`,
      price: numericPrice,
      image: selectedProduct.image,
      quantity: 1,
    });

    const newOrderNumber =
      `VL-${Date.now().toString().slice(-6)}`;

    setOrderNumber(newOrderNumber);
    setCheckoutError("");
    setCheckoutStep("confirmed");
  };

  // =======================================================
  // QUICK ADD FROM PRODUCT CARD
  // =======================================================

  const handleQuickAdd = (
    event: React.MouseEvent,
    product: Product
  ) => {
    event.stopPropagation();

    const numericPrice = Number(
      product.price.replace("$", "")
    );

    addToCart({
      id: `${product.id}-M-Black`,
      name: `${product.name} - M - Black`,
      price: numericPrice,
      image: product.image,
      quantity: 1,
    });

    setAddedMessage(true);

    setTimeout(() => {
      setAddedMessage(false);
    }, 2000);
  };

  // =======================================================
  // MOUSE DRAG START
  // =======================================================

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    setDragging(true);

    setStartPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // =======================================================
  // MOUSE DRAG MOVE
  // =======================================================

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!dragging) return;

    const moveX =
      event.clientX - startPosition.x;

    const moveY =
      event.clientY - startPosition.y;

    setRotation((previous) => ({
      x: previous.x - moveY * 0.25,
      y: previous.y + moveX * 0.25,
    }));

    setStartPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // =======================================================
  // MOUSE DRAG END
  // =======================================================

  const handleMouseUp = () => {
    setDragging(false);
  };

  // =======================================================
  // TOUCH DRAG START
  // =======================================================

  const handleTouchStart = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    const touch = event.touches[0];

    setDragging(true);

    setStartPosition({
      x: touch.clientX,
      y: touch.clientY,
    });
  };

  // =======================================================
  // TOUCH DRAG MOVE
  // =======================================================

  const handleTouchMove = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    if (!dragging) return;

    const touch = event.touches[0];

    const moveX =
      touch.clientX - startPosition.x;

    const moveY =
      touch.clientY - startPosition.y;

    setRotation((previous) => ({
      x: previous.x - moveY * 0.25,
      y: previous.y + moveX * 0.25,
    }));

    setStartPosition({
      x: touch.clientX,
      y: touch.clientY,
    });
  };

  // =======================================================
  // RESET 3D VIEW
  // =======================================================

  const resetView = () => {
    setZoom(1);

    setRotation({
      x: 0,
      y: 0,
    });
  };

  // =======================================================
  // ZOOM IN
  // =======================================================

  const zoomIn = () => {
    setZoom((previous) =>
      Math.min(previous + 0.2, 2.2)
    );
  };

  // =======================================================
  // ZOOM OUT
  // =======================================================

  const zoomOut = () => {
    setZoom((previous) =>
      Math.max(previous - 0.2, 0.6)
    );
  };

  // =======================================================
  // RENDER
  // =======================================================

  return (
    <main className="w-full overflow-hidden bg-[#0B0B0B] text-[#F4F0E8]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#0B0B0B]">

        {/* BACKGROUND GLOW */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[-180px] top-[15%] h-[500px] w-[500px] rounded-full bg-[#C6A15B]/10 blur-[170px]" />

          <div className="absolute right-[-200px] bottom-[-100px] h-[550px] w-[550px] rounded-full bg-[#C6A15B]/5 blur-[180px]" />

        </div>

        {/* LEFT HERO CONTENT */}

        <div className="relative z-20 flex w-full flex-col justify-center px-6 pt-28 sm:px-10 md:px-14 lg:w-[43%] lg:px-20 lg:pt-10">

          {/* Small label */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mb-7 flex items-center gap-4"
          >

            <span className="h-px w-10 bg-[#C6A15B]" />

            <span className="text-[9px] uppercase tracking-[0.5em] text-[#C6A15B]">
              VELORA WOMEN
            </span>

          </motion.div>

          {/* Main heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="font-serif text-6xl font-light leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[92px]"
          >

            THE

            <br />

            <span className="text-[#C6A15B]">
              MUSE.
            </span>

          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="mt-8 max-w-[440px] text-xs leading-7 tracking-wide text-[#F4F0E8]/55 sm:text-sm"
          >
            Refined outerwear for the modern woman.
            Elegant silhouettes, considered details, and
            timeless character designed for every presence.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >

            <Link
              to="/collection"
              className="group inline-flex items-center gap-4 bg-[#C6A15B] px-7 py-4 text-[9px] font-medium uppercase tracking-[0.3em] text-[#0B0B0B] transition-all duration-300 hover:bg-[#F4F0E8]"
            >
              Explore Women

              <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />

            </Link>

            <Link
              to="/collection"
              className="group inline-flex items-center gap-3 border border-[#F4F0E8]/20 px-7 py-4 text-[9px] uppercase tracking-[0.3em] text-[#F4F0E8] transition-all duration-300 hover:border-[#C6A15B] hover:text-[#C6A15B]"
            >
              View Collection
            </Link>

          </motion.div>

          {/* Bottom detail */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="mt-16 flex items-center gap-5"
          >

            <span className="text-[8px] uppercase tracking-[0.4em] text-[#F4F0E8]/30">
              01
            </span>

            <span className="h-px w-16 bg-[#F4F0E8]/15" />

            <span className="text-[8px] uppercase tracking-[0.35em] text-[#F4F0E8]/30">
              THE WOMEN'S EDIT
            </span>

          </motion.div>

        </div>

        {/* =====================================================
            RIGHT CONTINUOUS PRODUCT MARQUEE
        ===================================================== */}

        <div className="absolute right-0 top-0 flex h-full w-full items-center overflow-hidden lg:w-[64%]">

          {/* Left gradient */}

          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[25%] bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />

          {/* Right gradient */}

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[15%] bg-gradient-to-l from-[#0B0B0B] to-transparent" />

          {/* Top vignette */}

          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[20%] bg-gradient-to-b from-[#0B0B0B] to-transparent" />

          {/* Bottom vignette */}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[20%] bg-gradient-to-t from-[#0B0B0B] to-transparent" />

          {/* MOVING PRODUCTS */}

          <motion.div
            className="flex w-max items-center gap-5"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            {marqueeProducts.map(
              (product, index) => (

                <div
                  key={`${product.id}-${index}`}
                  onClick={() => openProduct(product)}
                  className="group relative h-[62vh] w-[240px] shrink-0 cursor-pointer overflow-hidden sm:w-[280px] md:h-[68vh] md:w-[310px] lg:h-[72vh] lg:w-[330px]"
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover grayscale-[15%] transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-[#0B0B0B]/10" />

                  <div className="absolute left-5 top-5">

                    <span className="text-[9px] tracking-[0.3em] text-[#F4F0E8]/60">
                      {String(
                        (index % products.length) + 1
                      ).padStart(2, "0")}
                    </span>

                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-5">

                    <p className="text-[7px] uppercase tracking-[0.35em] text-[#C6A15B]">
                      {product.category}
                    </p>

                    <h3 className="mt-2 font-serif text-xl font-light">
                      {product.name}
                    </h3>

                    <div className="mt-3 flex items-center justify-between">

                      <span className="text-xs text-[#F4F0E8]/60">
                        {product.price}
                      </span>

                      <button
                        type="button"
                        onClick={(event) =>
                          handleQuickAdd(
                            event,
                            product
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center border border-[#F4F0E8]/30 text-[#F4F0E8] transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
                        aria-label={`Add ${product.name} to cart`}
                      >

                        <FaBagShopping className="text-[11px]" />

                      </button>

                    </div>

                  </div>

                </div>

              )
            )}

          </motion.div>

        </div>

        {/* SCROLL INDICATOR */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          className="absolute bottom-8 left-6 z-30 flex items-center gap-3 sm:left-10 md:left-14 lg:left-20"
        >

          <span className="text-[8px] uppercase tracking-[0.35em] text-[#F4F0E8]/35">
            SCROLL TO DISCOVER
          </span>

          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <FaArrowDown className="text-[10px] text-[#C6A15B]" />

          </motion.div>

        </motion.div>

        {/* Vertical label */}

        <div className="absolute right-5 top-1/2 z-30 hidden -translate-y-1/2 rotate-90 lg:block">

          <span className="text-[8px] uppercase tracking-[0.5em] text-[#F4F0E8]/25">
            VELORA / WOMEN / 2026
          </span>

        </div>

      </section>

      {/* =====================================================
          INTRO SECTION
      ===================================================== */}

      <section className="relative w-full bg-[#F4F0E8] px-6 py-24 text-[#0B0B0B] sm:px-10 md:px-14 lg:px-20">

        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div>

              <p className="mb-5 text-[9px] uppercase tracking-[0.5em] text-[#C6A15B]">
                THE WOMEN'S COLLECTION
              </p>

              <h2 className="font-serif text-4xl font-light leading-tight sm:text-5xl md:text-6xl">

                Designed for

                <br />

                <span className="text-[#C6A15B]">
                  presence.
                </span>

              </h2>

            </div>

            <p className="max-w-[430px] text-xs leading-7 tracking-wide text-[#0B0B0B]/55 sm:text-sm">
              A collection created around elegance,
              confidence, and timeless femininity. Each
              piece is designed to become part of your
              signature.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          PRODUCT GRID
      ===================================================== */}

      <section className="w-full bg-[#F4F0E8] px-6 pb-28 text-[#0B0B0B] sm:px-10 md:px-14 lg:px-20">

        <div className="mx-auto max-w-[1400px]">

          <div className="mb-12 flex items-center justify-between border-b border-[#0B0B0B]/10 pb-5">

            <p className="text-[9px] uppercase tracking-[0.4em] text-[#0B0B0B]/50">
              ALL WOMEN'S PIECES
            </p>

            <p className="text-[9px] uppercase tracking-[0.3em] text-[#C6A15B]">
              10 PRODUCTS
            </p>

          </div>

          <div className="grid gap-x-5 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {products.map(
              (product, index) => (

                <motion.div
                  key={product.id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: (index % 4) * 0.08,
                  }}
                  className="group"
                >

                  {/* Product Image */}

                  <div
                    onClick={() =>
                      openProduct(product)
                    }
                    className="relative aspect-[3/4] cursor-pointer overflow-hidden bg-[#DED7CA]"
                  >

                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    {/* Number */}

                    <span className="absolute left-4 top-4 text-[8px] tracking-[0.3em] text-white/70">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    {/* Cart Button */}

                    <button
                      type="button"
                      onClick={(event) =>
                        handleQuickAdd(
                          event,
                          product
                        )
                      }
                      className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center bg-[#F4F0E8] text-[#0B0B0B] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#C6A15B]"
                      aria-label={`Add ${product.name} to cart`}
                    >

                      <FaBagShopping className="text-xs" />

                    </button>

                    {/* View Product */}

                    <div className="pointer-events-none absolute bottom-4 left-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                      <span className="bg-[#0B0B0B]/80 px-3 py-2 text-[8px] uppercase tracking-[0.25em] text-[#F4F0E8] backdrop-blur-sm">
                        View Product
                      </span>

                    </div>

                  </div>

                  {/* Product Details */}

                  <div className="pt-5">

                    <p className="text-[8px] uppercase tracking-[0.35em] text-[#C6A15B]">
                      {product.category}
                    </p>

                    <div className="mt-2 flex items-start justify-between gap-4">

                      <h3 className="font-serif text-lg font-light">
                        {product.name}
                      </h3>

                      <span className="whitespace-nowrap text-xs text-[#0B0B0B]/60">
                        {product.price}
                      </span>

                    </div>

                    {/* Gold hover line */}

                    <div className="mt-4 h-px w-full bg-[#0B0B0B]/10">

                      <div className="h-full w-0 bg-[#C6A15B] transition-all duration-500 group-hover:w-full" />

                    </div>

                  </div>

                </motion.div>

              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL WOMEN CTA
      ===================================================== */}

      <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-[#11100E] px-6 text-center">

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/8 blur-[170px]" />

        <div className="relative z-10 max-w-[850px]">

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            className="mb-6 text-[9px] uppercase tracking-[0.6em] text-[#C6A15B]"
          >
            THE VELORA WOMAN
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="font-serif text-5xl font-light leading-tight sm:text-6xl md:text-8xl"
          >

            WEAR YOUR

            <br />

            <span className="text-[#C6A15B]">
              PRESENCE.
            </span>

          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mx-auto mt-7 max-w-[500px] text-xs leading-7 tracking-wide text-[#F4F0E8]/50 sm:text-sm"
          >
            Clothing should not define you.
            It should reveal what is already there.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="mt-9"
          >

            <Link
              to="/collection"
              className="group inline-flex items-center gap-4 border border-[#C6A15B] px-8 py-4 text-[9px] uppercase tracking-[0.35em] text-[#C6A15B] transition-all duration-300 hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
            >

              Explore Full Collection

              <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />

            </Link>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          PRODUCT / CHECKOUT POPUP
      ===================================================== */}

      <AnimatePresence>

        {selectedProduct && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/85 p-4 backdrop-blur-md sm:p-6"
            onClick={closeProduct}
          >

            {/* POPUP */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="relative flex max-h-[92vh] w-full max-w-[1100px] flex-col overflow-hidden bg-[#F4F0E8] text-[#0B0B0B] shadow-2xl lg:flex-row"
            >

              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={closeProduct}
                className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center border border-[#0B0B0B]/15 bg-[#F4F0E8]/90 text-[#0B0B0B] backdrop-blur-sm transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#C6A15B]"
              >

                <FaXmark />

              </button>

              {/* =================================================
                  PRODUCT STEP
              ================================================= */}

              {checkoutStep === "product" && (

                <>
                  {/* LEFT 3D PRODUCT AREA */}

                  <div className="relative flex min-h-[430px] w-full items-center justify-center overflow-hidden bg-[#DED7CA] lg:min-h-[650px] lg:w-[58%]">

                    {/* Background glow */}

                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-[100px]" />

                    {/* Drag instruction */}

                    <div className="absolute left-5 top-5 z-20">

                      <p className="text-[8px] uppercase tracking-[0.3em] text-[#0B0B0B]/45">
                        DRAG TO ROTATE
                      </p>

                    </div>

                    {/* 3D IMAGE */}

                    <div
                      className={`relative z-10 flex h-[75%] w-[75%] select-none items-center justify-center ${
                        dragging
                          ? "cursor-grabbing"
                          : "cursor-grab"
                      }`}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleMouseUp}
                      style={{
                        perspective: "1200px",
                      }}
                    >

                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        draggable={false}
                        className="max-h-full max-w-full object-contain drop-shadow-2xl"
                        style={{
                          transform: `
                            perspective(1200px)
                            rotateX(${rotation.x}deg)
                            rotateY(${rotation.y}deg)
                            scale(${zoom})
                          `,
                          transition: dragging
                            ? "none"
                            : "transform 0.2s ease-out",
                        }}
                      />

                    </div>

                    {/* 3D Controls */}

                    <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">

                      <button
                        type="button"
                        onClick={zoomOut}
                        className="flex h-9 w-9 items-center justify-center border border-[#0B0B0B]/20 bg-[#F4F0E8]/90 text-xs backdrop-blur-sm transition-all duration-300 hover:bg-[#C6A15B]"
                        aria-label="Zoom out"
                      >

                        <FaMinus />

                      </button>

                      <button
                        type="button"
                        onClick={resetView}
                        className="flex h-9 w-9 items-center justify-center border border-[#0B0B0B]/20 bg-[#F4F0E8]/90 text-xs backdrop-blur-sm transition-all duration-300 hover:bg-[#C6A15B]"
                        aria-label="Reset product view"
                      >

                        <FaRotate />

                      </button>

                      <button
                        type="button"
                        onClick={zoomIn}
                        className="flex h-9 w-9 items-center justify-center border border-[#0B0B0B]/20 bg-[#F4F0E8]/90 text-xs backdrop-blur-sm transition-all duration-300 hover:bg-[#C6A15B]"
                        aria-label="Zoom in"
                      >

                        <FaPlus />

                      </button>

                    </div>

                  </div>

                  {/* RIGHT PRODUCT DETAILS */}

                  <div className="flex w-full flex-col overflow-y-auto bg-[#F4F0E8] p-7 sm:p-9 lg:w-[42%] lg:p-11">

                    {/* Category */}

                    <p className="text-[8px] uppercase tracking-[0.45em] text-[#C6A15B]">
                      {selectedProduct.category}
                    </p>

                    {/* Product Name */}

                    <h2 className="mt-3 max-w-[400px] font-serif text-3xl font-light leading-tight sm:text-4xl">
                      {selectedProduct.name}
                    </h2>

                    {/* Price */}

                    <p className="mt-5 text-sm tracking-wide text-[#0B0B0B]/60">
                      {selectedProduct.price}
                    </p>

                    {/* Divider */}

                    <div className="my-7 h-px w-full bg-[#0B0B0B]/10" />

                    {/* Description */}

                    <p className="text-xs leading-7 tracking-wide text-[#0B0B0B]/55">
                      A refined VELORA silhouette crafted for
                      effortless elegance. Designed with
                      considered proportions, luxurious
                      character, and timeless appeal.
                    </p>

                    {/* SIZE */}

                    <div className="mt-8">

                      <div className="mb-4 flex items-center justify-between">

                        <p className="text-[9px] uppercase tracking-[0.35em]">
                          Select Size
                        </p>

                        <span className="text-[8px] uppercase tracking-[0.2em] text-[#0B0B0B]/40">
                          Required
                        </span>

                      </div>

                      <div className="flex flex-wrap gap-2">

                        {sizes.map((size) => (

                          <button
                            key={size}
                            type="button"
                            onClick={() =>
                              setSelectedSize(size)
                            }
                            className={`flex h-10 min-w-[48px] items-center justify-center border px-4 text-[9px] uppercase tracking-[0.2em] transition-all duration-300 ${
                              selectedSize === size
                                ? "border-[#C6A15B] bg-[#C6A15B] text-[#0B0B0B]"
                                : "border-[#0B0B0B]/15 bg-transparent hover:border-[#C6A15B]"
                            }`}
                          >

                            {size}

                          </button>

                        ))}

                      </div>

                    </div>

                    {/* COLOR */}

                    <div className="mt-8">

                      <div className="mb-4 flex items-center justify-between">

                        <p className="text-[9px] uppercase tracking-[0.35em]">
                          Select Color
                        </p>

                        <span className="text-[9px] text-[#0B0B0B]/50">
                          {selectedColor}
                        </span>

                      </div>

                      <div className="flex flex-wrap gap-3">

                        {colors.map((color) => (

                          <button
                            key={color.name}
                            type="button"
                            onClick={() =>
                              setSelectedColor(
                                color.name
                              )
                            }
                            className={`group flex items-center gap-2 border px-3 py-2 transition-all duration-300 ${
                              selectedColor === color.name
                                ? "border-[#C6A15B]"
                                : "border-[#0B0B0B]/10 hover:border-[#C6A15B]"
                            }`}
                          >

                            <span
                              className="h-5 w-5 rounded-full border border-black/10"
                              style={{
                                backgroundColor:
                                  color.value,
                              }}
                            />

                            <span className="text-[8px] uppercase tracking-[0.15em]">
                              {color.name}
                            </span>

                            {selectedColor ===
                              color.name && (
                              <FaCheck className="ml-1 text-[8px] text-[#C6A15B]" />
                            )}

                          </button>

                        ))}

                      </div>

                    </div>

                    {/* SELECTED DETAILS */}

                    <div className="mt-8 border border-[#0B0B0B]/10 p-4">

                      <div className="flex items-center justify-between">

                        <div>

                          <p className="text-[8px] uppercase tracking-[0.25em] text-[#0B0B0B]/40">
                            Size
                          </p>

                          <p className="mt-1 text-xs">
                            {selectedSize}
                          </p>

                        </div>

                        <div>

                          <p className="text-[8px] uppercase tracking-[0.25em] text-[#0B0B0B]/40">
                            Color
                          </p>

                          <p className="mt-1 text-xs">
                            {selectedColor}
                          </p>

                        </div>

                        <div>

                          <p className="text-[8px] uppercase tracking-[0.25em] text-[#0B0B0B]/40">
                            Price
                          </p>

                          <p className="mt-1 text-xs">
                            {selectedProduct.price}
                          </p>

                        </div>

                      </div>

                    </div>

                    {/* BUTTONS */}

                    <div className="mt-8 flex flex-col gap-3">

                      <button
                        type="button"
                        onClick={handleAddToCart}
                        className="group flex w-full items-center justify-center gap-3 bg-[#0B0B0B] px-6 py-4 text-[9px] uppercase tracking-[0.3em] text-[#F4F0E8] transition-all duration-300 hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
                      >

                        <FaBagShopping className="text-[10px]" />

                        Add To Cart

                      </button>

                      <button
                        type="button"
                        onClick={handleBuyNow}
                        className="flex w-full items-center justify-center gap-3 border border-[#C6A15B] px-6 py-4 text-[9px] uppercase tracking-[0.3em] text-[#0B0B0B] transition-all duration-300 hover:bg-[#C6A15B]"
                      >

                        Buy Now

                        <FaArrowRight className="text-[10px]" />

                      </button>

                    </div>

                    {/* SUCCESS MESSAGE */}

                    <AnimatePresence>

                      {addedMessage && (

                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: 10,
                          }}
                          className="mt-4 flex items-center justify-center gap-2 border border-[#C6A15B]/40 bg-[#C6A15B]/10 px-4 py-3 text-[8px] uppercase tracking-[0.25em] text-[#0B0B0B]"
                        >

                          <FaCheck className="text-[#C6A15B]" />

                          Added To Cart

                        </motion.div>

                      )}

                    </AnimatePresence>

                    {/* Small note */}

                    <p className="mt-6 text-center text-[8px] uppercase leading-5 tracking-[0.2em] text-[#0B0B0B]/30">
                      Select your preferred size and color
                      before adding this piece to your cart.
                    </p>

                  </div>
                </>
              )}

              {/* =================================================
                  CHECKOUT STEP
              ================================================= */}

              {checkoutStep === "checkout" &&
                selectedProduct && (

                  <div className="w-full overflow-y-auto p-7 sm:p-10">

                    <div className="mx-auto max-w-[850px]">

                      <p className="text-[8px] uppercase tracking-[0.45em] text-[#C6A15B]">
                        VELORA CHECKOUT
                      </p>

                      <h2 className="mt-3 font-serif text-3xl font-light sm:text-4xl">
                        Customer Information
                      </h2>

                      <p className="mt-3 max-w-[550px] text-xs leading-6 text-[#0B0B0B]/50">
                        Please enter your details to complete
                        your order.
                      </p>

                      {/* ORDER SUMMARY */}

                      <div className="mt-8 flex items-center gap-5 border-y border-[#0B0B0B]/10 py-5">

                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="h-24 w-20 object-cover"
                        />

                        <div className="flex-1">

                          <p className="font-serif text-lg">
                            {selectedProduct.name}
                          </p>

                          <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#0B0B0B]/45">
                            {selectedSize} / {selectedColor}
                          </p>

                        </div>

                        <p className="text-sm">
                          {selectedProduct.price}
                        </p>

                      </div>

                      {/* FORM */}

                      <form
                        onSubmit={handleConfirmOrder}
                        className="mt-8 space-y-5"
                      >

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                          {/* FULL NAME */}

                          <div>

                            <label className="mb-2 block text-[8px] uppercase tracking-[0.2em]">
                              Full Name
                            </label>

                            <input
                              type="text"
                              name="fullName"
                              value={
                                checkoutInfo.fullName
                              }
                              onChange={
                                handleCheckoutChange
                              }
                              placeholder="Your full name"
                              className="w-full border border-[#0B0B0B]/15 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#C6A15B]"
                            />

                          </div>

                          {/* PHONE */}

                          <div>

                            <label className="mb-2 block text-[8px] uppercase tracking-[0.2em]">
                              Phone Number
                            </label>

                            <input
                              type="tel"
                              name="phone"
                              value={
                                checkoutInfo.phone
                              }
                              onChange={
                                handleCheckoutChange
                              }
                              placeholder="Your phone number"
                              className="w-full border border-[#0B0B0B]/15 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#C6A15B]"
                            />

                          </div>

                          {/* EMAIL */}

                          <div>

                            <label className="mb-2 block text-[8px] uppercase tracking-[0.2em]">
                              Email
                            </label>

                            <input
                              type="email"
                              name="email"
                              value={
                                checkoutInfo.email
                              }
                              onChange={
                                handleCheckoutChange
                              }
                              placeholder="Your email"
                              className="w-full border border-[#0B0B0B]/15 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#C6A15B]"
                            />

                          </div>

                          {/* CITY */}

                          <div>

                            <label className="mb-2 block text-[8px] uppercase tracking-[0.2em]">
                              City
                            </label>

                            <input
                              type="text"
                              name="city"
                              value={
                                checkoutInfo.city
                              }
                              onChange={
                                handleCheckoutChange
                              }
                              placeholder="Your city"
                              className="w-full border border-[#0B0B0B]/15 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#C6A15B]"
                            />

                          </div>

                        </div>

                        {/* ADDRESS */}

                        <div>

                          <label className="mb-2 block text-[8px] uppercase tracking-[0.2em]">
                            Delivery Address
                          </label>

                          <textarea
                            name="address"
                            value={
                              checkoutInfo.address
                            }
                            onChange={
                              handleCheckoutChange
                            }
                            placeholder="Enter your complete delivery address"
                            rows={4}
                            className="w-full resize-none border border-[#0B0B0B]/15 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#C6A15B]"
                          />

                        </div>

                        {/* PAYMENT */}

                        <div className="border border-[#C6A15B]/40 bg-[#C6A15B]/5 p-5">

                          <p className="text-[8px] uppercase tracking-[0.25em] text-[#C6A15B]">
                            Payment Method
                          </p>

                          <p className="mt-2 text-sm">
                            Cash On Delivery
                          </p>

                        </div>

                        {/* ERROR */}

                        {checkoutError && (

                          <p className="text-xs text-red-600">
                            {checkoutError}
                          </p>

                        )}

                        {/* CHECKOUT BUTTONS */}

                        <div className="flex flex-col gap-3 pt-2 sm:flex-row">

                          <button
                            type="button"
                            onClick={() => {
                              setCheckoutStep("product");
                              setCheckoutError("");
                            }}
                            className="flex flex-1 items-center justify-center gap-3 border border-[#0B0B0B] px-5 py-4 text-[8px] uppercase tracking-[0.25em] transition hover:bg-[#0B0B0B] hover:text-[#F4F0E8]"
                          >

                            <FaArrowLeft className="text-[9px]" />

                            Back To Product

                          </button>

                          <button
                            type="submit"
                            className="flex flex-1 items-center justify-center gap-3 bg-[#C6A15B] px-5 py-4 text-[8px] uppercase tracking-[0.25em] text-[#0B0B0B] transition hover:bg-[#0B0B0B] hover:text-[#F4F0E8]"
                          >

                            Confirm Order

                            <FaArrowRight className="text-[9px]" />

                          </button>

                        </div>

                      </form>

                    </div>

                  </div>
                )}

              {/* =================================================
                  CONFIRMED STEP
              ================================================= */}

              {checkoutStep === "confirmed" &&
                selectedProduct && (

                  <div className="flex w-full items-center justify-center overflow-y-auto p-7 sm:p-12">

                    <div className="w-full max-w-[600px] text-center">

                      {/* CHECK */}

                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#C6A15B] bg-[#C6A15B]/10">

                        <FaCheck className="text-2xl text-[#C6A15B]" />

                      </div>

                      <p className="mt-7 text-[8px] uppercase tracking-[0.45em] text-[#C6A15B]">
                        ORDER CONFIRMED
                      </p>

                      <h2 className="mt-4 font-serif text-4xl font-light">
                        Thank You
                      </h2>

                      <p className="mx-auto mt-4 max-w-[450px] text-xs leading-6 text-[#0B0B0B]/50">
                        Your order has been successfully placed.
                        We will contact you shortly regarding your
                        delivery.
                      </p>

                      {/* ORDER NUMBER */}

                      <div className="mx-auto mt-7 w-fit border border-[#0B0B0B]/10 px-6 py-4">

                        <p className="text-[7px] uppercase tracking-[0.25em] text-[#0B0B0B]/40">
                          Order Number
                        </p>

                        <p className="mt-2 text-sm tracking-[0.15em]">
                          {orderNumber}
                        </p>

                      </div>

                      {/* PRODUCT */}

                      <div className="mx-auto mt-8 flex max-w-[500px] items-center gap-5 border-y border-[#0B0B0B]/10 py-5 text-left">

                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="h-24 w-20 object-cover"
                        />

                        <div className="flex-1">

                          <p className="font-serif text-lg">
                            {selectedProduct.name}
                          </p>

                          <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#0B0B0B]/45">
                            Size: {selectedSize}
                          </p>

                          <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#0B0B0B]/45">
                            Color: {selectedColor}
                          </p>

                        </div>

                        <p className="text-sm">
                          {selectedProduct.price}
                        </p>

                      </div>

                      {/* DONE */}

                      <button
                        type="button"
                        onClick={closeProduct}
                        className="mt-8 inline-flex items-center justify-center gap-3 bg-[#0B0B0B] px-7 py-4 text-[8px] uppercase tracking-[0.25em] text-[#F4F0E8] transition hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
                      >

                        <FaCheck className="text-[9px]" />

                        Continue Shopping

                      </button>

                    </div>

                  </div>
                )}

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
};

export default Women;
