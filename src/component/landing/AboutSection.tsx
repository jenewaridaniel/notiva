import { motion } from "framer-motion";
import { FiBook, FiClock, FiTarget } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why I Built <span className="text-blue-600">Notiva</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              As a fourth-year student at the Federal University of Technology Owerri, exam season can be overwhelming. I often find myself buried under hundreds of pages of PDFs — lecture notes and textbooks — all in a race against time.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              One day I thought, “There has to be a smarter way to study.” That idea became{" "}
              <span className="font-semibold text-gray-800">Notiva</span> — a tool I built to help summarize and understand large study materials faster.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              It started as a personal project to help me survive finals. No AI. No noise. Just a clean, focused way to break down what matters most — so I could spend less time skimming and more time understanding.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="italic text-gray-700">
                "I built Notiva for students like me who are drowning in PDFs and just want a clearer path to passing exams."
              </p>
            </div>
          </motion.div>

          {/* Right Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full mt-1">
                <FiBook  />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Summarize Study Materials Quickly
                </h3>
                <p className="text-gray-600">
                  Turn long lecture notes and textbook PDFs into short, clear summaries — without losing the meaning.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full mt-1">
                <FiClock size={20} color="#2563EB" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Save Time When It Matters Most
                </h3>
                <p className="text-gray-600">
                  Whether it’s a night before the exam or a tight revision schedule, Notiva helps you focus on what matters fast.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full mt-1">
                <FiTarget size={20} color="#2563EB" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Study With Clarity
                </h3>
                <p className="text-gray-600">
                  Notiva is built for understanding — so you retain concepts better and feel more confident walking into exams.
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 px-6 py-3 bg-blue-600 border-none hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-all"
            >
              Try Notiva Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
