"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#070b3b] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col justify-around space-y-8 md:flex-row md:space-y-0">
          {/* Left Section - Company Info */}
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Link href="/">
                <h3 className="text-2xl font-bold text-gray-100 mb-3 tracking-wider">
                  Universal Sheet Metal Works
                </h3>
              </Link>
              {/* work description */}
              <p className="text-gray-400 text-sm text-justify tracking-wider">
                Universal Sheet Metal Works doesn’t just make sheet metal
                products—we create strong, lasting solutions. We focus on
                quality, durability, and doing our best in every project. You
                can trust us to deliver great results every time.
              </p>
              <p className="text-gray-300 mt-3 font-semibold">
                Payment Mode: CASH, CHEQUE, ONLINE
              </p>
            </motion.div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                Quick Links
              </h3>
              <ul className="flex flex-col space-y-2 text-gray-400">
                <li className="hover:text-blue-400 transition duration-300">
                  <a href="#">Home</a>
                </li>
                <li className="hover:text-blue-400 transition duration-300">
                  <a href="#products">Products</a>
                </li>
                <li className="hover:text-blue-400 transition duration-300">
                  <a href="#about">About Us</a>
                </li>
                <li className="hover:text-blue-400 transition duration-300">
                  <a href="#services">Services</a>
                </li>
                <li className="hover:text-blue-400 transition duration-300">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-500 my-6"></div>

        {/* Bottom Section - Social Media & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col md:flex-row justify-around items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-gray-100">Universal Sheet Metal Works</span>
              . All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://www.facebook.com/share/18cMEuBUaq/?mibextid=wwXIfr"
                className="text-gray-400 text-2xl transition duration-300 hover:text-blue-400 hover:scale-110"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.youtube.com/@Ductingworks"
                className="text-gray-400 text-2xl transition duration-300 hover:text-red-400 hover:scale-110"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/chauhan-jayanti-narsinhbhai-ducting-manufacturer-b6521564?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="text-gray-400 text-2xl transition duration-300 hover:text-blue-500 hover:scale-110"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/universal_sheet_metal_works?igsh=Z25rcWcyYW0zZ2k2"
                className="text-gray-400 text-2xl transition duration-300 hover:text-pink-400 hover:scale-110"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://g.co/kgs/fXJJk6Y"
                className="text-gray-400 text-2xl transition duration-300 hover:text-blue-500 hover:scale-110"
              >
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
