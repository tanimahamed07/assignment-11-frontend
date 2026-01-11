import React from "react";
import { motion } from "framer-motion";
import {
  FaHistory,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaHandHoldingHeart,
  FaRocket, // ইম্পোর্ট করা হলো
} from "react-icons/fa";

const AboutUs = () => {
  const teamCardInfo = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      img: "https://i.pravatar.cc/300?img=11",
    },
    {
      name: "Sarah Williams",
      role: "Head of Finance",
      img: "https://i.pravatar.cc/300?img=5",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      img: "https://i.pravatar.cc/300?img=3",
    },
  ];

  const values = [
    {
      title: "Transparency",
      desc: "No hidden charges, just pure trust.",
      icon: <FaShieldAlt />,
      color: "from-amber-500 to-orange-500", // কালার যোগ করা হয়েছে
    },
    {
      title: "Accessibility",
      desc: "Loans for everyone, everywhere.",
      icon: <FaHandHoldingHeart />,
      color: "from-orange-500 to-amber-600",
    },
    {
      title: "Innovation",
      desc: "Tech-driven fast approval system.",
      icon: <FaChartLine />,
      color: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <div className="bg-transparent text-base-content min-h-screen transition-colors duration-500 pb-20 overflow-hidden">
      {/* --- Section 1: About Hero --- */}
      <section className="relative py-12">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-gray-900 dark:text-white"
          >
            Empowering Your{" "}
            <span className="text-amber-500">Financial Journey</span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-amber-500 mx-auto rounded-full mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            At <span className="text-amber-500 font-bold">LoanLink</span>, we
            believe that small financial boosts can lead to big life changes.
            Since 2024, we've been dedicated to simplifying microloans.
          </motion.p>
        </div>
      </section>

      {/* --- Section 2: Our Story & Mission --- */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Side */}
            <motion.div
              className="lg:w-1/2 relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 rounded-[2.5rem] blur-2xl group-hover:opacity-100 transition duration-700 opacity-50"></div>
              <div className="relative overflow-hidden rounded-[2rem] border-4 border-white dark:border-neutral-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1632&q=80"
                  alt="Our Team Working"
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-700"
                />
              </div>
              
              {/* Floating Badge (FaRocket Error fixed here) */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-xl border border-amber-100 dark:border-neutral-800 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-500 p-3 rounded-xl text-white">
                    <FaRocket className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-gray-900 dark:text-white">
                      100%
                    </p>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter">
                      Digital Process
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaHistory className="text-amber-500 text-2xl" />
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
                  Our <span className="text-amber-500">Story</span>
                </h2>
              </div>
              <div className="h-1.5 bg-amber-500 w-20 rounded-full mb-8" />

              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-medium text-lg">
                Traditional banking is often too slow for modern needs. LoanLink
                was born out of a desire to provide
                <span className="text-gray-900 dark:text-white font-bold italic">
                  {" "} instant, secure, and transparent {" "}
                </span>
                microloans to small businesses and individuals across the globe.
              </p>

              {/* Values List */}
              <div className="space-y-6">
                {values.map((val, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white dark:hover:bg-neutral-900 transition-colors duration-300 border border-transparent hover:border-amber-100 dark:hover:border-neutral-800 shadow-sm hover:shadow-md"
                    whileHover={{ x: 10 }}
                  >
                    <div
                      className={`p-3 bg-gradient-to-br ${val.color} rounded-xl text-white text-xl shadow-lg`}
                    >
                      {val.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                        {val.title}
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400">
                        {val.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Meet The Visionaries --- */}
      <section className="">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-2">
              <FaUsers className="text-amber-500 text-3xl" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
                Meet The <span className="text-amber-500">Visionaries</span>
              </h2>
            </div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              className="h-1.5 bg-amber-500 mx-auto rounded-full mt-2"
            />
            <p className="mt-6 text-gray-600 dark:text-gray-400 font-medium">
              The experts working tirelessly to make micro-financing accessible
              for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {teamCardInfo.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/80 dark:bg-neutral-900/80 rounded-3xl p-8 text-center border border-gray-100 dark:border-neutral-800 shadow-xl backdrop-blur-md hover:border-amber-500/50 transition-all duration-500"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-amber-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-neutral-800 shadow-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-amber-400 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs mb-6">
                  {member.role}
                </p>

                <div className="absolute bottom-6 right-6 w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)] opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;