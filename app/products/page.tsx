"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  features: string[];
  uses: string[];
  images: string[];
}

const productList: Product[] = [
  {
    id: 1,
    name: "Ducts And Exhaust System",
    description: "Restaurant Exhaust Chimney Galvanized",
    features: [
      "Safety-First Features",
      "Corrosion-resistant material",
      "Energy-efficient",
      "Ductable air cooler top & bottom discharge",
      "High Airflow Efficiency",
      "Customizable Design Layout",
      "Easy to Maintain",
      "Eco-Friendly Options",
    ],
    uses: [
      "Air Ventilation",
      "Heat & Smoke Removal",
      "Industrial Sheds",
      "Paint Booth Exhaust Setup",
      "Industrial Kitchen",
      "Restaurants",
      "Warehouse",
      "Party plots",
    ],
    images: [
      "/images/Galvanised-Ducting-1.jpeg",
      "/images/Galvanised-Ducting-8.jpg",
      "/images/Galvanised-Ducting-9.jpg",
      "/images/Galvanised-Ducting-7.jpg",
    ],
  },
  {
    id: 2,
    name: "Industrial Air Cooler",
    description:
      "Manufacturer of Industrial Evaporative Air Coolers & Industrial Exhaust Fans.",
    features: [
      "Corrosion-resistant material",
      "Energy-efficient",
      "Customizable sizes",
      "Durable for industrial use",
      "Ductable air cooler top & bottom discharge",
      "Engineering plastic injection molding body",
      "Lightweight",
      "Modular installation",
    ],
    uses: [
      "Commercial Buildings",
      "Industrial Sheds",
      "Warehouse",
      "Party plots",
      "Restaurants",
      "Offices",
      "Schools",
      "Homes",
    ],
    images: [
      "/images/about-img-2.jpg",
      "/images/Industrial-Air-Cooler-4.jpg",
      "/images/Industrial Air Cooler.jpeg",
      "/images/Industrial Air Cooler-5.jpg",
    ],
  },
  {
    id: 3,
    name: "Tube Axial Fan",
    description: "Innovative Solutions in Tube Axial Fan Manufacturing.",
    features: [
      "High Flow Rate",
      "Compact and Space-Saving",
      "Variable Fan Blade Designs",
      "Durability",
      "Customizable sizes",
      "Easy Installation and Maintenance",
      "Capacity 1 HP, 1.5 HP, and 2 HP",
    ],
    uses: [
      "Industrial shed in hot air suction",
      "Ventilation for Industrial Applications",
      "Exhaust fans",
      "Fresh air in side",
      "kitchen chimneys",
      "Warehouses",
      "Workshops",
    ],
    images: [
      "/images/about-img-1.jpg",
      "/images/Tube-Axial-Fan.jpeg",
      "/images/Tube-Axial-Fan-5.jpg",
      "/images/Tube-Axial-Fan-4.jpg",
    ],
  },
  {
    id: 4,
    name: "Paint Booth",
    description: "Reliable Paint Booths for Clean and Efficient Coating.",
    features: [
      "Advanced Ventilation System",
      "Bright Internal Lighting",
      "Compact and Space-Saving",
      "Fully Enclosed & Safe",
      "Customizable Sizes & Layouts",
      "Optional Heating System (if applicable)",
      "Easy to Install, Clean & Maintain",
    ],
    uses: [
      "Submersible pump paint",
      "electric Motor paint",
      "Small machinery parts painting",
      "Fabricated Sheet Metal Painting",
      "Powder Coating Applications",
      "Heavy-Duty Fabrication Components",
      "Metal Furniture & Fixtures",
      "Industrial Valves, Pipes & Fittings",
    ],
    images: [
      "/images/Paint-booth-1.jpg",
      "/images/Paint-booth-2.jpg",
      "/images/Paint-booth-3.jpg",
      "/images/Paint-booth-4.jpg",
    ],
  },
  {
    id: 5,
    name: "Restaurant Chimney",
    description:
      "Powerful chimney setups built to handle the heat of busy restaurant kitchens.",
    features: [
      "Advanced Ventilation System",
      " High Suction Capacity",
      "Heavy-Duty Construction",
      "Fully Enclosed & Safe",
      "Custom Size & Design Options",
      "Optional Heating System (if applicable)",
      "Easy to Clean Filters & Maintain",
      "Heat & Flame Resistant",
    ],
    uses: [
      "Efficient Exhaust for Heavy Cooking",
      "Smoke & Fume Extraction",
      "Air Quality Improvement",
      "Heat Ventilation",
      "Odor Control",
      "Compliance with Safety Standards",
      "Heavy-Duty Fabrication Components",
    ],
    images: [
      "/images/Restaurant-chimney-1.jpg",
      "/images/Restaurant-chimney-2.jpg",
      "/images/Restaurant-chimney-3.jpg",
      "/images/Restaurant-chimney-4.jpg",
      "/images/Restaurant-chimney-5.jpg",
    ],
  },
  {
    id: 6,
    name: "Round Ducting",
    description:
      "Strong, leak-proof round ducts built for powerful ventilation and exhaust.",
    features: [
      "Compatible with All Ventilation Systems",
      "Advanced Ventilation System",
      "Easy to Install & Connect",
      "High Air Volume Handling",
      "Fully Enclosed & Safe",
      "Customizable Sizes & Layouts",
      "Temperature & Pressure Resistant",
      "Low Maintenance",
    ],
    uses: [
      "Air Ventilation Systems",
      "HVAC (Heating, Ventilation & Air Conditioning)",
      "Paint Booth Exhaust Lines",
      "Industrial Kitchen Chimney Ducting",
      "Blower & Fan Airflow Distribution",
      "Process Cooling Systems",
      "Warehouse & Factory Ventilation",
      "Laboratory & Cleanroom Venting",
    ],
    images: [
      "/images/Round-ducting-1.jpg",
      "/images/Round-ducting-2.jpg",
      "/images/Round-ducting-3.jpg",
      "/images/Round-ducting-4.jpeg",
      "/images/Round-ducting-5.jpg",
    ],
  },
  {
    id: 7,
    name: "Suction Duct",
    description:
      "High-performance suction ducts for efficient fume, dust, and air extraction.",
    features: [
      "High Suction Efficiency",
      "Custom Sizes & Shapes",
      "Easy to Install & Connect",
      "High Air Volume Handling",
      "Fully Enclosed & Safe",
      "Smooth Interior Finish",
      "Heat & Chemical Resistant Options",
    ],
    uses: [
      "Localized suction for CNC machines and laser cutters",
      "Air Ventilation Systems",
      "Industrial Exhaust Lines",
      "Laboratory Air Control",
      "HVAC & Ventilation Support",
      "Connecting with blowers or filters for air purification",
      "Warehouse & Factory Ventilation",
    ],
    images: [
      "/images/Suction-duct-1.jpg",
      "/images/Suction-duct-2.jpg",
      "/images/Suction-duct-3.jpg",
      "/images/Suction-duct-4.jpg",
    ],
  },
  {
    id: 8,
    name: "Air Compressors Exhaust Duct",
    description:
      "Reliable compressor exhaust solutions to safely vent heat, gases, and pressure.",
    features: [
      "High-Temperature Resistance",
      "Durable Construction",
      "Fully Enclosed & Safe",
      "Flexible Installation Options",
      "Enhanced Safety Features",
      "Easy to Service",
      "Corrosion-Resistant Coating",
    ],
    uses: [
      "HVAC Systems",
      "Ventilation and Cooling",
      "Cooling of Industrial Equipment",
      "High Air Volume Handling",
      "Heat Management",
      "Industrial Exhaust Systems:",
      "Air Compressor Exhaust Routing",
    ],
    images: [
      "/images/Compressors-exhaust-1.jpg",
      "/images/Compressors-exhaust-2.jpg",
    ],
  },
  {
    id: 9,
    name: "Centrifugal Blower",
    description:
      "Reliable performance for exhaust, cooling, and air handling needs.",
    features: [
      "High Airflow Efficiency",
      "Available in Custom Sizes & Capacities",
      "Handles High Temperatures",
      "Easy Installation & Maintenance",
      "Motor Compatibility",
      "Low Maintenance",
      "Industrial-Grade Performance",
      "Low Noise Performance",
    ],
    uses: [
      "Process Airflow in Chemical Plants",
      "Industrial Ventilation",
      "Exhaust Systems",
      "Air Supply Systems",
      "Cooling Systems",
      "Paint Booth Ventilation",
      "HVAC Systems",
      "Agricultural Ventilation",
    ],
    images: [
      "/images/Centrifugal-blower-1.jpg",
      "/images/Centrifugal-blower-2.jpg",
      "/images/Centrifugal-blower-3.jpg",
      "/images/Centrifugal-blower-4.jpg",
      "/images/Suction-duct-3.jpg",
    ],
  },
  {
    id: 10,
    name: "Air Grill",
    description:
      "Durable air grills for efficient airflow and ventilation control.",
    features: [
      "Optimized Airflow Design",
      "Custom Sizes & Finishes",
      "Easy Installation",
      "Fixed or Adjustable Louvers",
      "Low Maintenance",
      "Compatible with HVAC Systems",
      "Ventilation with Style",
    ],
    uses: [
      "Wall, Ceiling, or Floor Ventilation",
      "Exhaust Air Outlets",
      "Fresh Air Intake Points",
      "Commercial Building Ventilation",
      "Cleanroom & Lab Venting",
      "Kitchen & Bathroom Vent Openings",
      "Warehouse & Factory Ventilation",
      "Cooling for Server Rooms or Equipment Areas",
    ],
    images: [
      "/images/Air-grill-1.jpg",
      "/images/Air-grill-2.jpg",
      "/images/Air-grill-3.jpg",
      "/images/Air-grill-4.jpg",
    ],
  },
];

