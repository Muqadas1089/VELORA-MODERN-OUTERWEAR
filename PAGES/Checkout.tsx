import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FaArrowLeft,
  FaLock,
  FaMinus,
  FaPlus,
  FaTrash,
  FaCheckCircle,
  FaTruck,
} from "react-icons/fa";
import { useCart } from "../COMPONENTS/CartContext";

const Checkout: React.FC = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    total,
    placeOrder,
  } = useCart();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setError("");

    if (cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    const order = placeOrder({
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      address: form.address,
      city: form.city,
      postalCode: form.postalCode,
      paymentMethod: "Cash on Delivery",
    });

    if (!order) {
      setError("Unable to place order. Your cart is empty.");
      return;
    }

    setOrderNumber(order.orderNumber);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] px-5 py-20 text-[#F4F0E8]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-xl rounded-2xl border border-[#C6A15B]/30 bg-[#151515] p-10 text-center"
        >
          <FaCheckCircle className="mx-auto mb-6 text-6xl text-[#C6A15B]" />

          <h1 className="mb-3 text-3xl font-serif">
            Order Placed!
          </h1>

          <p className="mb-6 text-sm text-[#F4F0E8]/60">
            Thank you for shopping with VELORA.
            Your order has been received.
          </p>

          <div className="mb-8 rounded-xl border border-[#C6A15B]/30 p-5">
            <p className="mb-2 text-xs uppercase tracking-widest text-[#C6A15B]">
              Order Number
            </p>

            <p className="text-xl font-semibold">
              {orderNumber}
            </p>
          </div>

          <p className="mb-8 text-sm text-[#F4F0E8]/70">
            Payment Method: Cash on Delivery
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[#C6A15B] px-8 py-3 text-sm font-semibold text-black transition hover:bg-[#F4F0E8]"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] px-5 py-16 text-[#F4F0E8] md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-12">
          <Link
            to="/cart"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[#F4F0E8]/60 transition hover:text-[#C6A15B]"
          >
            <FaArrowLeft />
            Back to Cart
          </Link>

          <h1 className="text-4xl font-serif tracking-wide md:text-5xl">
            Checkout
          </h1>

          <p className="mt-3 text-sm text-[#F4F0E8]/50">
            Complete your details to place your order.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-2xl border border-[#C6A15B]/20 bg-[#151515] p-10 text-center">
            <h2 className="mb-3 text-2xl font-serif">
              Your Cart is Empty
            </h2>

            <p className="mb-6 text-sm text-[#F4F0E8]/50">
              Please add products before checkout.
            </p>

            <Link
              to="/categories"
              className="inline-block rounded-full bg-[#C6A15B] px-7 py-3 text-sm font-semibold text-black transition hover:bg-[#F4F0E8]"
            >
              Explore Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr]">
            {/* CUSTOMER FORM */}
            <div>
              <form
                onSubmit={handlePlaceOrder}
                className="rounded-2xl border border-[#C6A15B]/20 bg-[#151515] p-6 md:p-8"
              >
                <h2 className="mb-7 text-2xl font-serif">
                  Delivery Information
                </h2>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {/* FULL NAME */}
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-xs uppercase tracking-widest text-[#F4F0E8]/60">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-lg border border-[#C6A15B]/20 bg-[#0B0B0B] px-4 py-3 text-sm outline-none transition placeholder:text-[#F4F0E8]/30 focus:border-[#C6A15B]"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-[#F4F0E8]/60">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      required
                      className="w-full rounded-lg border border-[#C6A15B]/20 bg-[#0B0B0B] px-4 py-3 text-sm outline-none transition placeholder:text-[#F4F0E8]/30 focus:border-[#C6A15B]"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-[#F4F0E8]/60">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="03XXXXXXXXX"
                      required
                      className="w-full rounded-lg border border-[#C6A15B]/20 bg-[#0B0B0B] px-4 py-3 text-sm outline-none transition placeholder:text-[#F4F0E8]/30 focus:border-[#C6A15B]"
                    />
                  </div>

                  {/* ADDRESS */}
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-xs uppercase tracking-widest text-[#F4F0E8]/60">
                      Complete Address
                    </label>

                    <textarea
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="House number, street, area..."
                      rows={4}
                      required
                      className="w-full resize-none rounded-lg border border-[#C6A15B]/20 bg-[#0B0B0B] px-4 py-3 text-sm outline-none transition placeholder:text-[#F4F0E8]/30 focus:border-[#C6A15B]"
                    />
                  </div>

                  {/* CITY */}
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-[#F4F0E8]/60">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      required
                      className="w-full rounded-lg border border-[#C6A15B]/20 bg-[#0B0B0B] px-4 py-3 text-sm outline-none transition placeholder:text-[#F4F0E8]/30 focus:border-[#C6A15B]"
                    />
                  </div>

                  {/* POSTAL CODE */}
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-[#F4F0E8]/60">
                      Postal Code
                    </label>

                    <input
                      type="text"
                      name="postalCode"
                      value={form.postalCode}
                      onChange={handleChange}
                      placeholder="Postal code"
                      className="w-full rounded-lg border border-[#C6A15B]/20 bg-[#0B0B0B] px-4 py-3 text-sm outline-none transition placeholder:text-[#F4F0E8]/30 focus:border-[#C6A15B]"
                    />
                  </div>
                </div>

                {/* PAYMENT */}
                <div className="mt-10">
                  <h2 className="mb-5 text-2xl font-serif">
                    Payment Method
                  </h2>

                  <div className="flex items-center gap-4 rounded-xl border border-[#C6A15B] bg-[#C6A15B]/5 p-5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#C6A15B]">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#C6A15B]" />
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        Cash on Delivery
                      </p>

                      <p className="mt-1 text-xs text-[#F4F0E8]/50">
                        Pay when your order arrives.
                      </p>
                    </div>

                    <FaTruck className="ml-auto text-xl text-[#C6A15B]" />
                  </div>
                </div>

                {error && (
                  <p className="mt-5 text-sm text-red-400">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#C6A15B] py-4 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-[#F4F0E8]"
                >
                  <FaLock />
                  Place Order
                </button>

                <p className="mt-4 text-center text-xs text-[#F4F0E8]/40">
                  Your order details will be reviewed before
                  confirmation.
                </p>
              </form>
            </div>

            {/* ORDER SUMMARY */}
            <div>
              <div className="sticky top-28 rounded-2xl border border-[#C6A15B]/20 bg-[#151515] p-6 md:p-8">
                <h2 className="mb-7 text-2xl font-serif">
                  Order Summary
                </h2>

                <div className="max-h-[430px] space-y-5 overflow-y-auto pr-2">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 border-b border-[#F4F0E8]/10 pb-5"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-20 rounded-lg object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-sm font-medium">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-sm text-[#C6A15B]">
                          ${item.price.toFixed(2)}
                        </p>

                        <div className="mt-3 flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.quantity - 1
                              )
                            }
                            disabled={item.quantity <= 1}
                            className="rounded border border-[#C6A15B]/30 p-1.5 disabled:opacity-30"
                            aria-label="Decrease quantity"
                          >
                            <FaMinus size={9} />
                          </button>

                          <span className="text-xs">
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
                            className="rounded border border-[#C6A15B]/30 p-1.5"
                            aria-label="Increase quantity"
                          >
                            <FaPlus size={9} />
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            className="ml-auto text-[#F4F0E8]/40 transition hover:text-red-400"
                            aria-label="Remove product"
                          >
                            <FaTrash size={13} />
                          </button>
                        </div>
                      </div>

                      <p className="whitespace-nowrap text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 space-y-4 border-t border-[#F4F0E8]/10 pt-6">
                  <div className="flex justify-between text-sm text-[#F4F0E8]/60">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-sm text-[#F4F0E8]/60">
                    <span>Shipping</span>
                    <span>Calculated separately</span>
                  </div>

                  <div className="flex justify-between border-t border-[#F4F0E8]/10 pt-5">
                    <span className="text-base font-medium">
                      Total
                    </span>

                    <span className="text-2xl font-semibold text-[#C6A15B]">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;