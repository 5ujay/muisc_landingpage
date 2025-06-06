import React from "react";
import { motion } from "framer-motion";
import music from "../videos/music-bg.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[0.5]"
      >
        <source src={music} type="video/mp4" />
      </video>

      {/* ✨ Foreground Content */}
      <div className="relative z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md mb-4"
        >
          🎧 Drop In. Vibe Out. 🎶
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
        >
          Your digital sound studio. Create rooms. Listen together. Share the vibe. 🎼✨
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg text-lg transition-all duration-300 cursor-pointer"
        >
          Join Now
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
