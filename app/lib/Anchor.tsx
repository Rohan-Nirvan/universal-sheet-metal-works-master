"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const anchor = () => {
  return (
    <div className="hidden lg:flex items-center justify-end pr-5 space-x-15 bg-blue-700 -mx-4 py-1">
      <div className="group text-lg text-white cursor-pointer px-3 py-1 font-bold tracking-widest transform hover:scale-110 transition duration-500">
        <Link href="#">
          Home
        </Link>
      </div>
      <div className="group text-lg text-white cursor-pointer px-3 py-1 font-bold tracking-widest transform hover:scale-110 transition duration-500">
        <Link href="#products">Products</Link>
      </div>
      <div className="group text-lg text-white cursor-pointer px-3 py-1 font-bold tracking-widest transform hover:scale-110 transition duration-500">
        <Link href="#about">About Us</Link>
      </div>
      <div className="group text-lg text-white cursor-pointer px-3 py-1 font-bold tracking-widest transform hover:scale-110 transition duration-500">
        <Link href="#services">Services</Link>
      </div>
      <Link href="#contact">
        <motion.button className="bg-white text-blue-800 px-4 py-1 rounded-md font-bold tracking-wider transform hover:scale-110 transition duration-500 cursor-pointer">
          Contact Us
        </motion.button>
      </Link>
    </div>
  );
};

export default anchor;
