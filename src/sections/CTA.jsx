import React from "react";
import { motion } from "framer-motion";

const CTA = () => (
  <section className="px-6 py-20 text-center bg-gradient-to-br from-purple-900 to-black">
    <motion.h2
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-white mb-4"
    >
      Ready to join the vibe?
    </motion.h2>
    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
      Jump into your first music room and start sharing the experience.
    </p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-xl text-lg transition duration-300 cursor-pointer"
    >
      Get Started
    </motion.button>
  </section>
);

export default CTA;
