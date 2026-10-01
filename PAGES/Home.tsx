import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";

// Main Hero Image
import centerImage from "../src/assets/centerimage.jpg";

import aboutus from "../src/assets/aboutus.jpg";

// Girls Images
import girl1 from "../src/assets/girl1.jpg";
import girl2 from "../src/assets/girl2.jpg";
import girl3 from "../src/assets/girl3.jpg";

// Boys Images
import boy1 from "../src/assets/boy1.jpg";
import boy2 from "../src/assets/boy2.jpg";
import boy3 from "../src/assets/boy3.jpg";

// Next Section Image
import outerwearBg from "../src/assets/bg image.jpg";

const girls = [girl1, girl2, girl3];
const boys = [boy1, boy2, boy3];

const Home: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let lastScrollTime = 0;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();

      if (now - lastScrollTime < 900) return;

      // Scroll Down = next pair
      if (e.deltaY > 0 && visibleCount < 3) {
        e.preventDefault();

        setVisibleCount((prev) => Math.min(prev + 1, 3));

        lastScrollTime = now;
      }

      // Scroll Up = previous pair
      else if (e.deltaY < 0 && visibleCount > 0) {
        e.preventDefault();

        setVisibleCount((prev) => Math.max(prev - 1, 0));

        lastScrollTime = now;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // Arrow Down = next pair
      if (e.key === "ArrowDown" && visibleCount < 3) {
        e.preventDefault();

        setVisibleCount((prev) => Math.min(prev + 1, 3));
      }

      // Arrow Up = previous pair
      if (e.key === "ArrowUp" && visibleCount > 0) {
        e.preventDefault();

        setVisibleCount((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [visibleCount]);

  // Button click
  const handleExplore = () => {
    if (visibleCount < 3) {
      setVisibleCount((prev) => prev + 1);
    } else {
      setVisibleCount(0);
    }
  };

  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <main className="relative h-[calc(100vh-84px)] min-h-[650px] overflow-hidden bg-[#24231F] text-[#F4F0E8]">

        {/* ================= BACKGROUND ================= */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/12 blur-[170px]" />

          <div className="absolute left-1/2 top-[42%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4F0E8]/[0.04] blur-[120px]" />

          <div className="absolute left-1/2 top-0 h-[350px] w-[900px] -translate-x-1/2 rounded-full bg-[#C6A15B]/[0.07] blur-[130px]" />

          <div className="absolute left-[-100px] top-1/2 h-[500px] w-[350px] -translate-y-1/2 rounded-full bg-[#C6A15B]/[0.08] blur-[130px]" />

          <div className="absolute right-[-100px] top-1/2 h-[500px] w-[350px] -translate-y-1/2 rounded-full bg-[#C6A15B]/[0.08] blur-[130px]" />

          <div className="absolute inset-0 bg-gradient-to-b from-[#151512]/35 via-transparent to-[#0B0B0B]/60" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(11,11,11,0.28)_100%)]" />
        </div>

        {/* ================= LEFT INTRO ================= */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute left-5 top-[10%] z-50 max-w-[260px] md:left-[6%] md:top-[14%] md:max-w-[340px]"
        >
          <p className="mb-3 text-[9px] uppercase tracking-[0.4em] text-[#C6A15B] md:text-[10px]">
            THE ART OF OUTERWEAR
          </p>

          <motion.h2
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.4,
              delay: 0.8,
              ease: "easeInOut",
            }}
            className="overflow-hidden whitespace-nowrap text-xl font-light leading-relaxed tracking-wide md:text-3xl"
          >
            Elegance in
          </motion.h2>

          <motion.h2
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.4,
              delay: 2,
              ease: "easeInOut",
            }}
            className="overflow-hidden whitespace-nowrap text-xl font-light leading-relaxed tracking-wide md:text-3xl"
          >
            Every Layer.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 3.3,
            }}
            className="mt-4 max-w-[280px] text-[10px] leading-5 tracking-wide text-[#F4F0E8]/60 md:text-xs md:leading-6"
          >
            Refined silhouettes, rich textures, and timeless outerwear
            designed to become an effortless part of your identity.
          </motion.p>
        </motion.div>

        {/* ================= RIGHT INTRO ================= */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-5 top-[10%] z-50 max-w-[220px] text-right md:right-[6%] md:top-[14%] md:max-w-[340px]"
        >
          <p className="mb-3 text-[9px] uppercase tracking-[0.4em] text-[#C6A15B] md:text-[10px]">
            TIMELESS COLLECTION
          </p>

          <motion.h2
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.4,
              delay: 1.2,
              ease: "easeInOut",
            }}
            className="ml-auto overflow-hidden whitespace-nowrap text-xl font-light leading-relaxed tracking-wide md:text-3xl"
          >
            Designed for
          </motion.h2>

          <motion.h2
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.4,
              delay: 2.4,
              ease: "easeInOut",
            }}
            className="ml-auto overflow-hidden whitespace-nowrap text-xl font-light leading-relaxed tracking-wide md:text-3xl"
          >
            Your Presence.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 3.6,
            }}
            className="ml-auto mt-4 max-w-[280px] text-[10px] leading-5 tracking-wide text-[#F4F0E8]/60 md:text-xs md:leading-6"
          >
            From quiet sophistication to commanding presence, every
            piece is created for those who appreciate detail and
            distinctive character.
          </motion.p>
        </motion.div>

        {/* ================= CENTER BRAND ================= */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute left-1/2 top-[20%] z-50 -translate-x-1/2 text-center"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.6em] text-[#F4F0E8]/80 md:text-xs">
            V E L O R A
          </p>
        </motion.div>

        {/* ================= IMAGE GALLERY ================= */}

        <div className="absolute inset-0 flex items-center justify-center [perspective:1400px]">

          {/* LEFT GIRL WALLS */}

          {girls.map((image, index) => {
            const isVisible = index < visibleCount;

            const depth = visibleCount - 1 - index;

            const scaleValues = [1, 0.78, 0.62];

            const xValues = [-390, -335, -285];

            const zValues = [-40, -220, -400];

            const scale = isVisible ? scaleValues[depth] : 0.65;
            const x = isVisible ? xValues[depth] : 0;
            const z = isVisible ? zValues[depth] : -500;

            return (
              <motion.div
                key={`girl-${index}`}
                initial={{
                  opacity: 0,
                  x: 0,
                  y: 0,
                  scale: 0.65,
                  z: -500,
                  rotateY: 8,
                }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x,
                  y: 0,
                  scale,
                  z,
                  rotateY: 8,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[390px] w-[285px] overflow-hidden rounded-sm border border-[#C6A15B]/50 shadow-2xl shadow-black/50 sm:h-[440px] sm:w-[315px] md:h-[500px] md:w-[375px] lg:h-[520px] lg:w-[390px]"
                style={{
                  marginLeft: "-195px",
                  marginTop: "-260px",
                  transformStyle: "preserve-3d",
                  zIndex: isVisible ? 25 - depth * 5 : 1,
                }}
              >
                <img
                  src={image}
                  alt={`Women's luxury outerwear ${index + 1}`}
                  className="h-full w-full object-cover"
                />

                {depth > 0 && (
                  <div className="absolute inset-0 bg-black/10" />
                )}
              </motion.div>
            );
          })}

          {/* RIGHT BOY WALLS */}

          {boys.map((image, index) => {
            const isVisible = index < visibleCount;

            const depth = visibleCount - 1 - index;

            const scaleValues = [1, 0.78, 0.62];

            const xValues = [390, 335, 285];

            const zValues = [-40, -220, -400];

            const scale = isVisible ? scaleValues[depth] : 0.65;
            const x = isVisible ? xValues[depth] : 0;
            const z = isVisible ? zValues[depth] : -500;

            return (
              <motion.div
                key={`boy-${index}`}
                initial={{
                  opacity: 0,
                  x: 0,
                  y: 0,
                  scale: 0.65,
                  z: -500,
                  rotateY: -8,
                }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x,
                  y: 0,
                  scale,
                  z,
                  rotateY: -8,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[390px] w-[285px] overflow-hidden rounded-sm border border-[#C6A15B]/50 shadow-2xl shadow-black/50 sm:h-[440px] sm:w-[315px] md:h-[500px] md:w-[375px] lg:h-[520px] lg:w-[390px]"
                style={{
                  marginLeft: "-195px",
                  marginTop: "-260px",
                  transformStyle: "preserve-3d",
                  zIndex: isVisible ? 25 - depth * 5 : 1,
                }}
              >
                <img
                  src={image}
                  alt={`Men's luxury outerwear ${index + 1}`}
                  className="h-full w-full object-cover"
                />

                {depth > 0 && (
                  <div className="absolute inset-0 bg-black/10" />
                )}
              </motion.div>
            );
          })}

          {/* CENTER IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-1/2 top-1/2 z-30 h-[390px] w-[285px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-sm border border-[#C6A15B]/70 shadow-2xl shadow-black/60 sm:h-[440px] sm:w-[315px] md:h-[500px] md:w-[375px] lg:h-[520px] lg:w-[390px]"
          >
            <img
              src={centerImage}
              alt="VELORA luxury fashion collection"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* ================= BOTTOM CONTENT ================= */}

        <AnimatePresence>
          {visibleCount === 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 20,
              }}
              transition={{
                duration: 0.6,
              }}
              className="absolute bottom-[8%] left-1/2 z-40 w-full -translate-x-1/2 px-4 text-center"
            >
              <h1 className="text-3xl font-light uppercase tracking-[0.2em] md:text-5xl">
                Beyond{" "}
                <span className="font-semibold text-[#C6A15B]">
                  Style
                </span>
              </h1>

              <p className="mx-auto mt-3 max-w-md text-xs leading-6 text-[#F4F0E8]/75 md:text-sm">
                Discover timeless outerwear crafted for elegance,
                individuality, and everyday luxury.
              </p>

              <div className="mt-5 flex justify-center gap-3">

                <Link
                  to="/men"
                  className="group flex items-center gap-2 rounded-sm border border-[#C6A15B] bg-[#C6A15B] px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-[#0B0B0B] transition-all duration-300 hover:bg-transparent hover:text-[#F4F0E8] md:text-xs"
                >
                  Shop Men

                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/women"
                  className="group flex items-center gap-2 rounded-sm border border-[#C6A15B] bg-[#C6A15B] px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-[#0B0B0B] transition-all duration-300 hover:bg-transparent hover:text-[#F4F0E8] md:text-xs"
                >
                  Shop Women

                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= COLLECTION LABEL ================= */}

        <AnimatePresence>
          {visibleCount > 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 20,
              }}
              className="absolute bottom-10 left-1/2 z-40 -translate-x-1/2 text-center"
            >
              <p className="text-xs uppercase tracking-[0.5em] text-[#F4F0E8]">
                The VELORA Collection
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= EXPLORE BUTTON ================= */}

        <button
          type="button"
          onClick={handleExplore}
          aria-label={
            visibleCount === 3
              ? "Reset collection"
              : "Explore collection"
          }
          className="absolute bottom-5 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2 text-[#F4F0E8]/80 transition-all duration-300 hover:text-[#C6A15B]"
        >
          <span className="text-[9px] uppercase tracking-[0.35em]">
            {visibleCount === 0
              ? "Explore"
              : visibleCount === 3
              ? "Back"
              : "Next"}
          </span>

          <motion.span
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C6A15B]/60 bg-[#C6A15B]/10 backdrop-blur-sm"
          >
            <FaChevronDown
              className={`text-xs transition-transform duration-300 ${
                visibleCount === 3 ? "rotate-180" : ""
              }`}
            />
          </motion.span>
        </button>
      </main>

      {/* =========================================================
          THE OUTERWEAR EDIT
      ========================================================= */}

      <section className="relative min-h-screen w-full overflow-hidden bg-[#171713] text-[#F4F0E8]">

        <div className="absolute inset-0">

          <img
            src={outerwearBg}
            alt="VELORA Outerwear Collection"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/10 blur-[150px]" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-[#0B0B0B]/20" />

        </div>

        <div className="relative z-20 flex min-h-screen items-center justify-center px-5">

          <motion.div
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
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full max-w-[620px] border border-[#C6A15B]/40 bg-[#0B0B0B]/25 px-7 py-10 text-center backdrop-blur-[8px] sm:px-12 sm:py-12"
          >

            <div className="mx-auto mb-5 h-px w-14 bg-[#C6A15B]" />

            <p className="mb-4 text-[9px] uppercase tracking-[0.55em] text-[#C6A15B] sm:text-[10px]">
              VELORA
            </p>

            <h2 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl">
              THE OUTERWEAR EDIT
            </h2>

            <p className="mx-auto mt-5 max-w-[450px] text-xs leading-6 tracking-wide text-[#F4F0E8]/70 sm:text-sm sm:leading-7">
              Discover refined silhouettes, rich textures, and
              timeless outerwear created for effortless presence.
            </p>

            <div className="mx-auto mt-7 h-px w-16 bg-[#C6A15B]/60" />

          </motion.div>

        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
        >
          <p className="whitespace-nowrap text-[9px] uppercase tracking-[0.4em] text-[#F4F0E8]/50">
            EXPLORE THE COLLECTION
          </p>
        </motion.div>

      </section>

      {/* =========================================================
          ABOUT US SECTION
      ========================================================= */}

      <section className="relative min-h-screen w-full overflow-hidden bg-[#0B0B0B] text-[#F4F0E8]">

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[-120px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#C6A15B]/[0.06] blur-[160px]" />

          <div className="absolute right-[-120px] top-1/2 h-[500px] w-[400px] -translate-y-1/2 rounded-full bg-[#C6A15B]/[0.05] blur-[150px]" />

        </div>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] items-center px-6 py-20 sm:px-10 md:px-14 lg:px-20">

          <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">

            {/* LEFT SIDE */}

            <div>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="mb-7 flex items-center gap-4"
              >

                <motion.span
                  animate={{
                    y: [0, -9, 0],
                  }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-3 w-3 rounded-full bg-[#C6A15B] shadow-[0_0_18px_rgba(198,161,91,0.45)]"
                />

                <span className="text-[9px] uppercase tracking-[0.5em] text-[#C6A15B]">
                  OUR STORY
                </span>

              </motion.div>

              {/* ABOUT US HEADING */}

              <div className="overflow-hidden">

                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  className="flex flex-wrap font-serif text-5xl font-light leading-none tracking-[0.08em] sm:text-6xl md:text-7xl lg:text-8xl"
                >

                  {[
                    { letter: "A", x: -45, y: -30, rotate: -12 },
                    { letter: "B", x: 35, y: 25, rotate: 10 },
                    { letter: "O", x: -30, y: 38, rotate: -9 },
                    { letter: "U", x: 42, y: -25, rotate: 12 },
                    { letter: "T", x: -25, y: 30, rotate: -10 },
                  ].map((item, index) => (

                    <motion.span
                      key={`about-${item.letter}`}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: item.x,
                          y: item.y,
                          rotate: item.rotate,
                        },
                        visible: {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          rotate: 0,
                        },
                      }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.15,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block"
                    >
                      {item.letter}
                    </motion.span>

                  ))}

                  <span className="w-4 sm:w-5 md:w-7" />

                  {[
                    { letter: "U", x: 30, y: -35, rotate: 11 },
                    { letter: "S", x: -38, y: 25, rotate: -13 },
                  ].map((item, index) => (

                    <motion.span
                      key={`us-${item.letter}`}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: item.x,
                          y: item.y,
                          rotate: item.rotate,
                        },
                        visible: {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          rotate: 0,
                        },
                      }}
                      transition={{
                        duration: 0.8,
                        delay: (index + 5) * 0.15,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block"
                    >
                      {item.letter}
                    </motion.span>

                  ))}

                </motion.h2>

              </div>

              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                whileInView={{
                  width: 85,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.2,
                }}
                className="mt-7 h-px bg-[#C6A15B]"
              />

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
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
                  delay: 1.35,
                }}
                className="mt-7 max-w-[520px] text-sm leading-7 tracking-wide text-[#F4F0E8]/65 sm:text-base sm:leading-8"
              >
                VELORA was created for those who believe outerwear
                should be more than a layer. Every piece reflects
                confidence, character, and quiet sophistication.
              </motion.p>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
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
                  delay: 1.55,
                }}
                className="mt-4 max-w-[500px] text-xs leading-6 tracking-wide text-[#F4F0E8]/40 sm:text-sm sm:leading-7"
              >
                We focus on refined silhouettes, thoughtful details,
                and timeless design — creating clothing made to
                remain distinctive beyond seasons.
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.8,
                }}
                className="mt-8 flex items-center gap-4"
              >

                <span className="text-[9px] uppercase tracking-[0.4em] text-[#C6A15B]">
                  V E L O R A
                </span>

                <span className="h-px w-12 bg-[#C6A15B]/40" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#F4F0E8]/30">
                  EST. 2026
                </span>

              </motion.div>

            </div>

            {/* RIGHT SIDE IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: 55,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[500px]"
            >

              <div className="absolute -right-3 -top-3 h-full w-full border border-[#C6A15B]/30 sm:-right-5 sm:-top-5" />

              <div className="relative aspect-[4/5] overflow-hidden border border-[#C6A15B]/40">

                <img
                  src={aboutus}
                  alt="VELORA luxury fashion"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/55 via-transparent to-transparent" />

              </div>

              <div className="absolute -bottom-7 left-5">

                <p className="text-[9px] uppercase tracking-[0.4em] text-[#C6A15B]">
                  THE VELORA PHILOSOPHY
                </p>

              </div>

            </motion.div>

          </div>

        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          className="absolute bottom-7 right-7"
        >

          <p className="text-[9px] tracking-[0.4em] text-[#F4F0E8]/20">
            01 — ABOUT
          </p>

        </motion.div>

      </section>

      {/* =========================================================
          FEATURED COLLECTION SECTION
      ========================================================= */}

      <section className="relative w-full overflow-hidden bg-[#0B0B0B] px-6 py-24 text-[#F4F0E8] sm:px-10 md:px-14 lg:px-20">

        {/* BACKGROUND GLOW */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[10%] top-[20%] h-[350px] w-[350px] rounded-full bg-[#C6A15B]/[0.04] blur-[140px]" />

          <div className="absolute right-[5%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#C6A15B]/[0.04] blur-[150px]" />

        </div>

        {/* SECTION HEADING */}

        <div className="relative z-10 mx-auto mb-16 max-w-[1400px]">

          <motion.div
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
            className="flex items-center gap-4"
          >

            <motion.span
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-3 w-3 rounded-full bg-[#C6A15B] shadow-[0_0_16px_rgba(198,161,91,0.4)]"
            />

            <p className="text-[9px] uppercase tracking-[0.5em] text-[#C6A15B]">
              THE COLLECTION
            </p>

          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
            }}
            className="mt-5 font-serif text-4xl font-light tracking-[0.04em] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            FEATURED{" "}
            <span className="text-[#C6A15B]">
              COLLECTION
            </span>
          </motion.h2>

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
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mt-5 max-w-[550px] text-xs leading-6 tracking-wide text-[#F4F0E8]/50 sm:text-sm sm:leading-7"
          >
            A curated selection of VELORA outerwear designed
            around presence, precision, and timeless character.
          </motion.p>

        </div>

        {/* COLLECTION CARDS */}

        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* CARD 1 */}

          <motion.div
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
              duration: 0.8,
              delay: 0.1,
            }}
            className="group"
          >

            <div className="relative overflow-hidden border border-[#C6A15B]/25 bg-[#11110F]">

              <div className="relative aspect-[3/4] overflow-hidden">

                <img
                  src={boy1}
                  alt="VELORA Men's Collection"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent opacity-70" />

                <span className="absolute left-4 top-4 text-[9px] tracking-[0.3em] text-[#F4F0E8]/60">
                  01
                </span>

                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C6A15B] transition-all duration-500 group-hover:w-full"
                />

              </div>

              <div className="px-5 py-6">

                <p className="text-[9px] uppercase tracking-[0.4em] text-[#C6A15B]">
                  MEN
                </p>

                <h3 className="mt-2 font-serif text-2xl font-light">
                  The Gentleman
                </h3>

                <p className="mt-3 text-[11px] leading-5 text-[#F4F0E8]/40">
                  Structured silhouettes crafted for quiet confidence.
                </p>

                <Link
                  to="/men"
                  className="mt-5 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-[#F4F0E8]/70 transition-colors duration-300 hover:text-[#C6A15B]"
                >
                  Explore
                  <FaArrowRight className="text-[9px] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

              </div>

            </div>

          </motion.div>

          {/* CARD 2 */}

          <motion.div
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
              duration: 0.8,
              delay: 0.2,
            }}
            className="group"
          >

            <div className="relative overflow-hidden border border-[#C6A15B]/25 bg-[#11110F]">

              <div className="relative aspect-[3/4] overflow-hidden">

                <img
                  src={girl1}
                  alt="VELORA Women's Collection"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent opacity-70" />

                <span className="absolute left-4 top-4 text-[9px] tracking-[0.3em] text-[#F4F0E8]/60">
                  02
                </span>

                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C6A15B] transition-all duration-500 group-hover:w-full"
                />

              </div>

              <div className="px-5 py-6">

                <p className="text-[9px] uppercase tracking-[0.4em] text-[#C6A15B]">
                  WOMEN
                </p>

                <h3 className="mt-2 font-serif text-2xl font-light">
                  The Muse
                </h3>

                <p className="mt-3 text-[11px] leading-5 text-[#F4F0E8]/40">
                  Elegant forms created to move with effortless grace.
                </p>

                <Link
                  to="/women"
                  className="mt-5 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-[#F4F0E8]/70 transition-colors duration-300 hover:text-[#C6A15B]"
                >
                  Explore
                  <FaArrowRight className="text-[9px] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

              </div>

            </div>

          </motion.div>

          {/* CARD 3 */}

          <motion.div
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
              duration: 0.8,
              delay: 0.3,
            }}
            className="group"
          >

            <div className="relative overflow-hidden border border-[#C6A15B]/25 bg-[#11110F]">

              <div className="relative aspect-[3/4] overflow-hidden">

                <img
                  src={boy2}
                  alt="VELORA New Season Collection"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent opacity-70" />

                <span className="absolute left-4 top-4 text-[9px] tracking-[0.3em] text-[#F4F0E8]/60">
                  03
                </span>

                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C6A15B] transition-all duration-500 group-hover:w-full"
                />

              </div>

              <div className="px-5 py-6">

                <p className="text-[9px] uppercase tracking-[0.4em] text-[#C6A15B]">
                  NEW SEASON
                </p>

                <h3 className="mt-2 font-serif text-2xl font-light">
                  New Horizons
                </h3>

                <p className="mt-3 text-[11px] leading-5 text-[#F4F0E8]/40">
                  Contemporary outerwear shaped for the season ahead.
                </p>

                <Link
                  to="/collection"
                  className="mt-5 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-[#F4F0E8]/70 transition-colors duration-300 hover:text-[#C6A15B]"
                >
                  Explore
                  <FaArrowRight className="text-[9px] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

              </div>

            </div>

          </motion.div>

          {/* CARD 4 */}

          <motion.div
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
              duration: 0.8,
              delay: 0.4,
            }}
            className="group"
          >

            <div className="relative overflow-hidden border border-[#C6A15B]/25 bg-[#11110F]">

              <div className="relative aspect-[3/4] overflow-hidden">

                <img
                  src={girl2}
                  alt="VELORA Signature Collection"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent opacity-70" />

                <span className="absolute left-4 top-4 text-[9px] tracking-[0.3em] text-[#F4F0E8]/60">
                  04
                </span>

                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C6A15B] transition-all duration-500 group-hover:w-full"
                />

              </div>

              <div className="px-5 py-6">

                <p className="text-[9px] uppercase tracking-[0.4em] text-[#C6A15B]">
                  SIGNATURE
                </p>

                <h3 className="mt-2 font-serif text-2xl font-light">
                  The Signature
                </h3>

                <p className="mt-3 text-[11px] leading-5 text-[#F4F0E8]/40">
                  Distinctive pieces defined by refined details.
                </p>

                <Link
                  to="/collection"
                  className="mt-5 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-[#F4F0E8]/70 transition-colors duration-300 hover:text-[#C6A15B]"
                >
                  Explore
                  <FaArrowRight className="text-[9px] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

              </div>

            </div>

          </motion.div>

        </div>

        {/* BOTTOM LABEL */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="relative z-10 mx-auto mt-14 flex max-w-[1400px] items-center justify-between border-t border-[#F4F0E8]/10 pt-5"
        >

          <p className="text-[9px] tracking-[0.4em] text-[#F4F0E8]/20">
            02 — COLLECTION
          </p>

          <p className="text-[9px] uppercase tracking-[0.4em] text-[#C6A15B]/70">
            VELORA / 2026
          </p>

        </motion.div>

      </section>

      {/* =========================================================
          CRAFTSMANSHIP SECTION
      ========================================================= */}

      <section className="relative min-h-screen w-full overflow-hidden bg-[#11110F] text-[#F4F0E8]">

        {/* ================= BACKGROUND ================= */}

        <div className="pointer-events-none absolute inset-0">

          {/* Center gold glow */}

          <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/[0.045] blur-[150px]" />

          {/* Left glow */}

          <div className="absolute left-[-150px] top-[20%] h-[400px] w-[400px] rounded-full bg-[#C6A15B]/[0.035] blur-[140px]" />

          {/* Right glow */}

          <div className="absolute bottom-[-100px] right-[-100px] h-[400px] w-[400px] rounded-full bg-[#C6A15B]/[0.035] blur-[140px]" />

        </div>

        {/* ================= CONTENT ================= */}

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] items-center px-6 py-24 sm:px-10 md:px-14 lg:px-20">

          <div className="w-full">

            {/* ================= TOP HEADING ================= */}

            <div className="mb-16 max-w-[800px]">

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
                }}
                className="mb-6 flex items-center gap-4"
              >

                <motion.span
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-3 w-3 rounded-full bg-[#C6A15B] shadow-[0_0_16px_rgba(198,161,91,0.4)]"
                />

                <p className="text-[9px] uppercase tracking-[0.5em] text-[#C6A15B]">
                  THE VELORA CRAFT
                </p>

              </motion.div>

              <motion.h2
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                }}
                className="font-serif text-5xl font-light leading-[0.95] tracking-wide sm:text-6xl md:text-7xl lg:text-8xl"
              >
                MADE WITH
                <br />

                <span className="text-[#C6A15B]">
                  INTENTION.
                </span>
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
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
                className="mt-7 max-w-[620px] text-sm leading-7 tracking-wide text-[#F4F0E8]/50 sm:text-base sm:leading-8"
              >
                Every VELORA piece begins with a clear purpose —
                refined construction, considered proportions, and
                details that remain timeless.
              </motion.p>

            </div>

            {/* ================= CRAFT CARDS ================= */}

            <div className="grid gap-5 md:grid-cols-3">

              {/* CARD 01 */}

              <motion.div
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
                  delay: 0.1,
                }}
                className="group relative overflow-hidden border border-[#C6A15B]/20 bg-[#0B0B0B]/60 p-7 transition-all duration-500 hover:border-[#C6A15B]/50"
              >

                <div className="flex items-start justify-between">

                  <span className="font-serif text-4xl font-light text-[#C6A15B]/50">
                    01
                  </span>

                  <span className="h-px w-10 bg-[#C6A15B]/40 transition-all duration-500 group-hover:w-16 group-hover:bg-[#C6A15B]" />

                </div>

                <h3 className="mt-12 font-serif text-2xl font-light">
                  Precision
                </h3>

                <p className="mt-4 text-xs leading-6 text-[#F4F0E8]/40">
                  Every proportion is carefully considered to create
                  silhouettes that feel balanced, confident, and
                  effortless.
                </p>

                <div className="mt-8 h-px w-full bg-[#F4F0E8]/10" />

                <p className="mt-4 text-[9px] uppercase tracking-[0.35em] text-[#C6A15B]/70">
                  REFINED CONSTRUCTION
                </p>

              </motion.div>

              {/* CARD 02 */}

              <motion.div
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
                  delay: 0.2,
                }}
                className="group relative overflow-hidden border border-[#C6A15B]/20 bg-[#0B0B0B]/60 p-7 transition-all duration-500 hover:border-[#C6A15B]/50"
              >

                <div className="flex items-start justify-between">

                  <span className="font-serif text-4xl font-light text-[#C6A15B]/50">
                    02
                  </span>

                  <span className="h-px w-10 bg-[#C6A15B]/40 transition-all duration-500 group-hover:w-16 group-hover:bg-[#C6A15B]" />

                </div>

                <h3 className="mt-12 font-serif text-2xl font-light">
                  Materials
                </h3>

                <p className="mt-4 text-xs leading-6 text-[#F4F0E8]/40">
                  Rich textures and carefully selected materials bring
                  depth, comfort, and character to every layer.
                </p>

                <div className="mt-8 h-px w-full bg-[#F4F0E8]/10" />

                <p className="mt-4 text-[9px] uppercase tracking-[0.35em] text-[#C6A15B]/70">
                  CHOSEN WITH CARE
                </p>

              </motion.div>

              {/* CARD 03 */}

              <motion.div
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
                  delay: 0.3,
                }}
                className="group relative overflow-hidden border border-[#C6A15B]/20 bg-[#0B0B0B]/60 p-7 transition-all duration-500 hover:border-[#C6A15B]/50"
              >

                <div className="flex items-start justify-between">

                  <span className="font-serif text-4xl font-light text-[#C6A15B]/50">
                    03
                  </span>

                  <span className="h-px w-10 bg-[#C6A15B]/40 transition-all duration-500 group-hover:w-16 group-hover:bg-[#C6A15B]" />

                </div>

                <h3 className="mt-12 font-serif text-2xl font-light">
                  Detail
                </h3>

                <p className="mt-4 text-xs leading-6 text-[#F4F0E8]/40">
                  From subtle finishing touches to distinctive lines,
                  every detail exists to give each piece its identity.
                </p>

                <div className="mt-8 h-px w-full bg-[#F4F0E8]/10" />

                <p className="mt-4 text-[9px] uppercase tracking-[0.35em] text-[#C6A15B]/70">
                  THE FINAL TOUCH
                </p>

              </motion.div>

            </div>

            {/* ================= BOTTOM STATEMENT ================= */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.5,
              }}
              className="mt-16 flex flex-col gap-5 border-t border-[#F4F0E8]/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
            >

              <p className="max-w-[500px] text-[10px] uppercase tracking-[0.35em] text-[#F4F0E8]/30">
                DESIGN · MATERIAL · CRAFT · PRESENCE
              </p>

              <p className="text-[9px] tracking-[0.4em] text-[#C6A15B]/70">
                VELORA / EST. 2026
              </p>

            </motion.div>

          </div>

        </div>

        {/* SECTION NUMBER */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="absolute bottom-7 right-7"
        >

          <p className="text-[9px] tracking-[0.4em] text-[#F4F0E8]/20">
            03 — CRAFT
          </p>

        </motion.div>

      </section>

    </>
  );
};

export default Home;