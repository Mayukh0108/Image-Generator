import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center rounded-2xl text-center my-20 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 py-24 px-4 relative overflow-hidden"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Background Blurred Circles for Depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-900 rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gray-800 rounded-full opacity-20 blur-3xl animate-float-delay"></div>
      </div>

      {/* Tagline Section */}
      <motion.div
        className="text-stone-200 inline-flex text-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10 shadow-sm mb-8"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        <p className="typewriter flex items-center gap-1">
          <p>AI-Powered Creativity</p>
          <img src={assets.star_icon} alt="" className="h-4" />
        </p>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-5xl sm:text-7xl font-bold max-w-[800px] mx-auto text-white"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        Turn{" "}
        <motion.span
          className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Text
        </motion.span>{" "}
        into{" "}
        <motion.span
          className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Art
        </motion.span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-center max-w-2xl mx-auto mt-6 text-stone-300 text-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Create stunning, high-quality images from simple text prompts using the
        power of AI.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        onClick={onClickHandler}
        className="text-lg text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 w-auto mt-10 px-14 py-4 flex items-center gap-3 rounded-full hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="relative z-10">Start Creating Now</span>
        <img className="h-6 relative z-10" src={assets.star_group} alt="" />
        {/* Button Hover Effect */}
        <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </motion.button>

      {/* Image Gallery Section */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-20 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        {Array(6)
          .fill("")
          .map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.1, duration: 0.8 }}
            >
              <img
                src={
                  index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1
                }
                alt=""
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">AI Generated</p>
              </div>
            </motion.div>
          ))}
      </motion.div>

      {/* Footer Note */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="mt-10 text-yellow-400 text-2xl italic font-mono font-bold animate-bounce"
      >
        Powered by GenImg AI
      </motion.p>
    </motion.div>
  );
};

export default Header;
