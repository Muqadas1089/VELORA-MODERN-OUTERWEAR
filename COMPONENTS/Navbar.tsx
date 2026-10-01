import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "./CartContext";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    total,
  } = useCart();

  const closeMenu = () => setMenuOpen(false);

  const openCart = () => {
    setMenuOpen(false);
    setCartOpen(true);
  };

  const closeCart = () => setCartOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Men", path: "/Men" },
    { name: "Women", path: "/women" },
    { name: "Categories", path: "/categories" },
    { name: "Our Team", path: "/our-team" },
  ];

  const cartIcon = (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );

  const truckIcon = (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7h11v11H3z" />
      <path d="M14 11h4l3 3v4h-7z" />
      <circle cx="7.5" cy="18.5" r="2" />
      <circle cx="17.5" cy="18.5" r="2" />
    </svg>
  );

  const userIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
    </svg>
  );

  const closeIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );

  return (
    <>
      {/* THIN SCROLLING SALE BAR */}
      <div className="sticky top-0 z-[51] h-[22px] w-full overflow-hidden bg-white text-black">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex h-[22px] shrink-0 items-center gap-5 px-5 text-[9px] font-semibold uppercase tracking-[0.15em] sm:gap-7 sm:px-8"
            >
              <span className="text-[#C6A15B]">✦</span>
              <span>VELORA EXCLUSIVE SALE</span>

              <span className="font-serif text-[10px] font-bold italic tracking-wider">
                50% OFF
              </span>

              <span>Limited Time Only</span>
              <span className="text-[#C6A15B]">✦</span>
              <span>Discover Your New Look</span>

              <span className="font-serif text-[10px] font-bold italic tracking-wider">
                50% OFF
              </span>

              <span className="text-[#C6A15B]">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      <header className="sticky top-[22px] z-50 w-full bg-[#0B0B0B]/95 text-[#F4F0E8] backdrop-blur-xl">
        {/* TOP GOLD LINE */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />

        {/* MAIN NAVBAR - REDUCED HEIGHT */}
        <nav className="mx-auto flex h-[42px] w-full items-center justify-between border-b border-[#C6A15B]/20 px-5 sm:px-8 lg:px-12">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex shrink-0 flex-col items-center"
          >
            <span className="font-serif text-[20px] font-normal tracking-[0.25em] text-[#C6A15B] transition duration-500 group-hover:text-[#F4F0E8] sm:text-[23px]">
              VELORA
            </span>

            <span className="mt-[-2px] text-[5px] tracking-[0.42em] text-[#F4F0E8]/50 transition duration-300 group-hover:text-[#C6A15B]">
              MODERN OUTERWEAR
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `group relative py-1.5 text-[10px] font-medium uppercase tracking-[0.13em] transition duration-300 xl:text-[11px] ${
                    isActive
                      ? "text-[#C6A15B]"
                      : "text-[#F4F0E8]/75 hover:text-[#C6A15B]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <motion.span
                      className="absolute bottom-0 left-0 h-[1px] bg-[#C6A15B]"
                      initial={false}
                      animate={{
                        width: isActive ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {!isActive && (
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#C6A15B] transition-all duration-300 group-hover:w-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-1.5 xl:flex">
            {/* CART */}
            <button
              type="button"
              onClick={openCart}
              className="group relative flex items-center gap-1.5 rounded-full border border-[#C6A15B]/50 px-2.5 py-1.5 text-[10px] tracking-wide transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {cartIcon}
              </span>

              <span>Cart</span>

              {cartItems.length > 0 && (
                <span className="absolute -right-1 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#C6A15B] px-1 text-[8px] font-bold text-black">
                  {cartItems.reduce(
                    (sum, item) => sum + item.quantity,
                    0
                  )}
                </span>
              )}
            </button>

            {/* TRACK ORDER */}
            <Link
              to="/track-order"
              className="group flex items-center gap-1.5 rounded-full border border-[#C6A15B]/50 px-2.5 py-1.5 text-[10px] tracking-wide transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {truckIcon}
              </span>

              <span>Track Order</span>
            </Link>

            {/* LOGIN */}
            <Link
              to="/login"
              className="group flex items-center gap-1 px-2 py-1.5 text-[10px] tracking-wide text-[#F4F0E8]/80 transition duration-300 hover:text-[#C6A15B]"
            >
              {userIcon}
              <span>Login</span>
            </Link>

            {/* REGISTER */}
            <Link
              to="/register"
              className="rounded-full bg-[#C6A15B] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-[#0B0B0B] transition-all duration-300 hover:bg-[#F4F0E8] hover:shadow-[0_0_18px_rgba(198,161,91,0.25)]"
            >
              Register
            </Link>
          </div>

          {/* MOBILE / TABLET MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C6A15B]/50 text-[#C6A15B] transition duration-300 hover:bg-[#C6A15B] hover:text-black lg:hidden"
          >
            {menuOpen ? (
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* MOBILE / TABLET MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden border-b border-[#C6A15B]/20 bg-[#0B0B0B] lg:hidden"
            >
              <div className="mx-auto flex max-w-2xl flex-col px-6 pb-7 pt-4 sm:px-10">
                {/* MOBILE NAV LINKS */}
                <div className="flex flex-col">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                    >
                      <NavLink
                        to={link.path}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `flex items-center justify-between border-b border-[#C6A15B]/10 py-4 text-[13px] uppercase tracking-[0.15em] transition duration-300 ${
                            isActive
                              ? "text-[#C6A15B]"
                              : "text-[#F4F0E8]/80 hover:pl-2 hover:text-[#C6A15B]"
                          }`
                        }
                      >
                        {link.name}
                        <span className="text-[#C6A15B]">↗</span>
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                {/* MOBILE ACTIONS */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={openCart}
                    className="relative flex items-center justify-center gap-2 rounded-full border border-[#C6A15B]/60 px-3 py-3 text-[11px] tracking-wide text-[#C6A15B] transition duration-300 hover:bg-[#C6A15B] hover:text-black"
                  >
                    {cartIcon}
                    Add to Cart

                    {cartItems.length > 0 && (
                      <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C6A15B] px-1 text-[10px] font-bold text-black">
                        {cartItems.reduce(
                          (sum, item) => sum + item.quantity,
                          0
                        )}
                      </span>
                    )}
                  </button>

                  <Link
                    to="/track-order"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 rounded-full border border-[#C6A15B]/60 px-3 py-3 text-[11px] tracking-wide text-[#C6A15B] transition duration-300 hover:bg-[#C6A15B] hover:text-black"
                  >
                    {truckIcon}
                    Track Order
                  </Link>

                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 rounded-full border border-[#F4F0E8]/30 px-3 py-3 text-[11px] tracking-wide text-[#F4F0E8] transition duration-300 hover:border-[#C6A15B] hover:text-[#C6A15B]"
                  >
                    {userIcon}
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className="flex items-center justify-center rounded-full bg-[#C6A15B] px-3 py-3 text-[11px] font-semibold tracking-wide text-[#0B0B0B] transition duration-300 hover:bg-[#F4F0E8]"
                  >
                    Register
                  </Link>
                </div>

                {/* BOTTOM BRAND TEXT */}
                <p className="mt-6 text-center text-[9px] tracking-[0.3em] text-[#F4F0E8]/35">
                  VELORA — MODERN OUTERWEAR
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* CART DRAWER */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeCart}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-[2px]"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 32,
              }}
              className="fixed right-0 top-0 z-[101] flex h-dvh w-full max-w-[440px] flex-col bg-[#F4F0E8] text-[#0B0B0B] shadow-2xl"
            >
              {/* CART HEADER */}
              <div className="flex items-center justify-between border-b border-[#C6A15B]/30 px-6 py-6">
                <div>
                  <p className="mb-1 text-[9px] tracking-[0.35em] text-[#8A795E]">
                    VELORA COLLECTION
                  </p>

                  <h2 className="font-serif text-2xl tracking-[0.12em]">
                    YOUR CART
                  </h2>

                  <p className="mt-1 text-[10px] tracking-wider text-black/50">
                    {cartItems.reduce(
                      (sum, item) => sum + item.quantity,
                      0
                    )}{" "}
                    ITEMS
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeCart}
                  aria-label="Close cart"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition duration-300 hover:rotate-90 hover:border-[#C6A15B] hover:bg-[#C6A15B]"
                >
                  {closeIcon}
                </button>
              </div>

              {/* CART CONTENT */}
              <div className="flex-1 overflow-y-auto px-6 py-5">
                {cartItems.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#C6A15B]/40 text-[#C6A15B]">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      >
                        <path d="M3 3h2l2.5 12h11L21 7H6" />
                        <circle cx="9" cy="20" r="1" />
                        <circle cx="18" cy="20" r="1" />
                      </svg>
                    </div>

                    <h3 className="font-serif text-xl tracking-wider">
                      YOUR CART IS EMPTY
                    </h3>

                    <p className="mt-3 max-w-[250px] text-xs leading-6 text-black/50">
                      Discover our latest collection and find
                      something you love.
                    </p>

                    <Link
                      to="/categories"
                      onClick={closeCart}
                      className="mt-7 rounded-full bg-[#0B0B0B] px-7 py-3 text-[10px] tracking-[0.2em] text-[#F4F0E8] transition duration-300 hover:bg-[#C6A15B] hover:text-black"
                    >
                      EXPLORE COLLECTION
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 30 }}
                        className="flex gap-4 border-b border-[#C6A15B]/25 pb-5"
                      >
                        <div className="h-28 w-24 shrink-0 overflow-hidden rounded-sm bg-[#E9E3D9]">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="font-serif text-base tracking-wide">
                                {item.name}
                              </h3>

                              <button
                                type="button"
                                onClick={() =>
                                  removeFromCart(item.id)
                                }
                                aria-label={`Remove ${item.name}`}
                                className="text-black/40 transition hover:text-red-700"
                              >
                                {closeIcon}
                              </button>
                            </div>

                            <p className="mt-1 text-[11px] text-black/50">
                              Premium Outerwear
                            </p>
                          </div>

                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center rounded-full border border-black/15">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    item.quantity - 1
                                  )
                                }
                                disabled={item.quantity <= 1}
                                className="px-3 py-1.5 text-sm transition hover:text-[#C6A15B] disabled:opacity-30"
                              >
                                −
                              </button>

                              <span className="min-w-5 text-center text-xs">
                                {item.quantity}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    item.quantity + 1
                                  )
                                }
                                className="px-3 py-1.5 text-sm transition hover:text-[#C6A15B]"
                              >
                                +
                              </button>
                            </div>

                            <p className="text-sm font-medium">
                              $
                              {(
                                item.price * item.quantity
                              ).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* CART FOOTER */}
              {cartItems.length > 0 && (
                <div className="border-t border-[#C6A15B]/30 bg-[#F4F0E8] px-6 py-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs tracking-wider text-black/60">
                      SUBTOTAL
                    </span>

                    <span className="font-serif text-xl">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <p className="mb-5 text-[10px] text-black/45">
                    Shipping and taxes calculated at checkout.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      closeCart();
                    }}
                    className="w-full rounded-full bg-[#0B0B0B] py-4 text-[11px] font-medium tracking-[0.2em] text-[#F4F0E8] transition duration-300 hover:bg-[#C6A15B] hover:text-black"
                  >
                    PROCEED TO CHECKOUT
                  </button>

                  <button
                    type="button"
                    onClick={closeCart}
                    className="mt-3 w-full py-2 text-[10px] tracking-[0.15em] text-black/55 transition hover:text-[#C6A15B]"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;