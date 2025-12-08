import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-base-100 text-base-content min-h-screen transition-colors duration-500">
      {/* --- Section 1: About Hero --- */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-400/30 to-transparent blur-3xl rounded-full" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white">
            We Are <br />
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              LoanLink
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Bridging the gap between dreams and reality. We provide fast,
            secure, and transparent microloans to help you grow.
          </p>
        </div>
      </section>

      {/* --- Section 2: Our Story (Split Layout) --- */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                alt="Office Meeting"
                className="relative rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 w-full object-cover h-[400px]"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Building a Future <br /> Without Financial Barriers
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Founded in 2024, LoanLink started with a simple mission: to make
              financial support accessible to everyone, regardless of their
              background. We noticed that traditional banking systems were too
              slow for the fast-paced needs of modern life.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Today, we have served over 10,000+ customers, disbursing millions
              in microloans with a 98% satisfaction rate. Our technology-driven
              approach ensures that you get approved in minutes, not days.
            </p>

            {/* Stats within Story */}
            <div className="grid grid-cols-3 gap-4 border-t border-gray-200 dark:border-gray-700 pt-6">
              <div>
                <h3 className="text-3xl font-bold text-amber-500">10k+</h3>
                <p className="text-sm text-gray-500">Happy Users</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-amber-500">98%</h3>
                <p className="text-sm text-gray-500">Approval Rate</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-amber-500">24/7</h3>
                <p className="text-sm text-gray-500">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white dark:bg-neutral-900 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                Our{" "}
                <span className="text-amber-500 dark:text-amber-400">
                  Story
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Founded in 2024, LoanLink was born out of a simple observation:
                millions of hardworking people and small entrepreneurs are
                denied access to quick, fair credit because of outdated systems
                and lengthy paperwork.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We decided to change that. Using modern technology and a
                human-centered approach, we built a platform that approves
                microloans in minutes — not weeks — while maintaining
                transparency, security, and trust.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="LoanLink Team"
                // The styling below ensures theme consistency
                className="relative rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* --- Section 3: Meet The Team --- */}
      <section className="py-20 bg-gray-50 dark:bg-[#0d0d0d] transition-colors duration-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Meet The Visionaries
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              The experts working behind the scenes to secure your future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member Cards */}
            {[
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
            ].map((member, idx) => (
              <div
                key={idx}
                className="
                  group relative bg-white dark:bg-neutral-900 
                  rounded-2xl p-6 text-center 
                  border border-gray-200 dark:border-amber-400/20
                  shadow-lg dark:shadow-[0_0_10px_rgba(251,191,36,0.1)]
                  hover:-translate-y-2 transition-transform duration-300
                "
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-amber-100 dark:border-amber-900/50">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-amber-600 dark:text-amber-400 text-sm font-medium mb-4">
                  {member.role}
                </p>

                {/* Social Icons (Static) */}
                <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Facebook Icon */}
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-amber-500 hover:text-white cursor-pointer">
                    <i className="fa-brands fa-facebook-f text-sm"></i>
                  </div>
                  {/* LinkedIn Icon */}
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-amber-500 hover:text-white cursor-pointer">
                    <i className="fa-brands fa-linkedin-in text-sm"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
