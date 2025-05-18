import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

const texts = ["Harder", "Smarter"];

const RotatingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center py-24 h-12 text-3xl md:text-4xl lg:text-5xl font-bold">
      <span className="mr-2">Read</span>

      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="text-gray-50 tracking-wide rounded-md bg-blue-600 p-3 px-6"
        >
          {texts[index]}
        </motion.span>

      </AnimatePresence>
       
    </div>
  );
};

export default RotatingText;
