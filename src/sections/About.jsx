import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const icons = ["🎧", "🎵", "🎶", "🎤", "🎚️", "🎛️"];

const getRandomPosition = () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
});

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const [positions, setPositions] = useState(icons.map(() => getRandomPosition()));

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(icons.map(() => getRandomPosition()));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden px-6 py-28 bg-[#0D0F1B]">
      {/* Floating Icons */}
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl md:text-6xl text-purple-500 select-none"
          style={{ top: positions[index].top, left: positions[index].left }}
          animate={{
            y: ["0%", "-20%", "0%"],
            opacity: [0.2, 0.6, 0.2],
            top: positions[index].top,
            left: positions[index].left,
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            top: { duration: 3, ease: "easeInOut" },
            left: { duration: 3, ease: "easeInOut" },
            delay: index * 0.1,
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-gray-300">
        <motion.h2
          className="text-5xl font-extrabold mb-6 text-purple-400 drop-shadow-lg"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          What is <span className="text-white">COMPANY_NAME</span>?
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed px-2 md:px-10 max-w-xl mx-auto"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Imagine a place where you can <span className="text-white font-semibold">chat, vibe, listen</span>, and build community — all through the power of sound. Think of it as a next-level digital sound studio, focused on immersive audio and community.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
