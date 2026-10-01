import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  const creatorName = "MUQADAS UMAR";

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#080808] via-[#171216] to-[#24151A] text-[#F4F0E8]">

      {/* GOLD TOP LINE */}
      <div className="h-px w-full bg-[#C6A15B]" />

      {/* SOFT BACKGROUND GLOW */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-150px] top-[10%] h-[400px] w-[400px] rounded-full bg-[#C6A15B]/8 blur-[150px]" />

        <div className="absolute right-[-120px] bottom-[5%] h-[450px] w-[450px] rounded-full bg-[#6B2737]/15 blur-[160px]" />

        <div className="absolute left-[45%] top-[40%] h-[300px] w-[300px] rounded-full bg-[#C6A15B]/5 blur-[140px]" />

      </div>

      {/* NEWSLETTER / FINAL MESSAGE */}

      <div className="relative z-10 border-b border-[#F4F0E8]/10">

        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-8 px-6 py-16 sm:px-10 md:px-14 lg:flex-row lg:items-end lg:px-20">

          <div className="max-w-[650px]">

            <p className="mb-4 text-[9px] uppercase tracking-[0.5em] text-[#C6A15B]">
              STAY IN THE VELORA WORLD
            </p>

            <h2 className="font-serif text-4xl font-light leading-tight tracking-wide text-[#F4F0E8] sm:text-5xl md:text-6xl">
              Wear something
              <br />

              <span className="text-[#C6A15B]">
                unforgettable.
              </span>
            </h2>

            <p className="mt-5 max-w-[500px] text-xs leading-6 tracking-wide text-[#F4F0E8]/55 sm:text-sm">
              Discover new collections, refined essentials, and the
              latest expressions of VELORA.
            </p>

          </div>

          <Link
            to="/collection"
            className="group inline-flex items-center gap-4 border border-[#F4F0E8]/30 px-6 py-4 text-[9px] font-medium uppercase tracking-[0.3em] text-[#F4F0E8] transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
          >
            Explore Collection

            <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </div>

      </div>

      {/* MAIN FOOTER */}

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-10 md:px-14 lg:px-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}

          <div className="lg:col-span-2">

            <h2 className="font-serif text-4xl font-light tracking-[0.25em] text-[#F4F0E8]">
              VELORA
            </h2>

            <p className="mt-5 max-w-[360px] text-xs leading-6 tracking-wide text-[#F4F0E8]/50">
              Outerwear with presence. Refined silhouettes,
              thoughtful details, and timeless character.
            </p>

            {/* SOCIAL ICONS */}

            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center border border-[#F4F0E8]/20 text-sm text-[#F4F0E8] transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center border border-[#F4F0E8]/20 text-sm text-[#F4F0E8] transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Pinterest"
                className="flex h-9 w-9 items-center justify-center border border-[#F4F0E8]/20 text-sm text-[#F4F0E8] transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
              >
                <FaPinterestP />
              </a>

            </div>

          </div>

          {/* SHOP */}

          <div>

            <p className="mb-6 text-[9px] uppercase tracking-[0.45em] text-[#C6A15B]">
              SHOP
            </p>

            <div className="flex flex-col gap-4">

              <Link
                to="/men"
                className="w-fit text-xs tracking-wide text-[#F4F0E8]/60 transition-colors duration-300 hover:text-[#C6A15B]"
              >
                Men
              </Link>

              <Link
                to="/women"
                className="w-fit text-xs tracking-wide text-[#F4F0E8]/60 transition-colors duration-300 hover:text-[#C6A15B]"
              >
                Women
              </Link>

              <Link
                to="/collection"
                className="w-fit text-xs tracking-wide text-[#F4F0E8]/60 transition-colors duration-300 hover:text-[#C6A15B]"
              >
                Collection
              </Link>

            </div>

          </div>

          {/* COMPANY */}

          <div>

            <p className="mb-6 text-[9px] uppercase tracking-[0.45em] text-[#C6A15B]">
              COMPANY
            </p>

            <div className="flex flex-col gap-4">

              <Link
                to="/about"
                className="w-fit text-xs tracking-wide text-[#F4F0E8]/60 transition-colors duration-300 hover:text-[#C6A15B]"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="w-fit text-xs tracking-wide text-[#F4F0E8]/60 transition-colors duration-300 hover:text-[#C6A15B]"
              >
                Contact
              </Link>

              <Link
                to="/collection"
                className="w-fit text-xs tracking-wide text-[#F4F0E8]/60 transition-colors duration-300 hover:text-[#C6A15B]"
              >
                Our World
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}

      <div className="relative z-10 border-t border-[#F4F0E8]/10">

        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-5 px-6 py-6 sm:px-10 md:flex-row md:items-center md:px-14 lg:px-20">

          {/* COPYRIGHT */}

          <div className="flex flex-col gap-2">

            <p className="text-[9px] uppercase tracking-[0.35em] text-[#F4F0E8]/40">
              © 2026 VELORA
            </p>

            <p className="text-[8px] uppercase tracking-[0.3em] text-[#F4F0E8]/25">
              ALL RIGHTS RESERVED
            </p>

          </div>

          {/* CREATOR CREDIT */}

          <div className="flex flex-col items-center gap-2">

            <p className="text-[8px] uppercase tracking-[0.35em] text-[#F4F0E8]/30">
              Designed & Developed by
            </p>

            <motion.div
              animate={{
                backgroundPosition: ["200% center", "-200% center"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{
                scale: 1.15,
                letterSpacing: "0.45em",
              }}
              className="
                cursor-pointer
                bg-gradient-to-r
                from-[#8F6B2E]
                via-[#FFF1B8]
                to-[#C6A15B]
                bg-[length:200%_auto]
                bg-clip-text
                text-[11px]
                font-semibold
                tracking-[0.3em]
                text-transparent
                transition-all
                duration-500
                drop-shadow-[0_0_8px_rgba(198,161,91,0.15)]
                hover:drop-shadow-[0_0_14px_rgba(198,161,91,0.55)]
              "
            >
              {creatorName}
            </motion.div>

          </div>

          {/* BACK TO TOP */}

          <button
            type="button"
            onClick={handleBackToTop}
            className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-[#F4F0E8]/50 transition-colors duration-300 hover:text-[#C6A15B]"
          >
            Back To Top

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F4F0E8]/20 transition-all duration-300 group-hover:border-[#C6A15B] group-hover:bg-[#C6A15B] group-hover:text-[#0B0B0B]">

              <FaArrowUp className="text-[10px]" />

            </span>

          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
