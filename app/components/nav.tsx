"use client";

import React, { useState } from "react";
import Link from "next/link";
import Anchor from "../lib/Anchor";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 z-11 w-full px-4 lg:h-30 bg-sky-50">
      <div className="flex items-center space-x-3">
        <Link href="/">
          <img
            src="/images/Logo.svg"
            alt="Logo"
            className="w-60 h-24 mix-blend-multiply"
          />
        </Link>
        <div className="w-full flex items-center justify-between">
          <div className="hidden sm:flex sm:flex-col">
            <Link href="/">
              <h1 className="text-lg font-semibold sm:text-xl md:text-2xl text-red-500">
                UNIVERSAL SHEET METAL WORKS
              </h1>
            </Link>
            <div className="flex flex-wrap text-sm text-gray-600">
              <p className="border-r-1 pr-2 mr-2">
                Naroda GIDC, Ahmedabad, Gujarat
              </p>
              <i></i>
              <p>
                GST NO: <span>24AIJPC8813E1ZK</span>
              </p>
            </div>
          </div>
          {/* Desktop Contact Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="tel:+918673008006">
              <button className="flex items-center gap-2 text-sm bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
                <i className="fa fa-phone text-md"></i>
                <span>CALL +91 8673008006</span>
              </button>
            </Link>
            <Link href="mailto:universalduct.jc@gmail.com">
              <button className="flex items-center gap-2 text-sm bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition">
                <i className="fa fa-envelope text-md"></i>
                <span>universalduct.jc@gmail.com</span>
              </button>
            </Link>
          </div>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden ml-auto sm:ml-0 text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fa ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* For Mobile View */}
      <div className="block sm:hidden sm:flex-col">
        <Link href="/">
          <h1 className="text-xl font-semibold sm:text-xl md:text-2xl text-red-500">
            UNIVERSAL SHEET METAL WORKS
          </h1>
        </Link>
        <div className="flex flex-wrap text-sm text-gray-600">
          <p className="border-r-1 pr-2 mr-2">
            Naroda GIDC, Ahmedabad, Gujarat
          </p>
          <i></i>
          <p>
            GST NO: <span>24AIJPC8813E1ZK</span>
          </p>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden my-3 pr-6 flex flex-col gap-2">
          <Link
            href="#"
            className="block px-3 py-2 text-gray-700 font-medium hover:text-white hover:bg-blue-900 rounded-md"
          >
            Home
          </Link>
          <Link
            href="#products"
            className="block px-3 py-2 text-gray-700 font-medium hover:text-white hover:bg-blue-900 rounded-md"
          >
            Products
          </Link>
          <Link
            href="#about"
            className="block px-3 py-2 text-gray-700 font-medium hover:text-white hover:bg-blue-900 rounded-md"
          >
            About Us
          </Link>
          <Link
            href="#services"
            className="block px-3 py-2 text-gray-700 font-medium hover:text-white hover:bg-blue-900 rounded-md"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="block px-3 py-2 text-gray-700 font-medium hover:text-white hover:bg-blue-900 rounded-md"
          >
            Contact Us
          </Link>
          <Link href="tel:+918673008006">
            <button className="w-full flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              <i className="fa fa-phone text-lg"></i>
              <span>CALL +91 8673008006</span>
            </button>
          </Link>
          <Link href="mailto:info@universalmetal.com">
            <button className="w-full flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
              <i className="fa fa-envelope text-lg"></i>
              <span>info@universalmetal.com</span>
            </button>
          </Link>
        </div>
      )}

      {/* Optional anchor navigation */}
      <div>
        <Anchor />
      </div>
    </nav>
  );
};

export default Nav;
