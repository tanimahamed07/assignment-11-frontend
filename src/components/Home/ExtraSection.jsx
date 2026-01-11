import React from "react";
import { motion } from "framer-motion";
import { 
  FaUsers, 
  FaShieldAlt, 
  FaRocket, 
  FaBolt, 
  FaHandshake, 
  FaHeadset 
} from "react-icons/fa";

const ExtraSections = () => {
  return (
    <div className="space-y-24 transition-colors duration-300">
      
      {/* Section 1: Our Mission */}
      <section className="text-base-content pt-10">
        <div className="container mx-auto px-4">
          {/* Animated Header Section (Matched with How It Works) */}
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 dark:text-white"
            >
              Our <span className="text-amber-500">Mission</span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              className="h-1.5 bg-amber-500 mx-auto rounded-full mt-4 mb-6"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed"
            >
              Empowering individuals and businesses with fast, fair, and accessible financial tools.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Empower Borrowers",
                desc: "We aim to make microloans easily accessible for individuals and small businesses.",
                icon: <FaUsers className="text-4xl text-amber-500" />,
              },
              {
                title: "Transparent Process",
                desc: "We build trust with a clear, honest, zero-hidden-charge loan system.",
                icon: <FaShieldAlt className="text-4xl text-amber-500" />,
              },
              {
                title: "Faster Loan Approval",
                desc: "Experience seamless loan request, verification & approval in no time.",
                icon: <FaRocket className="text-4xl text-amber-500" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-2xl border border-gray-200 dark:border-amber-400/30 shadow-lg dark:shadow-[0_0_10px_rgba(251,191,36,0.15)] backdrop-blur-xl hover:scale-[1.04] hover:shadow-2xl transition-all duration-300 bg-white/90 dark:bg-neutral-900/90"
              >
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-amber-300">
                  {item.title}
                </h3>
                <p className="leading-relaxed italic text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-amber-400 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Why Choose Us */}
      <section className=" text-base-content pb-10 mb-12">
        <div className="container mx-auto px-4">
          {/* Animated Header Section (Matched) */}
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 dark:text-white"
            >
              Why <span className="text-amber-500">Choose Us</span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              className="h-1.5 bg-amber-500 mx-auto rounded-full mt-4 mb-6"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed"
            >
              Discover why thousands of people trust LoanLink for their financial needs.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Fast Approval",
                desc: "Get approved within 24 hours with efficient verification.",
                icon: <FaBolt className="text-4xl text-amber-500" />,
              },
              {
                title: "Transparent Process",
                desc: "No hidden fees. No confusion. Just complete financial clarity.",
                icon: <FaHandshake className="text-4xl text-amber-500" />,
              },
              {
                title: "Customer Support",
                desc: "We’re available 24/7 to assist you through every step.",
                icon: <FaHeadset className="text-4xl text-amber-500" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-2xl border border-amber-300/30 dark:border-amber-400/30 shadow-lg dark:shadow-[0_0_10px_rgba(251,191,36,0.15)] backdrop-blur-xl hover:scale-[1.04] hover:shadow-2xl transition-all duration-300 text-center bg-white/90 dark:bg-neutral-900/90"
              >
                <div className="flex justify-center mb-5">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-amber-300">
                  {item.title}
                </h3>
                <p className="leading-relaxed italic text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-amber-300 rounded-full shadow-md"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraSections;