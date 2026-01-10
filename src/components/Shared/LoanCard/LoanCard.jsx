import React from "react";
import { Link } from "react-router";

const LoanCard = ({ loan }) => {
  return (
    <div
      className="
        card 
        h-full /* কার্ডের হাইট সমান করার জন্য */
        flex flex-col /* ফ্লেক্স বক্স লেআউট */
        relative 
        bg-white dark:bg-neutral-900/90 
        border border-gray-200 dark:border-amber-400/30 
        shadow-xl dark:shadow-[0_0_15px_rgba(251,191,36,0.1)] 
        hover:scale-[1.02] hover:shadow-2xl dark:hover:shadow-[0_0_20px_rgba(251,191,36,0.25)] 
        transition-all duration-300 rounded-2xl overflow-hidden
      "
    >
      <figure className="h-52 w-full overflow-hidden shrink-0">
        <img
          src={loan.image}
          alt={loan.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </figure>

      {/* flex-grow যোগ করা হয়েছে যাতে বডি পুরো জায়গা নেয় এবং বাটন নিচে থাকে */}
      <div className="card-body p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h2 className="card-title text-2xl font-extrabold mb-2 text-gray-900 dark:text-amber-300">
            {loan.title}
          </h2>
          <p className="mb-1 text-gray-600 dark:text-gray-400">
            Category: <span className="font-medium dark:text-gray-300">{loan.category}</span>
          </p>
          <p className="mb-1 text-gray-600 dark:text-gray-400">
            Interest:{" "}
            <span className="font-semibold text-red-600 dark:text-red-400">{loan.interestRate}%</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Max Loan Limit:{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">${loan.maxLimit}</span>
          </p>
        </div>

        {/* বাটনটি এখন সবসময় কার্ডের একদম নিচে থাকবে */}
        <div className="card-actions mt-auto">
          <Link
            to={`/loan-details/${loan._id}`}
            className="
              w-full py-3 px-4 text-center 
              bg-gradient-to-r from-amber-400 to-orange-500 
              text-white dark:text-gray-900 font-bold 
              rounded-xl shadow-md 
              hover:shadow-lg hover:brightness-110 
              transition-all duration-300 ease-in-out
            "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoanCard;