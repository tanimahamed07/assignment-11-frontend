import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// Counter Component logic remains same
const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, ""); 
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const stats = [
  { label: "Active Loans", value: "10K+" },
  { label: "Trusted Partners", value: "250+" },
  { label: "Success Rate", value: "99%" },
  { label: "Fast Approval", value: "24h" },
];

export const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent transition-colors duration-300 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* --- Header Section (Matched Style) --- */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 dark:text-white"
          >
            Our Impact in <span className="text-amber-500">Numbers</span>
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
            We take pride in our growth and the trust our users place in us every day.
          </motion.p>
        </div>

        {/* --- Stats Grid (Matched Theme) --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div
                className="
                  relative px-4 py-10 rounded-2xl 
                  bg-white/90 dark:bg-neutral-900/90 
                  border border-gray-200 dark:border-amber-400/30 
                  shadow-lg dark:shadow-[0_0_10px_rgba(251,191,36,0.15)] 
                  backdrop-blur-xl
                  hover:scale-[1.04] hover:shadow-2xl 
                  dark:hover:shadow-[0_0_18px_rgba(251,191,36,0.25)]
                  transition-all duration-300 text-center
                  overflow-hidden
                "
              >
                <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-amber-300 mb-2">
                    <Counter value={stat.value} />
                  </h3>
                  
                  <p className="text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {stat.label}
                  </p>
                </div>

                {/* Theme Dot */}
                <div className="absolute bottom-4 right-4 w-2.5 h-2.5 bg-amber-400 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};