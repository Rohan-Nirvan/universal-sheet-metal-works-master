"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="h-screen relative mb-20">
      {/* For  Desktop */}
      <div className="py-22 overflow-hidden hidden lg:block">
        {/* Background Image */}
        <div className="hero-img absolute top-15 inset-0 h-1/2 left-20 right-20"></div>

        {/* Title */}
        <div className="absolute flex justify-between -bottom-0 p-4 w-full h-1/3">
          <div className="w-1/2 text-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-extrabold mb-4 drop-shadow-lg space-y-2"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl tracking-wider text-cyan-700">
                UNIVERSAL
              </h1>
              <span className="text-2xl tracking-widest text-sky-900 xl:text-3xl">
                SHEET METAL WORKS
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-base xl:text-lg text-stone-600 mb-4 max-w-xl mx-auto"
            >
              All type of sheet metal & fabrication specialist in hotel kitchen
              chimney A/C duct & ventilation dusting
            </motion.p>
          </div>
          {/* Description */}
          <div className="w-1/2 space-y-3 hidden lg:block">
            <h2 className="text-xl text-gray-700 font-bold underline">
              SHEET METAL FORMING
            </h2>
            <p className="text-sm xl:text-base text-gray-600 tracking-widest">
              Founded in 2006 by the late{" "}
              <span className="text-red-900 font-semibold">
                Narsinghbhai Chauhan
              </span>
              , What started as a small manufacturing unit has grown into a
              well-known provider of ducting solutions. Over the years, we’ve
              expanded our product range, adopted modern technology, and built a
              team of skilled professionals who are dedicated to excellence.
            </p>
            <p className="text-sm xl:text-base text-gray-600 text-justify tracking-widest">
              <span className="text-red-900 font-semibold">
                Universal Sheet Metal Works
              </span>{" "}
              is your go-to partner for both custom and large projects,
              providing reliable solutions for industries like HVAC,
              construction, and others.
            </p>
          </div>
        </div>
      </div>

      {/* For Tablet and mobile  */}
      <div className="lg:hidden min-h-screen w-full mt-43 sm:mt-11">
        <div>
          <img
            src="/images/hero-img-mobile.jpeg"
            alt=""
            className="h-60 sm:h-100 w-full object-cover"
          />
        </div>
        {/* Title and description */}
        <div className="p-4 text-center w-full mx-auto my-6">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-bold mb-4 drop-shadow-lg space-y-2"
          >
            <h1 className="text-4xl text-cyan-700 sm:text-5xl md:text-5xl">
              UNIVERSAL
            </h1>
            <span className="text-2xl tracking-wider text-sky-900 sm:text-3xl md:text-3xl">
              SHEET METAL WORKS
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-stone-600 text-sm sm:text-lg md:text-xl mb-6 max-w-md md:max-w-xl mx-auto"
          >
            All type of sheet metal & fabrication specialist in hotel kitchen
            chimney A/C duct & ventilation dusting
          </motion.p>
          {/* Description */}
          <div className="space-y-5 text-start px-5">
            <h2 className="text-xl text-gray-700 font-bold underline">
              SHEET METAL FORMING
            </h2>
            <p className="text-sm sm:text-base text-justify text-gray-600 tracking-widest">
              Founded in 2006 by the late{" "}
              <span className="text-red-900 font-semibold">
                Narsinghbhai Chauhan
              </span>
              , What started as a small manufacturing unit has grown into a
              well-known provider of ducting solutions. Over the years, we’ve
              expanded our product range, adopted modern technology, and built a
              team of skilled professionals who are dedicated to excellence.
            </p>
            <p className="text-sm xl:text-base text-justify text-gray-600 tracking-widest">
              <span className="text-red-900 font-semibold">
                Universal Sheet Metal Works
              </span>{" "}
              is your go-to partner for both custom and large projects,
              providing reliable solutions for industries like HVAC,
              construction, and others.
            </p>
          </div>
        </div>
      </div>
      {/* Social side button */}
      <div className="z-11 fixed left-0 top-70">
        <div className="flex flex-col space-y-2">
          <a
            href="https://www.facebook.com/share/18cMEuBUaq/?mibextid=wwXIfr"
            className="text-white bg-[#1877F2] text-2xl px-1 py-1 transition duration-300 hover:scale-110"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.youtube.com/@universalsheetmetalworks"
            className="text-white bg-[#FF0000] text-2xl px-1 py-1 transition duration-300 hover:scale-110"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/chauhan-jayanti-narsinhbhai-ducting-manufacturer-b6521564?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            className="text-white bg-[#0077B5] text-2xl px-1 py-1 transition duration-300 hover:scale-110"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://g.co/kgs/fXJJk6Y"
            className="text-white bg-[#4285F4] text-2xl px-1 py-1 transition duration-300 hover:scale-110"
          >
            <i className="fab fa-google"></i>
          </a>
          <a
            href="https://www.instagram.com/universal_sheet_metal_works?igsh=Z25rcWcyYW0zZ2k2"
            className="text-white bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-2xl px-1 py-1 transition duration-300 hover:scale-110"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
