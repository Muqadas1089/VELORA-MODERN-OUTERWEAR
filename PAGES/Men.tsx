 import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaArrowRight,
  FaArrowLeft,
  FaCheck,
  FaXmark,
  FaPlus,
  FaMinus,
  FaCartPlus,
} from "react-icons/fa6";

import { useCart } from "../COMPONENTS/CartContext";

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
  price: number;
  image: string;
  category: string;
  description: string;
};

const Men: React.FC = () => {
  const { addToCart } = useCart();

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [checkoutStep, setCheckoutStep] = useState<
    "product" | "checkout" | "confirmed"
  >("product");

  const [checkoutInfo, setCheckoutInfo] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    address: "",
  });

  const [checkoutError, setCheckoutError] = useState("");
  const [orderNumber, setOrderNumber] = useState("");

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");

  const [zoom, setZoom] = useState(1);

  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [addedMessage, setAddedMessage] = useState("");

  const [dragging, setDragging] = useState(false);

  const [startPosition, setStartPosition] = useState({
    x: 0,
    y: 0,
  });

  /* =========================
     MOUSE PARALLAX
  ========================= */

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x =
        (e.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (e.clientY / window.innerHeight - 0.5) * 2;

      setMouse({
        x,
        y,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  /* =========================
     COLOR FILTER
  ========================= */

 

  /* =========================
     COLOR OVERLAY
  ========================= */

 

  /* =========================
     PRODUCTS
  ========================= */

  const products: Product[] = [
    {
      id: 1,
      name: "The Noir Coat",
      price: 285,
      image: men1,
      category: "OUTERWEAR",
      description:
        "A refined statement coat designed for modern evenings and timeless winter dressing.",
    },
    {
      id: 2,
      name: "Midnight Overcoat",
      price: 320,
      image: men2,
      category: "OUTERWEAR",
      description:
        "A sophisticated silhouette crafted for a clean and powerful presence.",
    },
    {
      id: 3,
      name: "Executive Wool Jacket",
      price: 260,
      image: men3,
      category: "JACKETS",
      description:
        "Sharp tailoring meets relaxed luxury in this elevated wool jacket.",
    },
    {
      id: 4,
      name: "Velvet Evening Coat",
      price: 340,
      image: men4,
      category: "EVENING",
      description:
        "A luxurious evening layer with a rich silhouette and understated elegance.",
    },
    {
      id: 5,
      name: "Classic Camel Coat",
      price: 295,
      image: men5,
      category: "CLASSICS",
      description:
        "An enduring wardrobe essential with a refined and effortless character.",
    },
    {
      id: 6,
      name: "Urban Leather Jacket",
      price: 375,
      image: men6,
      category: "LEATHER",
      description:
        "A contemporary leather outer layer designed with a confident urban attitude.",
    },
    {
      id: 7,
      name: "Signature Puffer",
      price: 240,
      image: men7,
      category: "WINTER",
      description:
        "Modern winter protection with a clean VELORA silhouette.",
    },
    {
      id: 8,
      name: "Tailored Trench",
      price: 310,
      image: men8,
      category: "TAILORING",
      description:
        "A structured trench designed to bring sophistication to everyday dressing.",
    },
    {
      id: 9,
      name: "The Essential Jacket",
      price: 225,
      image: men9,
      category: "ESSENTIALS",
      description:
        "Minimal, versatile and designed to become an everyday signature.",
    },
    {
      id: 10,
      name: "Royal Winter Coat",
      price: 390,
      image: men10,
      category: "SIGNATURE",
      description:
        "A statement winter coat created for a distinctive VELORA presence.",
    },
  ];

  /* =========================
     OPEN PRODUCT
  ========================= */

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

    document.body.style.overflow = "hidden";
  };

  /* =========================
     CLOSE PRODUCT
  ========================= */

  const closeProduct = () => {
    setSelectedProduct(null);
    setCheckoutStep("product");
    setCheckoutError("");

    setZoom(1);

    setRotation({
      x: 0,
      y: 0,
    });

    document.body.style.overflow = "auto";
  };

  /* =========================
     ADD TO CART
  ========================= */

  const handleAddToCart = () => {
    if (!selectedProduct) return;

    addToCart({
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.image,
      quantity: 1,
    });

    setAddedMessage(
      `${selectedProduct.name} added to cart`
    );

    setTimeout(() => {
      setAddedMessage("");
    }, 2200);
  };

  /* =========================
     BUY NOW
  ========================= */

  const handleBuyNow = () => {
    setCheckoutStep("checkout");
    setCheckoutError("");
  };

  /* =========================
     CHECKOUT CHANGE
  ========================= */

  const handleCheckoutChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setCheckoutInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================
     CONFIRM ORDER
  ========================= */

  const handleConfirmOrder = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !checkoutInfo.fullName.trim() ||
      !checkoutInfo.phone.trim() ||
      !checkoutInfo.email.trim() ||
      !checkoutInfo.city.trim() ||
      !checkoutInfo.address.trim()
    ) {
      setCheckoutError("Please fill all the fields.");
      return;
    }

    if (!selectedProduct) return;

    addToCart({
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.image,
      quantity: 1,
    });

    const newOrderNumber =
      `VL-${Date.now().toString().slice(-6)}`;

    setOrderNumber(newOrderNumber);
    setCheckoutError("");
    setCheckoutStep("confirmed");
  };

  /* =========================
     QUICK ADD
  ========================= */

  const handleQuickAdd = (
    e: React.MouseEvent,
    product: Product
  ) => {
    e.stopPropagation();

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });

    setAddedMessage(
      `${product.name} added to cart`
    );

    setTimeout(() => {
      setAddedMessage("");
    }, 2200);
  };

  /* =========================
     DRAG START
  ========================= */

  const handleMouseDown = (
    e: React.MouseEvent
  ) => {
    setDragging(true);

    setStartPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  /* =========================
     DRAG MOVE
  ========================= */

  const handleMouseMove = (
    e: React.MouseEvent
  ) => {
    if (!dragging) return;

    const movementX =
      e.clientX - startPosition.x;

    const movementY =
      e.clientY - startPosition.y;

    setRotation({
      x: Math.max(
        -18,
        Math.min(18, movementY * -0.15)
      ),
      y: Math.max(
        -25,
        Math.min(25, movementX * 0.15)
      ),
    });
  };

  /* =========================
     DRAG END
  ========================= */

  const handleMouseUp = () => {
    setDragging(false);
  };

  /* =========================
     RESET VIEW
  ========================= */

  const resetView = () => {
    setZoom(1);

    setRotation({
      x: 0,
      y: 0,
    });
  };

  /* =========================
     HERO TITLE
  ========================= */

  const gentlemanText = "GENTLEMAN.";

  return (
    <main className="w-full overflow-hidden bg-[#0B0B0B] text-[#F4F0E8]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0B0B0B]">

        {/* Background Glow */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#C6A15B]/8 blur-[160px]" />

          <div className="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-[#6B2737]/10 blur-[170px]" />
        </div>

        {/* Gold Vertical Sweep */}

        <motion.div
          initial={{
            scaleY: 0,
            opacity: 0,
          }}
          animate={{
            scaleY: [0, 1, 1],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-[43%] top-0 z-30 h-full w-px origin-top bg-[#C6A15B]/70"
        />

        {/* Hero Content */}

        <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-[1500px] flex-col justify-center px-6 py-20 sm:px-10 md:px-14 lg:flex-row lg:items-center lg:px-20">

          {/* LEFT */}

          <div className="relative z-20 w-full lg:w-[52%]">

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mb-5 text-[9px] uppercase tracking-[0.55em] text-[#C6A15B]"
            >
              VELORA MEN
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.35,
              }}
              className="font-serif text-[52px] font-light leading-[0.9] tracking-wide sm:text-[72px] md:text-[92px] lg:text-[100px]"
            >
              THE
            </motion.h1>

            <div className="mt-1 flex overflow-hidden font-serif text-[52px] font-light leading-[0.9] tracking-wide sm:text-[72px] md:text-[92px] lg:text-[100px]">

              {gentlemanText.split("").map(
                (letter, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 70,
                      rotateX: 80,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                    }}
                    transition={{
                      duration: 0.65,
                      delay:
                        0.45 + index * 0.055,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    className={
                      letter === "."
                        ? "text-[#C6A15B]"
                        : ""
                    }
                  >
                    {letter}
                  </motion.span>
                )
              )}

            </div>

            {/* Gold Line */}

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 70,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 1.25,
              }}
              className="mt-8 h-px bg-[#C6A15B]"
            />

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.35,
              }}
              className="mt-7 max-w-[460px] text-xs leading-7 tracking-wide text-[#F4F0E8]/55 sm:text-sm"
            >
              A collection defined by quiet confidence,
              refined silhouettes and timeless outerwear
              made for the modern gentleman.
            </motion.p>

            <motion.a
              href="#collection"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.5,
              }}
              whileHover={{
                x: 5,
              }}
              className="group mt-9 inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-[#F4F0E8]"
            >
              Explore The Edit

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C6A15B]/50 transition-all duration-300 group-hover:border-[#C6A15B] group-hover:bg-[#C6A15B] group-hover:text-[#0B0B0B]">
                <FaArrowRight className="text-[10px]" />
              </span>
            </motion.a>
          </div>

          {/* RIGHT HERO IMAGE */}

          <div className="relative mt-14 flex h-[420px] w-full items-center justify-center overflow-visible lg:mt-0 lg:h-[620px] lg:w-[48%]">

            {/* Main Glow */}

            <motion.div
              animate={{
                x: mouse.x * 12,
                y: mouse.y * 8,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="absolute h-[330px] w-[260px] rounded-full bg-[#C6A15B]/10 blur-[100px]"
            />

            {/* Image Stack */}

            <motion.div
              animate={{
                x: mouse.x * -10,
                y: mouse.y * -6,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="relative h-[410px] w-[285px] sm:h-[500px] sm:w-[350px]"
            >

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 1.12,
                  filter: "blur(12px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.4,
                  delay: 0.4,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="absolute inset-0 overflow-hidden"
              >
                <img
                  src={men1}
                  alt="VELORA Men's Collection"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/70 via-transparent to-[#0B0B0B]/10" />
              </motion.div>

              {/* Border */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 1.08,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.9,
                }}
                className="pointer-events-none absolute -inset-3 border border-[#C6A15B]/25"
              />

              {/* Floating Product Card 1 */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 50,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 1.25,
                }}
                className="absolute -bottom-5 -left-16 hidden w-[150px] border border-[#F4F0E8]/10 bg-[#0B0B0B]/80 p-2 backdrop-blur-md sm:block"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0, 8, 0],
                    rotate: [0, 1.2, 0, -1.2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2.2,
                  }}
                >
                  <img
                    src={men2}
                    alt="VELORA"
                    className="h-[170px] w-full object-cover"
                  />

                  <p className="px-2 py-3 text-[8px] uppercase tracking-[0.25em] text-[#C6A15B]">
                    THE EDIT
                  </p>
                </motion.div>
              </motion.div>

              {/* Floating Product Card 2 */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -40,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 1.45,
                }}
                className="absolute -right-10 top-10 hidden w-[115px] border border-[#F4F0E8]/10 bg-[#0B0B0B]/75 p-2 backdrop-blur-md sm:block"
              >
                <motion.div
                  animate={{
                    y: [0, 9, 0, -8, 0],
                    rotate: [0, -1.5, 0, 1.5, 0],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2.5,
                  }}
                >
                  <img
                    src={men3}
                    alt="VELORA"
                    className="h-[135px] w-full object-cover"
                  />
                </motion.div>
              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2,
            duration: 1,
          }}
          className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3"
        >
          <span className="text-[7px] uppercase tracking-[0.45em] text-[#F4F0E8]/35">
            SCROLL
          </span>

          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [0.35, 1, 0.35],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="h-8 w-px bg-[#C6A15B]"
          />
        </motion.div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="relative w-full border-t border-[#F4F0E8]/10 bg-[#0B0B0B] py-24 sm:py-32">

        <div className="mx-auto max-w-[1200px] px-6 text-center sm:px-10">

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
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
            className="text-[9px] uppercase tracking-[0.5em] text-[#C6A15B]"
          >
            THE VELORA MAN
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
            className="mx-auto mt-6 max-w-[850px] font-serif text-4xl font-light leading-tight sm:text-5xl md:text-6xl"
          >
            Quiet confidence.
            <br />
            <span className="text-[#C6A15B]">
              Defined by presence.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
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
            className="mx-auto mt-7 max-w-[620px] text-xs leading-7 tracking-wide text-[#F4F0E8]/45 sm:text-sm"
          >
            Outerwear designed for those who believe
            style does not need to announce itself.
            Every silhouette is considered, every detail
            intentional.
          </motion.p>

        </div>
      </section>

      {/* =====================================================
          COLLECTION
      ===================================================== */}

      <section
        id="collection"
        className="relative w-full bg-[#F4F0E8] py-24 text-[#0B0B0B] sm:py-32"
      >

        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 md:px-14 lg:px-20">

          {/* Heading */}

          <div className="mb-16 flex flex-col justify-between gap-7 md:flex-row md:items-end">

            <div>
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
                className="text-[9px] uppercase tracking-[0.5em] text-[#C6A15B]"
              >
                VELORA MEN
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
                  delay: 0.1,
                  duration: 0.8,
                }}
                className="mt-4 font-serif text-4xl font-light tracking-wide sm:text-5xl"
              >
                THE MEN'S EDIT
              </motion.h2>
            </div>

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
              className="max-w-[330px] text-xs leading-6 text-[#0B0B0B]/50"
            >
              Explore the latest expression of VELORA
              outerwear, from timeless classics to
              contemporary statement pieces.
            </motion.p>

          </div>

          {/* Products */}

          <div className="grid grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">

            {products.map(
              (product, index) => (
                <motion.article
                  key={product.id}
                  initial={{
                    opacity: 0,
                    y: 60,
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
                    delay:
                      (index % 3) * 0.08,
                  }}
                  className="group cursor-pointer"
                  onClick={() =>
                    openProduct(product)
                  }
                >

                  {/* Image */}

                  <div className="relative overflow-hidden bg-[#E7E0D7]">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[470px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Category */}

                    <div className="absolute left-5 top-5">
                      <span className="bg-[#0B0B0B]/80 px-3 py-2 text-[7px] uppercase tracking-[0.3em] text-[#F4F0E8] backdrop-blur-sm">
                        {product.category}
                      </span>
                    </div>

                    {/* Add Cart */}

                    <button
                      type="button"
                      onClick={(e) =>
                        handleQuickAdd(
                          e,
                          product
                        )
                      }
                      className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-4 items-center justify-center rounded-full bg-[#F4F0E8] text-[#0B0B0B] opacity-0 shadow-lg transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#C6A15B]"
                      aria-label="Add to cart"
                    >
                      <FaCartPlus className="text-sm" />
                    </button>

                    {/* View */}

                    <div className="absolute bottom-5 left-5 translate-y-4 text-[8px] uppercase tracking-[0.3em] text-white opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                      View Product
                    </div>
                  </div>

                  {/* Info */}

                  <div className="flex items-start justify-between gap-4 pt-5">

                    <div>
                      <h3 className="font-serif text-xl font-light">
                        {product.name}
                      </h3>

                      <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-[#0B0B0B]/40">
                        {product.category}
                      </p>
                    </div>

                    <p className="text-sm tracking-wide">
                      ${product.price}
                    </p>

                  </div>

                </motion.article>
              )
            )}

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0B0B0B] py-28 sm:py-36">

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/7 blur-[150px]" />

        </div>

        <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">

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
            className="text-[9px] uppercase tracking-[0.5em] text-[#C6A15B]"
          >
            VELORA
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
              duration: 0.8,
            }}
            className="mt-6 font-serif text-5xl font-light leading-tight sm:text-6xl md:text-7xl"
          >
            Dress with
            <br />
            <span className="text-[#C6A15B]">
              intention.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
            }}
            className="mx-auto mt-7 max-w-[500px] text-xs leading-7 tracking-wide text-[#F4F0E8]/45 sm:text-sm"
          >
            Discover outerwear created for moments
            that deserve to be remembered.
          </motion.p>

          <motion.a
            href="#collection"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="mt-9 inline-flex items-center gap-4 border border-[#C6A15B] px-7 py-4 text-[9px] uppercase tracking-[0.3em] text-[#C6A15B] transition-all duration-300 hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
          >
            Discover Collection
            <FaArrowRight className="text-[10px]" />
          </motion.a>

        </div>
      </section>

      {/* =====================================================
          PRODUCT POPUP
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000]/80 p-4 backdrop-blur-md sm:p-8"
            onClick={closeProduct}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              transition={{
                duration: 0.45,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-[1100px] flex-col overflow-hidden bg-[#F4F0E8] text-[#0B0B0B] lg:flex-row"
            >

              {/* CLOSE */}

              <button
                type="button"
                onClick={closeProduct}
                className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-[#0B0B0B] text-[#F4F0E8] transition-colors hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
              >
                <FaXmark />
              </button>

              {/* =====================================================
                  PRODUCT STEP
              ===================================================== */}

              {checkoutStep === "product" && (
                <>
                  {/* IMAGE SIDE */}

                  <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden bg-[#DDD5CB] lg:w-[52%]">

                    <div
                      className="absolute inset-0 flex cursor-grab items-center justify-center active:cursor-grabbing"
                      style={{
                        perspective: "1000px",
                        touchAction: "none",
                      }}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                    >

                      {/* IMAGE + COLOR EFFECT */}

                      <motion.div
                        animate={{
                          scale: zoom,
                          rotateX: rotation.x,
                          rotateY: rotation.y,
                        }}
                        transition={{
                          duration: dragging ? 0 : 0.3,
                        }}
                        className="relative max-h-[70vh] w-[78%] select-none shadow-2xl"
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                      >

<img
  src={selectedProduct.image}
  alt={selectedProduct.name}
  draggable={false}
  className="block max-h-[70vh] w-full object-cover"
/>

                      </motion.div>

                    </div>

                    {/* IMAGE CONTROLS */}

                    <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">

                      <button
                        type="button"
                        onClick={() =>
                          setZoom(
                            Math.max(
                              0.8,
                              zoom - 0.1
                            )
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center bg-[#0B0B0B] text-[#F4F0E8]"
                      >
                        <FaMinus className="text-[9px]" />
                      </button>

                      <button
                        type="button"
                        onClick={resetView}
                        className="h-9 bg-[#0B0B0B] px-4 text-[8px] uppercase tracking-[0.2em] text-[#F4F0E8]"
                      >
                        Reset
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setZoom(
                            Math.min(
                              1.5,
                              zoom + 0.1
                            )
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center bg-[#0B0B0B] text-[#F4F0E8]"
                      >
                        <FaPlus className="text-[9px]" />
                      </button>

                    </div>

                    <p className="absolute left-5 top-5 text-[7px] uppercase tracking-[0.25em] text-[#0B0B0B]/50">
                      DRAG TO EXPLORE
                    </p>

                  </div>

                  {/* DETAILS */}

                  <div className="flex w-full flex-col justify-center overflow-y-auto p-7 sm:p-10 lg:w-[48%]">

                    <p className="text-[8px] uppercase tracking-[0.45em] text-[#C6A15B]">
                      {selectedProduct.category}
                    </p>

                    <h2 className="mt-4 font-serif text-3xl font-light sm:text-4xl">
                      {selectedProduct.name}
                    </h2>

                    <p className="mt-4 text-lg">
                      ${selectedProduct.price}
                    </p>

                    <div className="my-7 h-px w-full bg-[#0B0B0B]/10" />

                    <p className="text-xs leading-7 text-[#0B0B0B]/55">
                      {selectedProduct.description}
                    </p>

                    {/* SIZE */}

                    <div className="mt-8">

                      <div className="mb-4 flex items-center justify-between">

                        <p className="text-[9px] uppercase tracking-[0.3em]">
                          Select Size
                        </p>

                        <span className="text-[8px] text-[#0B0B0B]/40">
                          SIZE
                        </span>

                      </div>

                      <div className="flex flex-wrap gap-2">

                        {[
                          "XS",
                          "S",
                          "M",
                          "L",
                          "XL",
                        ].map((size) => (
                          <button
                            type="button"
                            key={size}
                            onClick={() =>
                              setSelectedSize(size)
                            }
                            className={`h-10 min-w-[45px] border px-3 text-[9px] transition-all ${
                              selectedSize === size
                                ? "border-[#0B0B0B] bg-[#0B0B0B] text-[#F4F0E8]"
                                : "border-[#0B0B0B]/20 hover:border-[#C6A15B]"
                            }`}
                          >
                            {size}
                          </button>
                        ))}

                      </div>
                    </div>

                    {/* COLOR */}

                    <div className="mt-7">

                      <p className="mb-4 text-[9px] uppercase tracking-[0.3em]">
                        Select Color
                      </p>

                      <div className="flex flex-wrap gap-2">

                        {[
                          "Black",
                          "Ivory",
                          "Camel",
                          "Burgundy",
                        ].map((color) => (
                          <button
                            type="button"
                            key={color}
                            onClick={() =>
                              setSelectedColor(color)
                            }
                            className={`border px-4 py-3 text-[8px] uppercase tracking-[0.15em] transition-all ${
                              selectedColor === color
                                ? "border-[#C6A15B] bg-[#C6A15B] text-[#0B0B0B]"
                                : "border-[#0B0B0B]/20 hover:border-[#C6A15B]"
                            }`}
                          >
                            {color}
                          </button>
                        ))}

                      </div>
                    </div>

                    {/* SELECTED INFO */}

                    <div className="mt-7 flex justify-between border-y border-[#0B0B0B]/10 py-4">

                      <div>
                        <p className="text-[7px] uppercase tracking-[0.2em] text-[#0B0B0B]/40">
                          Size
                        </p>

                        <p className="mt-1 text-xs">
                          {selectedSize}
                        </p>
                      </div>

                      <div>
                        <p className="text-[7px] uppercase tracking-[0.2em] text-[#0B0B0B]/40">
                          Color
                        </p>

                        <p className="mt-1 text-xs">
                          {selectedColor}
                        </p>
                      </div>

                      <div>
                        <p className="text-[7px] uppercase tracking-[0.2em] text-[#0B0B0B]/40">
                          Availability
                        </p>

                        <p className="mt-1 text-xs text-green-700">
                          In Stock
                        </p>
                      </div>

                    </div>

                    {/* BUTTONS */}

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                      <button
                        type="button"
                        onClick={handleAddToCart}
                        className="flex flex-1 items-center justify-center gap-3 border border-[#0B0B0B] bg-[#0B0B0B] px-5 py-4 text-[8px] uppercase tracking-[0.25em] text-[#F4F0E8] transition-all duration-300 hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
                      >
                        <FaCartPlus />
                        Add To Cart
                      </button>

                      <button
                        type="button"
                        onClick={handleBuyNow}
                        className="flex flex-1 items-center justify-center gap-3 border border-[#C6A15B] bg-[#C6A15B] px-5 py-4 text-[8px] uppercase tracking-[0.25em] text-[#0B0B0B] transition-all duration-300 hover:bg-[#0B0B0B] hover:text-[#F4F0E8]"
                      >
                        Buy Now
                        <FaArrowRight className="text-[9px]" />
                      </button>

                    </div>

                  </div>
                </>
              )}

              {/* =====================================================
                  CHECKOUT STEP
              ===================================================== */}

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
                          ${selectedProduct.price}
                        </p>

                      </div>

                      {/* FORM */}

                      <form
                        onSubmit={handleConfirmOrder}
                        className="mt-8 space-y-5"
                      >

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                          <div>
                            <label className="mb-2 block text-[8px] uppercase tracking-[0.2em]">
                              Full Name
                            </label>

                            <input
                              type="text"
                              name="fullName"
                              value={checkoutInfo.fullName}
                              onChange={handleCheckoutChange}
                              placeholder="Your full name"
                              className="w-full border border-[#0B0B0B]/15 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#C6A15B]"
                            />
                          </div>

                          <div>
                            <label className="mb-2 block text-[8px] uppercase tracking-[0.2em]">
                              Phone Number
                            </label>

                            <input
                              type="tel"
                              name="phone"
                              value={checkoutInfo.phone}
                              onChange={handleCheckoutChange}
                              placeholder="Your phone number"
                              className="w-full border border-[#0B0B0B]/15 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#C6A15B]"
                            />
                          </div>

                          <div>
                            <label className="mb-2 block text-[8px] uppercase tracking-[0.2em]">
                              Email
                            </label>

                            <input
                              type="email"
                              name="email"
                              value={checkoutInfo.email}
                              onChange={handleCheckoutChange}
                              placeholder="Your email"
                              className="w-full border border-[#0B0B0B]/15 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#C6A15B]"
                            />
                          </div>

                          <div>
                            <label className="mb-2 block text-[8px] uppercase tracking-[0.2em]">
                              City
                            </label>

                            <input
                              type="text"
                              name="city"
                              value={checkoutInfo.city}
                              onChange={handleCheckoutChange}
                              placeholder="Your city"
                              className="w-full border border-[#0B0B0B]/15 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#C6A15B]"
                            />
                          </div>

                        </div>

                        <div>
                          <label className="mb-2 block text-[8px] uppercase tracking-[0.2em]">
                            Delivery Address
                          </label>

                          <textarea
                            name="address"
                            value={checkoutInfo.address}
                            onChange={handleCheckoutChange}
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

              {/* =====================================================
                  CONFIRMED STEP
              ===================================================== */}

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
                          ${selectedProduct.price}
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

      {/* =====================================================
          SUCCESS MESSAGE
      ===================================================== */}

      <AnimatePresence>
        {addedMessage && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="fixed right-5 top-24 z-[150] border border-[#C6A15B]/40 bg-[#0B0B0B] px-6 py-4 shadow-2xl"
          >
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#F4F0E8]">
              {addedMessage}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
};

export default Men;