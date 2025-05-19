import { motion } from "framer-motion";
import study from "../../assets/study.svg";
import HeroSection from "../landing/HeroSection";
import AboutSection from "../landing/AboutSection";
import Header from "../common/Header";
import RotatingText from "../common/RotatingText";
import student from "../../assets/student.svg";
import Footer from "../common/Footer";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "backOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Back to top button logic
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Built for students who{" "}
              <motion.span
                className="text-blue-600"
                animate={{
                  color: ["#3b82f6", "#2563eb", "#1d4ed8"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                hate wasting time
              </motion.span>{" "}
              on textbooks.
            </h1>

            <p className="text-md sm:text-xl text-gray-700 mb-8">
              Smart summaries that condense 100-page textbooks into quick,
              2-minute study guides — helping you study faster and smarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="/upload">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 sm:px-8 w-full sm:py-4 bg-gray-800 text-white font-medium sm:font-semibold rounded-xl shadow-lg transition"
                >
                  Start Summarizing Now
                </motion.button>
              </a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-200 sm:px-8 sm:py-4 border-none text-blue-600 font-medium sm:font-semibold rounded-xl transition"
              >
                See Example
              </motion.button>
            </div>

            <div className="mt-10 flex items-center gap-4 flex-wrap">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((item) => (
                  <motion.img
                    key={item}
                    src={`https://randomuser.me/api/portraits/${
                      item % 2 === 0 ? "women" : "men"
                    }/${item}.jpg`}
                    alt="User"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: item * 0.15 }}
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Loved by <span className="font-bold text-gray-800">100+</span>{" "}
                students worldwide
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <img
                src={study}
                alt="Student studying"
                className="rounded-3xl w-full max-w-[550px] mx-auto"
              />
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -bottom-6 -right-6 bg-white px-5 py-3 rounded-xl shadow-lg border border-gray-200"
              >
                <div className="text-blue-600 font-bold text-base sm:text-lg">
                  📚 2 min read
                </div>
                <div className="text-gray-500 text-xs sm:text-sm">
                  vs 3 hours normally
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Sections */}
      <HeroSection />
      <AboutSection />

      {/* Smart Reading Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <motion.div
          variants={imageVariants}
          className="flex justify-center mb-8"
        >
          <motion.img
            src={student}
            alt="Student reading"
            className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        <motion.div variants={textVariants} className="flex justify-center">
          <motion.p
            className="text-center text-xl md:text-2xl font-medium text-gray-800 max-w-md md:max-w-lg leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            <span className="text-blue-600 font-bold">
              Read Smart, Not Hard
            </span>{" "}
            —{" "}
            <motion.span
              className="inline-block"
              animate={{
                color: ["#4b5563", "#1e40af", "#4b5563"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Focus on What Matters.
            </motion.span>
          </motion.p>
        </motion.div>
      </motion.div>

      <RotatingText />

      <div>
        <Footer />
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 z-50"
          aria-label="Back to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
};

export default Home;
