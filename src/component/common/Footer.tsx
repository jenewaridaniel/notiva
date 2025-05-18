import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gradient-to-r from-blue-100 to-indigo-100 py-8 px-4 border-t border-blue-200"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Playful emoji animation */}
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="text-4xl"
          >
            📚✨
          </motion.div>

          {/* Playful text */}
          <motion.p
            className="text-center text-gray-600 font-medium"
            whileHover={{ scale: 1.02 }}
          >
            Made with <span className="text-pink-500">♥</span> for students
            who'd rather be napping
          </motion.p>

          {/* Micro-interaction button */}
          <motion.button
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm border border-blue-200"
          >
            <span className="opacity-70">👋</span> Wave goodbye
          </motion.button>
        </div>

        {/* Tiny copyright that appears on hover */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0.3 }}
          whileHover={{ opacity: 1 }}
        >
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} StudySmart | No textbooks were harmed
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
