"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// import React from "react";

const Contact = () => {
  console.log("Contact renders");

  const formRef = useRef<HTMLFormElement>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      console.log("Form submitted successfully:", result);
      formRef.current?.reset();
      setIsSuccess(true); // ✅ Show message
      setTimeout(() => setIsSuccess(false), 5000); // Auto-hide after 5 seconds
    } else {
      console.error("Form submission error:", result);
    }
  }

  return (
    <section id="contact" className="pt-43 sm:pt-37 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 text-transparent bg-clip-text font-montserrat mb-4 animate-pulse">
            Get in Touch
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-24 h-1 bg-blue-900 mx-auto"
          ></motion.div>
          <p className="text-gray-600 mt-4">
            Whether you have a question, need assistance, or want to work with
            us, we’d love to hear from you.
          </p>
        </motion.div>

        {/* Form & Contact Info */}
        <div className="grid md:grid-cols-2 gap-12 rounded-lg bg-gray-200 p-5">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >
            {isSuccess && (
              <div className="mb-4 p-4 text-green-800 bg-green-100 border border-green-300 rounded-lg">
                ✅ Your message has been sent successfully!
              </div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4 bg-white shadow-lg p-8 rounded-lg"
            >
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-bold mb-2 font-montserrat">
              Contact Details
            </h3>
            <p className="text-gray-800 mb-4">
              Need assistance? Our team is here to help! Get in touch via phone,
              email or visit us.
            </p>

            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900">Contact Person:</p>
                <p className="flex items-center text-lg font-bold text-gray-700">
                  <i className="fas fa-user text-blue-900 mr-2"></i>
                  JAYANTIBHAI CHAUHAN
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">Reg. Address:</p>
                <p className="flex items-start text-gray-800">
                  <i className="fas fa-map-marker-alt text-xl text-blue-900 mt-1 mr-3"></i>
                  C-603 Shiv Swati Appartment, S.P. Ring Road, Opp. Lubi, Nana
                  Chiloda Ahmedabad, Gujarat-382330, India.
                </p>
              </div>

              <div className="rounded overflow-hidden mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.905001693622!2d72.66963571166225!3d23.10057317903205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e80e6f89e9c2f%3A0x14c67e7ed59ef9de!2s15%2C%20GIDC%20Phase%203%2C%20Naroda%2C%20Ahmedabad%2C%20Gujarat%20382330!5e0!3m2!1sen!2sin!4v1742380203736!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="flex flex-col space-y-3 mt-4">
                <div className="flex flex-col gap-2 sm:gap-5 sm:flex-row">
                  <Link href="https://wa.me/918673008006" target="_blank">
                    <span className="flex items-center text-gray-800 hover:text-green-600 transition cursor-pointer">
                      <i className="fab fa-whatsapp text-lg text-green-600 mr-2"></i>
                      +91 86730 08006
                    </span>
                  </Link>
                  <Link href="tel:+919228719899">
                    <span className="flex items-center text-gray-800 hover:text-blue-900 transition cursor-pointer">
                      <i className="fas fa-phone text-blue-900 mr-2"></i>
                      +91 92287 19899
                    </span>
                  </Link>
                </div>

                <Link href="mailto:universalduct.jc@gmail.com">
                  <span className="flex items-center text-gray-800 hover:text-blue-900 transition cursor-pointer">
                    <i className="fas fa-envelope text-blue-900 mr-2"></i>
                    universalduct.jc@gmail.com
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
