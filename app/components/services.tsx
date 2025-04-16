"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Services = () => {
  return (
    <section
      id="services"
      className="pt-36 min-h-screen relative overflow-hidden space-y-10"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 text-transparent bg-clip-text font-montserrat mb-4 animate-pulse">
            Our Services
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            "Custom Fabrication",
            "Engineering Design",
            "Metal Processing",
            "Custom Welding",
            "Surface Finishing",
            "Prototype Development",
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-3xl transition duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="mb-4 text-center">
                {/* Service Icons */}
                <i
                  className={`fas fa-${
                    index === 0
                      ? "cogs"
                      : index === 1
                      ? "drafting-compass"
                      : index === 2
                      ? "tools"
                      : index === 3
                      ? "fire"
                      : index === 4
                      ? "paint-brush"
                      : "level-up"
                  } text-4xl text-blue-900`}
                ></i>
              </div>
              <h3 className="text-xl font-bold mb-4 font-montserrat text-center">
                {service}
              </h3>
              <p className="text-gray-600 text-justify tracking-tight">
                {`We offer top-notch ${service.toLowerCase()} services tailored to your specific needs, ensuring quality and precision in every step.`}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="my-15 bg-white rounded-lg p-10 shadow-lg max-w-5xl mx-auto text-center space-y-6">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold"
        >
          Need a Custom Solution?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg"
        >
          Our team is ready to craft tailored services to match your project’s
          exact needs. Let’s collaborate and build something exceptional.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="#contact"
            className="inline-block px-5 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
          >
            Talk to Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
