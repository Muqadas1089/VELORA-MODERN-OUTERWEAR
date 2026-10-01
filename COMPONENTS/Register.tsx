import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Demo registration: backend abhi connected nahi hai.
    alert("Registration form submitted!");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-84px)] items-center justify-center overflow-hidden bg-[#F4F0E8] px-4 py-3">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[450px] rounded-2xl border border-[#C6A15B]/40 bg-[#F4F0E8] px-6 py-5 shadow-[0_10px_40px_rgba(11,11,11,0.10)] sm:px-9"
      >
        {/* HEADING */}
        <div className="mb-4 text-center">
          <p className="mb-1 text-[9px] tracking-[0.4em] text-[#A88743]">
            JOIN THE COLLECTION
          </p>

          <h1 className="font-serif text-2xl tracking-[0.12em] text-[#0B0B0B]">
            CREATE ACCOUNT
          </h1>

          <p className="mt-1.5 text-[11px] text-[#0B0B0B]/55">
            Become a part of the VELORA experience
          </p>
        </div>

        {/* PROFILE IMAGE */}
        <div className="mb-4 flex flex-col items-center">
          <label className="group relative flex h-[72px] w-[72px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-dashed border-[#C6A15B]/60 bg-white transition hover:border-[#C6A15B]">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0B0B0B"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
              </svg>
            )}

            <span className="absolute bottom-0 flex w-full justify-center bg-[#C6A15B] py-1 text-[8px] font-semibold tracking-wider text-black opacity-0 transition group-hover:opacity-100">
              UPLOAD
            </span>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          <p className="mt-1.5 text-[9px] tracking-wider text-[#0B0B0B]/45">
            UPLOAD PROFILE PICTURE
          </p>
        </div>

        {/* REGISTER FORM */}
        <form onSubmit={handleRegister} className="space-y-3">
          {/* FULL NAME */}
          <div>
            <label className="mb-1 block text-[10px] font-medium tracking-wider text-[#0B0B0B]/75">
              FULL NAME
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-lg border border-[#C6A15B]/35 bg-white px-4 py-2.5 text-sm text-[#0B0B0B] outline-none transition placeholder:text-[#0B0B0B]/35 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]/30"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="mb-1 block text-[10px] font-medium tracking-wider text-[#0B0B0B]/75">
              EMAIL ADDRESS
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-[#C6A15B]/35 bg-white px-4 py-2.5 text-sm text-[#0B0B0B] outline-none transition placeholder:text-[#0B0B0B]/35 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]/30"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="mb-1 block text-[10px] font-medium tracking-wider text-[#0B0B0B]/75">
              PASSWORD
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full rounded-lg border border-[#C6A15B]/35 bg-white px-4 py-2.5 pr-16 text-sm text-[#0B0B0B] outline-none transition placeholder:text-[#0B0B0B]/35 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]/30"
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

          {/* CONFIRM PASSWORD */}
          <div>
            <label className="mb-1 block text-[10px] font-medium tracking-wider text-[#0B0B0B]/75">
              CONFIRM PASSWORD
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
              className="w-full rounded-lg border border-[#C6A15B]/35 bg-white px-4 py-2.5 text-sm text-[#0B0B0B] outline-none transition placeholder:text-[#0B0B0B]/35 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]/30"
            />
          </div>

          {/* REGISTER BUTTON */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="mt-2 w-full rounded-full bg-[#0B0B0B] py-3 text-[11px] font-medium tracking-[0.2em] text-[#F4F0E8] transition duration-300 hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
          >
            CREATE ACCOUNT
          </motion.button>
        </form>

        {/* LOGIN LINK */}
        <div className="mt-4 text-center">
          <p className="text-[11px] text-[#0B0B0B]/60">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#A88743] transition hover:text-[#0B0B0B]"
            >
              Login
            </Link>
          </p>
        </div>

        {/* BOTTOM BRAND */}
        <div className="mt-4 flex items-center justify-center gap-3">
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

export default Register;