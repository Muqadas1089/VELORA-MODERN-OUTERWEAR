import React, { useState } from "react";
import { motion } from "motion/react";
import {
  FaBox,
  FaTruck,
  FaCheck,
  FaLocationDot,
  FaMagnifyingGlass,
} from "react-icons/fa6";

const TrackOrder: React.FC = () => {
  const [orderId, setOrderId] = useState("");
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!orderId.trim()) {
      setError("Please enter your Order ID.");
      setSearched(false);
      return;
    }

    setError("");
    setSearched(true);
  };

  return (
    <div className="min-h-[calc(100vh-84px)] bg-[#F4F0E8] px-4 py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#C6A15B]">
            VELORA DELIVERY
          </p>

          <h1 className="text-3xl font-semibold tracking-wide text-[#0B0B0B] md:text-5xl">
            Track Your Order
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-600 md:text-base">
            Stay updated on your order and follow its journey to your doorstep.
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-[#C6A15B]/30 bg-white p-5 shadow-lg shadow-black/5 md:p-8"
        >
          <form onSubmit={handleTrackOrder}>
            <label className="mb-3 block text-sm font-medium text-[#171717]">
              Enter your Order ID
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={orderId}
                onChange={(e) => {
                  setOrderId(e.target.value);
                  setError("");
                  setSearched(false);
                }}
                placeholder="e.g. VEL-12345"
                className="h-12 w-full rounded-md border border-gray-300 bg-[#F4F0E8]/50 px-4 text-sm text-[#0B0B0B] outline-none transition focus:border-[#C6A15B] focus:ring-2 focus:ring-[#C6A15B]/20"
              />

              <button
                type="submit"
                className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-[#0B0B0B] px-7 text-sm font-medium text-[#F4F0E8] transition duration-300 hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
              >
                <FaMagnifyingGlass className="text-xs" />
                Track Order
              </button>
            </div>

            {error && (
              <p className="mt-3 text-sm text-red-600">{error}</p>
            )}
          </form>
        </motion.div>

        {/* Order Status */}
        {searched && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 rounded-xl border border-[#C6A15B]/30 bg-white p-5 shadow-lg shadow-black/5 md:p-8"
          >
            <div className="flex flex-col justify-between gap-3 border-b border-gray-200 pb-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Order ID
                </p>
                <h2 className="mt-1 text-xl font-semibold text-[#0B0B0B]">
                  {orderId}
                </h2>
              </div>

              <span className="w-fit rounded-full bg-[#C6A15B]/15 px-4 py-2 text-xs font-semibold text-[#9A762F]">
                Order Placed
              </span>
            </div>

            <div className="mt-8">
              <h3 className="mb-7 text-lg font-semibold text-[#0B0B0B]">
                Order Progress
              </h3>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C6A15B] text-white">
                    <FaCheck />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0B0B0B]">
                      Order Placed
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Your order has been received.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#C6A15B] text-[#C6A15B]">
                    <FaBox />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#171717]">
                      Processing
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Your order is waiting to be processed.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 text-gray-400">
                    <FaTruck />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-500">
                      Out for Delivery
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Your order will be delivered soon.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 text-gray-400">
                    <FaLocationDot />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-500">
                      Delivered
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Your order will arrive at your doorstep.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Bottom Text */}
        <p className="mt-8 text-center text-xs leading-6 text-gray-500">
          Need help with your order? Contact our customer support team.
        </p>
      </div>
    </div>
  );
};

export default TrackOrder;