import React from "react";
import { motion } from "framer-motion";

const features = [
  { title: "🎧 Custom Rooms", desc: "Create private or public music rooms." },
  {
    title: "💬 Voice + Chat",
    desc: "Talk and type with your squad in real-time.",
  },
  {
    title: "🖼️ Explore",
    desc: "Expore the compnay_name where you can find you own vibe with your similar one.",
  },
  { title: "🔊 Audio Reactive UI", desc: "Watch the app react to your beats." },
];

const cardVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 20px rgba(139, 92, 246, 0.6)",
    transition: { duration: 0.3 },
  },
};

const Features = () => (
  <section className="bg-[#0D0F1B] px-6 py-20">
    <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">
      Features
    </h2>
    <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="bg-[#1C1F2E] p-8 rounded-xl shadow-md border border-purple-600 cursor-pointer"
          whileHover="hover"
          variants={cardVariants}
        >
          <h3 className="text-3xl font-semibold mb-3 text-white">
            {feature.title}
          </h3>
          <p className="text-gray-400 text-lg">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Features;
