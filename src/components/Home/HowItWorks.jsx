import { FaFileAlt, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaFileAlt className="w-12 h-12 text-yellow-500" />,
    title: "Submit Application",
    description:
      "Fill out a simple loan application with your personal and financial details. Takes less than 2 minutes.",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="w-12 h-12 text-amber-500" />,
    title: "Get Verified",
    description:
      "Our team quickly verifies your information to ensure smooth and fast approval.",
  },
  {
    id: 3,
    icon: <FaMoneyBillWave className="w-12 h-12 text-orange-500" />,
    title: "Receive Funds",
    description:
      "Once approved, the loan amount is transferred instantly to your account.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-base-100 text-base-content">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-gray-100">
          How It Works
        </h2>
        <p className="text-base mt-2 dark:text-gray-300">
          A simple 3-step process to get your microloan quickly
        </p>
      </div>

      <div className="container mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl p-8 text-center transition-transform duration-300 hover:scale-105"
          >
            {/* Icon */}
            <div className="flex justify-center mb-5">{step.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
              {step.description}
            </p>

            {/* Decorative Dot (to match feedback-card style corner icon) */}
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-gray-300 rounded-full dark:bg-gray-600"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
