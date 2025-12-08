import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content py-20 transition-colors duration-500 relative overflow-hidden">
      {/* Background Decor Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 "></div>
      <div className="absolute bottom-0 left-0 w-64 h-64"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Get in <span className="text-amber-500">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions about your loan? Need help with the application? Our
            support team is here to help you 24/7.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:items-start max-w-6xl mx-auto">
          {/* --- Left Side: Contact Info Cards --- */}
          <div className="lg:w-5/12 space-y-8">
            {/* Info Card 1 */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-amber-400/20 shadow-lg dark:shadow-[0_0_15px_rgba(251,191,36,0.1)]">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  Call Us
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  +880 1234 567 890
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  +880 9876 543 210
                </p>
              </div>
            </div>

            {/* Info Card 2 */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-amber-400/20 shadow-lg dark:shadow-[0_0_15px_rgba(251,191,36,0.1)]">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  Email Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  support@loanlink.com
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  info@loanlink.com
                </p>
              </div>
            </div>

            {/* Info Card 3 */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-amber-400/20 shadow-lg dark:shadow-[0_0_15px_rgba(251,191,36,0.1)]">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  Visit Us
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  123 Financial District,
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* --- Right Side: Contact Form --- */}
          <div className="lg:w-7/12">
            <div className="bg-white dark:bg-neutral-900 p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-amber-400/20 shadow-2xl dark:shadow-[0_0_20px_rgba(251,191,36,0.15)]">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Send a Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label text-gray-600 dark:text-gray-300 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="input input-bordered w-full bg-gray-50 dark:bg-neutral-800 border-gray-300 dark:border-neutral-700 focus:border-amber-500 focus:outline-none dark:text-white"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label text-gray-600 dark:text-gray-300 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="input input-bordered w-full bg-gray-50 dark:bg-neutral-800 border-gray-300 dark:border-neutral-700 focus:border-amber-500 focus:outline-none dark:text-white"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label text-gray-600 dark:text-gray-300 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Loan Inquiry"
                    className="input input-bordered w-full bg-gray-50 dark:bg-neutral-800 border-gray-300 dark:border-neutral-700 focus:border-amber-500 focus:outline-none dark:text-white"
                  />
                </div>

                <div className="form-control flex gap-12">
                  <label className="label text-gray-600 dark:text-gray-300 font-medium">
                    Message
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-32 bg-gray-50 dark:bg-neutral-800 border-gray-300 dark:border-neutral-700 focus:border-amber-500 focus:outline-none dark:text-white"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button className="w-full btn border-none bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-amber-500/30">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ContactUs;
