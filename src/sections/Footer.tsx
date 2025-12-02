// AI Generated section, only small tweaks

import { useState } from "react";
import {
  FaTiktok,
  FaYoutube,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa6";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Email submitted:", email);
  };

  return (
    <footer className="-mt-2 flex min-h-screen flex-col bg-black text-white">
      <img
        src="/images/slider-dip.png"
        alt="nutrition facts bg"
        className="relative top-0 w-full object-cover"
      />

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-20">
        <h2 className="mb-16 text-center text-8xl font-black tracking-tight max-md:text-6xl max-sm:text-4xl">
          #MILKY_SPYLT_SPONSOR
        </h2>

        {/* Social Icons */}
        <div className="mb-20 flex gap-6">
          <a
            href="#"
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/30 transition-colors hover:bg-white/10"
            aria-label="YouTube"
          >
            <FaYoutube className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/30 transition-colors hover:bg-white/10"
            aria-label="Instagram"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/30 transition-colors hover:bg-white/10"
            aria-label="TikTok"
          >
            <FaTiktok className="h-6 w-6" />
          </a>
        </div>

        {/* Newsletter Signup */}
        <div className="w-full max-w-2xl">
          <p className="mb-6 text-center text-gray-300">
            Get Exclusive Early Access and Stay Informed About Product
            <br />
            Updates, Events, and More!
          </p>

          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onSubmit={handleSubmit}
              placeholder="Enter your email"
              className="w-full border-b-2 border-gray-600 bg-transparent px-2 py-4 text-lg text-gray-400 placeholder-gray-600 transition-colors focus:border-white focus:outline-none"
            />
            <button
              onClick={handleSubmit}
              className="absolute top-1/2 right-2 -translate-y-1/2 transition-transform hover:translate-x-1"
              aria-label="Submit"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Left Side - Logo and Links */}
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Milky</h3>
            </div>
          </div>

          {/* Right Side - Legal Links */}
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl text-sm text-gray-500">
          Copyright © 2025 Milky - All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
