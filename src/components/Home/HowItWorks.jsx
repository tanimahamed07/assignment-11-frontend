import { FaFileAlt, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";


const steps = [
  {
    id: 1,
    // Icon color updated for better contrast in both modes
    icon: (
      <FaFileAlt className="w-12 h-12 text-amber-500 dark:text-amber-400" />
    ),
    title: "Submit Application",
    description:
      "Fill out a simple loan application with your personal and financial details. Takes less than 2 minutes.",
  },
  {
    id: 2,
    icon: (
      <FaCheckCircle className="w-12 h-12 text-amber-600 dark:text-amber-500" />
    ),
    title: "Get Verified",
    description:
      "Our team quickly verifies your information to ensure smooth and fast approval.",
  },
  {
    id: 3,
    icon: (
      <FaMoneyBillWave className="w-12 h-12 text-orange-600 dark:text-orange-500" />
    ),
    title: "Receive Funds",
    description:
      "Once approved, the loan amount is transferred instantly to your account.",
  },
];

export default function HowItWorks() {
  return (
    // Section background adjusted for dark mode
    <section className="pb-16 mt-23 text-base-content transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 dark:text-white"
        >
          How It <span className="text-amber-500">Works</span>
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
          A simple 3-step process to get your microloan quickly. Designed for
          your convenience and speed.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.id}
            // Card styling updated to match the amber theme and dark mode
            className="
              relative 
              bg-white dark:bg-neutral-900/90 
              border border-gray-200 dark:border-amber-400/30 
              shadow-lg dark:shadow-[0_0_10px_rgba(251,191,36,0.15)] 
              rounded-2xl p-8 text-center 
              hover:scale-[1.03] transition-all duration-300 
              hover:shadow-xl dark:hover:shadow-[0_0_15px_rgba(251,191,36,0.25)]
            "
          >
            {/* Icon */}
            <div className="flex justify-center mb-5">{step.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-amber-300">
              {step.title}
            </h3>

            {/* Description */}
            <p className="leading-relaxed italic text-gray-600 dark:text-gray-200">
              {step.description}
            </p>

            {/* Step Number Display (as a circle/dot) */}
            <div className="absolute top-4 right-4 w-7 h-7 bg-amber-400 dark:bg-amber-500 text-white flex items-center justify-center rounded-full text-sm font-bold shadow-md">
              {step.id}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