const Page = () => {
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [hoverRatings, setHoverRatings] = useState<Record<number, number>>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState<
    Record<number, number>
  >({});
  const [fullSizeImage, setFullSizeImage] = useState<string | null>(null);

  const handleRating = (productId: number, star: number) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [productId]: star,
    }));
  };

  const handleHoverRating = (productId: number, star: number) => {
    setHoverRatings((prevHoverRatings) => ({
      ...prevHoverRatings,
      [productId]: star,
    }));
  };

  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [menuOpen, setMenuOpen] = useState(false);

  // Contact Form
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
    <section>
      {/* Nav-bar */}
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

        {/* Mobile Search & Nav */}
        {menuOpen && (
          <div className="lg:hidden my-3 pr-6 flex flex-col gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setSelectedProductId(null);
                }}
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <i className="fa fa-search absolute right-2 top-3 text-gray-500" />
            </div>
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 font-medium hover:text-white hover:bg-blue-900 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="block px-3 py-2 text-gray-700 font-medium hover:text-white hover:bg-blue-900 rounded-md"
            >
              About Us
            </Link>
            <Link
              href="/#services"
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

        {/* Desktop Nav & Search */}
        <div className="hidden lg:flex items-center justify-end pr-5 space-x-20 bg-blue-700 -mx-4">
          {/* Search Box */}
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSelectedProductId(null);
              }}
              className="w-full px-4 py-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <i className="fa fa-search absolute right-0 top-0 flex items-center justify-center text-gray-900 w-10 h-full cursor-pointer"></i>
          </div>

          {/* Nav Links */}
          <div className="group text-lg text-white cursor-pointer px-3 py-2 font-bold tracking-widest transform hover:scale-110 transition duration-500">
            <Link href="/">Home</Link>
          </div>
          <div className="group text-lg text-white cursor-pointer px-3 py-2 font-bold tracking-widest transform hover:scale-110 transition duration-500">
            <Link href="/#about">About Us</Link>
          </div>
          <div className="group text-lg text-white cursor-pointer px-3 py-2 font-bold tracking-widest transform hover:scale-110 transition duration-500">
            <Link href="/#services">Services</Link>
          </div>
          <Link href="#contact">
            <motion.button className="bg-white text-blue-800 px-4 py-2 rounded-md font-bold tracking-wider transform hover:scale-110 transition duration-500 cursor-pointer">
              Contact Us
            </motion.button>
          </Link>
        </div>
      </nav>

      {/* Main container */}
      <div className="bg-gray-100 mt-37 pt-5 sm:mt-25 lg:mt-27">
        <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 xl:w-1/5  bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold text-center text-blue-700 underline mb-4">
              Products &amp; Services
            </h2>
            <div className="space-y-3">
              {/* Product Selection */}
              <div className="relative flex justify-center">
                <select
                  id="product-select"
                  className="w-full p-2 text-gray-800 font-semibold border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer appearance-none"
                  value={selectedProductId || ""}
                  onChange={(e) => {
                    const selectedId = e.target.value
                      ? parseInt(e.target.value)
                      : null;
                    setSelectedProductId(selectedId);
                  }}
                >
                  <option value="">-- Select a product --</option>
                  {productList.map((product) => (
                    <option
                      className="font-semibold"
                      key={product.id}
                      value={product.id}
                    >
                      {product.name}
                    </option>
                  ))}
                </select>
                <i className="fas fa-chevron-down absolute right-0 flex items-center justify-center w-10 h-full cursor-pointer pointer-events-none"></i>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full my-7 space-y-10">
            {(selectedProductId
              ? productList.filter((p) => p.id === selectedProductId)
              : filteredProducts
            ).map((product) => (
              <div
                className="flex flex-col justify-center xl:flex-row text-center mx-auto max-w-7xl space-x-1 p-5 bg-white rounded-lg"
                id="main-content"
                key={product.id}
              >
                <div className="px-10">
                  <h1 className="text-2xl font-bold text-blue-700">
                    {product.name}
                  </h1>
                  <p className="text-gray-600">{product.description}</p>
                  {/* Image Section */}
                  <div className="flex flex-col-reverse xl:flex-row gap-4 w-full justify-center items-center mt-10">
                    <div>
                      {/* Thumbnails */}
                      <div className="flex xl:flex-col gap-2 overflow-x-auto lg:overflow-visible">
                        {product.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${product.name} thumbnail ${idx + 1}`}
                            className={`w-20 h-20 border cursor-pointer object-cover h-20 ${
                              selectedImageIndex[product.id] === idx
                                ? "border-2 border-blue-500"
                                : "border-gray-600"
                            } hover:border-blue-500`}
                            onClick={() =>
                              setSelectedImageIndex((prev) => ({
                                ...prev,
                                [product.id]: idx,
                              }))
                            }
                          />
                        ))}
                      </div>
                    </div>

                    {/* Main Image */}
                    <div>
                      <img
                        src={
                          product.images[
                            selectedImageIndex[product.id] !== undefined
                              ? selectedImageIndex[product.id]
                              : 0
                          ]
                        }
                        alt={product.name}
                        className="border border-gray-400 h-70 md:w-150 md:h-120 object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                        onClick={() =>
                          setFullSizeImage(
                            product.images[
                              selectedImageIndex[product.id] !== undefined
                                ? selectedImageIndex[product.id]
                                : 0
                            ]
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
                {/* Description Container */}
                <div className="p-10 sm:px-20 text-start space-y-7">
                  <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:justify-between xl:flex-col lg:space-y-4 xl:mt-12">
                    <div>
                      <h2 className="text-2xl font-bold text-blue-700">
                        Features
                      </h2>
                      <ul className="text-gray-600 list-disc pl-5">
                        {product.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-blue-700">Uses</h2>
                      <ul className="text-gray-600 list-disc pl-5">
                        {product.uses.map((u, i) => (
                          <li key={i}>{u}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Star Rating Container */}
                  <div>
                    <h2 className="text-xl font-bold text-blue-700">
                      Product Rating
                    </h2>
                    <div className="flex mt-2 space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i
                          key={star}
                          onClick={() => handleRating(product.id, star)}
                          onMouseEnter={() =>
                            handleHoverRating(product.id, star)
                          }
                          onMouseLeave={() => handleHoverRating(product.id, 0)}
                          className={`fa fa-star text-lg cursor-pointer transition-transform duration-300 ${
                            hoverRatings[product.id] >= star ||
                            ratings[product.id] >= star
                              ? "text-yellow-500 scale-110"
                              : "text-gray-400"
                          }`}
                        ></i>
                      ))}
                    </div>
                    <p className="text-gray-700 mt-1 text-sm">
                      {ratings[product.id] > 0
                        ? `You rated this product ${
                            ratings[product.id]
                          } out of 5 stars!`
                        : "Click on the stars to rate this product."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="pt-16 pb-20">
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
                Need assistance? Our team is here to help! Get in touch via
                phone, email or visit us.
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.567159388768!2d72.66249906027399!3d23.112935617336586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e81ed22d08e91%3A0x8dd6041c20b62652!2sShiv%20Swati%20Apartment!5e0!3m2!1sen!2sin!4v1744768682845!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
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
      </div>

      {/* Footer Section */}
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
                    <Link href="#">Home</Link>
                  </li>
                  <li className="hover:text-blue-400 transition duration-300">
                    <Link href="#">Products</Link>
                  </li>
                  <li className="hover:text-blue-400 transition duration-300">
                    <Link href="/#about">About Us</Link>
                  </li>
                  <li className="hover:text-blue-400 transition duration-300">
                    <Link href="/#services">Services</Link>
                  </li>
                  <li className="hover:text-blue-400 transition duration-300">
                    <Link href="#contact">Contact</Link>
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
                <span className="text-gray-100">
                  Universal Sheet Metal Works
                </span>
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

      {/* For Fullsize image */}
      {fullSizeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setFullSizeImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold z-10"
              onClick={() => setFullSizeImage(null)}
            >
              &times;
            </button>
            <img
              src={fullSizeImage}
              alt="Full Size"
              className="max-w-full max-h-[80vh] object-contain rounded shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Page;
