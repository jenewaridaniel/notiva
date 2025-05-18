import { motion } from "framer-motion";
import { FiUpload, FiClock, FiBookOpen } from "react-icons/fi";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const hoverEffect = {
  whileHover: {
    y: -5,
    transition: { duration: 0.2 },
  },
};

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-12"
        >
          How It <span className="text-blue-600">Works</span>
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 text-left"
        >
          {/* Step 1 */}
          <motion.div
            variants={itemVariants}
            {...hoverEffect}
            className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-100"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FiUpload size={20} color="#2563EB" />
              </div>
              <div className="text-blue-600 text-2xl font-bold">Step 1</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Upload Your PDF
            </h3>
            <p className="text-gray-600">
              Start by uploading your textbook or lecture note in PDF format.
              Make sure it's clear and readable.
            </p>
            <motion.div
              className="w-full bg-blue-200 rounded-full h-1 mt-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>

          {/* Step 2 */}
          <motion.div
            variants={itemVariants}
            {...hoverEffect}
            className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-100"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FiClock size={20} color="#2563EB" />
              </div>
              <div className="text-blue-600 text-2xl font-bold">Step 2</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Notiva Processes It
            </h3>
            <p className="text-gray-600">
              Notiva loads your document and gets it ready for summarizing. This
              takes just a few seconds.
            </p>
            <motion.div
              className="w-full bg-blue-200 rounded-full h-1 mt-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>

          {/* Step 3 */}
          <motion.div
            variants={itemVariants}
            {...hoverEffect}
            className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-100"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FiBookOpen size={20} color="#2563EB" />
              </div>
              <div className="text-blue-600 text-2xl font-bold">Step 3</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Get Your Summary
            </h3>
            <p className="text-gray-600">
              Receive a concise, well-structured summary with all the key points
              you need to know.
            </p>
            <motion.div
              className="w-full bg-blue-200 rounded-full h-1 mt-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 border-none hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all"
          >
            Try It Now - Free
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
