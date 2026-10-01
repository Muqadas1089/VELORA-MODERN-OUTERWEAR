import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Demo login: backend abhi connected nahi hai.
    alert("Login form submitted!");
  };

  return (
    <div className="flex min-h-[calc(100vh-84px)] items-center justify-center overflow-hidden bg-[#F4F0E8] px-4 py-4">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[420px] rounded-2xl border border-[#C6A15B]/40 bg-[#F4F0E8] px-6 py-6 shadow-[0_10px_40px_rgba(11,11,11,0.10)] sm:px-9"
      >
        {/* PROFILE ICON */}
        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-[#C6A15B]/60 bg-white text-[#0B0B0B]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
          </svg>
        </div>

        {/* HEADING */}
        <div className="mb-5 text-center">
          <p className="mb-1.5 text-[9px] tracking-[0.4em] text-[#A88743]">
            WELCOME BACK
          </p>

          <h1 className="font-serif text-3xl tracking-[0.12em] text-[#0B0B0B]">
            LOGIN
          </h1>

          <p className="mt-1.5 text-xs text-[#0B0B0B]/55">
            Sign in to your VELORA account
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* EMAIL */}
          <div>
            <label className="mb-1.5 block text-[10px] font-medium tracking-wider text-[#0B0B0B]/75">
              EMAIL ADDRESS
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-[#C6A15B]/35 bg-white px-4 py-3 text-sm text-[#0B0B0B] outline-none transition placeholder:text-[#0B0B0B]/35 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]/30"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="mb-1.5 block text-[10px] font-medium tracking-wider text-[#0B0B0B]/75">
              PASSWORD
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border border-[#C6A15B]/35 bg-white px-4 py-3 pr-16 text-sm text-[#0B0B0B] outline-none transition placeholder:text-[#0B0B0B]/35 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]/30"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-medium tracking-wider text-[#A88743] transition hover:text-black"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
          </div>

          {/* FORGOT PASSWORD */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-[10px] text-[#A88743] transition hover:text-[#0B0B0B]"
              onClick={() =>
                alert("Password recovery is not connected yet.")
              }
            >
              Forgot Password?
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full rounded-full bg-[#0B0B0B] py-3.5 text-[11px] font-medium tracking-[0.2em] text-[#F4F0E8] transition duration-300 hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
          >
            LOGIN
          </motion.button>
        </form>

        {/* REGISTER LINK */}
        <div className="mt-5 text-center">
          <p className="text-[11px] text-[#0B0B0B]/60">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#A88743] transition hover:text-[#0B0B0B]"
            >
              Create Account
            </Link>
          </p>
        </div>

        {/* BOTTOM BRAND */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-px flex-1 bg-[#C6A15B]/30" />

          <span className="text-[9px] tracking-[0.3em] text-[#0B0B0B]/40">
            VELORA
          </span>

          <span className="h-px flex-1 bg-[#C6A15B]/30" />
        </div>
      </motion.div>
    </div>
  );
};

export default Login;