"use client";

import ProjectCard from "../lib/projectcard";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Galvanized Ducting",
    description: "Custom-built ducting for industrial airflow and ventilation",
    image: "/images/Galvanised-Ducting-1.jpeg",
    link: "/products",
  },
  {
    title: "Restaurant Chimney",
    description: "Engineered solutions for efficient kitchen exhaust systems",
    image: "/images/Restaurant-chimney-1.jpg",
    link: "/products",
  },
  {
    title: "Centrifugal Blower",
    description: "High-performance blowers for air handling and ventilation",
    image: "/images/Centrifugal-blower-1.jpg",
    link: "/products",
  },
  {
    title: "Ventilation Ducting",
    description: "Optimized ductwork for commercial and industrial ventilation",
    image: "/images/about-img-2.jpg",
    link: "/products",
  },
  {
    title: "Suction Duct",
    description: "Efficient ducting systems for dust and fume extraction",
    image: "/images/Suction-duct-1.jpg",
    link: "/products",
  },
  {
    title: "Tube Axial Fan",
    description: "Compact, powerful fans for directional airflow control",
    image: "/images/about-img-1.jpg",
    link: "/products",
  },
];

const Product = () => {
  return (
    <section
      id="products"
      className="relative w-full overflow-hidden pt-43 sm:py-36 min-h-screen text-white"
    >
      {/* Our Product title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold  text-white text-center bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text font-montserrat mb-2 animate-pulse">
          Our Products
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="w-25 h-1 bg-blue-900 mx-auto"
        ></motion.div>
      </motion.div>
      {/* Product description */}
      {/* Main Description */}
      <div className="text-center max-w-5xl mx-auto text-gray-300 text-base md:text-xl leading-relaxed px-4 md:px-8 mt-7 mb-12">
        <p className="mb-4">
          {`Our product lineup is engineered to meet the toughest industrial
          demands. From efficient ventilation systems to durable structural
          components, we design solutions that are built to last. Every item is
          crafted with precision, using high-quality materials and modern
          manufacturing techniques.`}
        </p>
        <p>
          {`Whether you're managing a large-scale facility or a specialized
            project, our products offer the performance and reliability needed
            to keep operations running smoothly.`}
        </p>
      </div>
      {/* ProjectCard */}
      <div className="scroller relative w-full flex justify-center">
        <div className="scroller-inner flex flex-nowrap gap-4">
          {[...projects, ...projects, ...projects].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-24 max-w-6xl mx-auto px-6 text-white">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-center text-blue-400 mb-6"
        >
          Why Choose Us
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Custom Fabrication",
              icon: "⚙️",
              desc: "Tailor-made solutions for your specific airflow and structural needs.",
            },
            {
              title: "Premium Quality",
              icon: "🏆",
              desc: "Only top-grade materials and precision engineering go into our products.",
            },
            {
              title: "Reliable Support",
              icon: "📞",
              desc: "Dedicated team to guide you through design, installation, and after-sales.",
            },
            {
              title: "On-Time Delivery",
              icon: "⏱️",
              desc: "Fast turnaround and timely dispatch, every time.",
            },
            {
              title: "Industry Experience",
              icon: "🔧",
              desc: "Over a decade of serving manufacturing, restaurants, HVAC, and more.",
            },
            {
              title: "Eco-Friendly Options",
              icon: "🌱",
              desc: "We offer sustainable and efficient ventilation choices for a greener tomorrow.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm shadow hover:shadow-blue-500/10 transition"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center py-10 space-y-7">
        <p className="md:text-xl px-16">
          Explore our range of solutions and find the right product to boost the
          effectiveness of your projects.
        </p>
        <Link href="/products">
          <button className="px-4 py-3 md:px-6 md:py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
            See More Products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Product;
