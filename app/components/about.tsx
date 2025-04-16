"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const About = () => {
  const router = useRouter();

  return (
    <section id="about" className="pt-43 sm:pt-36 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 text-transparent bg-clip-text font-montserrat mb-4 animate-pulse">
            About Us
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-25 h-1 bg-indigo-900 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-1/2 mx-auto md:w-full"
          >
            <Link href="/products">
              <img
                src="/images/about-img-1.jpg"
                alt="Tube Axil Fan"
                className="lg:w-120 lg:h-70 object-cover rounded-lg shadow-2xl transform hover:scale-110 transition duration-500"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl xl:text-3xl font-extrabold text-gray-900 mb-6 font-montserrat">
              Excellence in Metal Fabrication
            </h3>
            <p className="text-md xl:text-lg text-justify text-gray-600 mb-8 leading-relaxed">
              Universal Sheet Metal Works brings over 20 years of expertise in
              metal fabrication, providing high-quality products and reliable
              services. We work with a skilled team and modern equipment to meet
              the needs of industries around the world.
            </p>
            {/* Metal Fabrication Description */}
            <ul className="space-y-5 text-sm">
              {[
                "Advanced Manufacturing Technology for precision fabrication",
                "Highly skilled engineering team with a focus on innovation",
                "Products tested to meet the highest quality standards",
                "High-Strength Metal Fabrication for Industrial Applications",
                "Global reach with trusted partnerships across multiple industries",
              ].map((text, index) => (
                <motion.li key={index} className="flex items-center">
                  <motion.i className="fas fa-check-circle text-blue-900 mr-4 text-xl"></motion.i>
                  <span className="transition duration-300 cursor-default">
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl xl:text-3xl font-extrabold text-gray-900 mb-6 font-montserrat">
              Our Mission & Vision
            </h3>
            <p className="text-md xl:text-lg text-justify text-gray-600 mb-8 leading-relaxed">
              Our mission is to make the metal fabrication industry better with
              new technology and strong attention to detail. We aim to provide
              high-quality products, care for the environment, and keep our
              customers happy. Our vision is to be a trusted leader in the
              industry, known for our reliability, great service, and constant
              growth.
            </p>
            <motion.button
              onClick={() => router.push("/products")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
            >
              Explore More
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-1/2 mx-auto md:w-full"
          >
            <Link href="/products">
              <img
                src="/images/about-img-2.jpg"
                alt="Innovation & Mission"
                className="lg:w-100 lg:h-70 object-cover rounded-lg shadow-2xl transform hover:scale-110 transition duration-500"
              />
            </Link>
          </motion.div>
        </div>
      </div>
      <div>
        <p className="text-xl text-blue-800 font-bold text-center underline underline-offset-3 mb-4">
          Watch Our Product in Action
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-5">
          <iframe
            className="w-70 h-50 sm:w-85 sm:h-50 mx-auto"
            src="https://www.youtube.com/embed/dOnHFYf5rCs?si=VVk4xfoIVPP3IOJC"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-70 h-50 sm:w-85 sm:h-50 mx-auto"
            src="https://www.youtube.com/embed/jLohWNU9bYU?si=-6vEhIlsp7I4caDx"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-70 h-50 sm:w-85 sm:h-50 mx-auto"
            src="https://www.youtube.com/embed/7A6WD8fs2m8?si=sgC4ccEgtifZSTuX"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
