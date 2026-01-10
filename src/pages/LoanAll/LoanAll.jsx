import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { motion } from "framer-motion";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import LoanCard from "../../components/Shared/LoanCard/LoanCard";

const LoanAll = () => {
  const { data: allLoans = [], isLoading } = useQuery({
    queryKey: ["all-loans"],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/loans`);
      return result.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  // Container: handles stagger
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Faster stagger
        delayChildren: 0.05, // Reduced delay
      },
    },
  };

  // Cards Animation: Optimized fade-up
  const cardVariants = {
    hidden: { opacity: 0, y: 30 }, // Reduced lift (y)
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" }, // Faster, smoother duration and ease
    },
  };

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 dark:text-white"
          >
            All Available <span className="text-amber-500">Loans</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-amber-500 mx-auto rounded-full mt-4 mb-6"
          />

          {/* ডেসক্রিপশন এনিমেশন */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-200 font-medium leading-relaxed"
          >
            Explore our all microloan options tailored to your business and
            personal needs. Simple application, instant approval.
          </motion.p>
        </div>

        {/* Loans Grid - Optimized for ONE-TIME Scroll Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // *** THE KEY FIX IS HERE ***
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 px-5 sm:px-0"
        >
          {allLoans.map((loan) => (
            <motion.div
              key={loan._id}
              variants={cardVariants}
              className="w-full"
              // *** Removed viewport prop from here as it's redundant and conflicting ***
            >
              <LoanCard loan={loan} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LoanAll;
