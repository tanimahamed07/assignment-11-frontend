import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import LoanCard from "../../components/Shared/LoanCard/LoanCard";

const LoanAll = () => {
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const limit = 8;

  const { data, isLoading } = useQuery({
    queryKey: ["all-loans", search, sort, page],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/loans`,
        {
          params: { search, sort, page, limit },
        }
      );
      return data;
    },
  });
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchRef.current.value);
    setPage(1);
  };

  const loans = data?.loans || [];
  const totalPages = data?.totalPages || 1;

  if (isLoading) return <LoadingSpinner />;

  return (
    <section className="py-12 min-h-screen">
      <div className="container mx-auto px-4 mb-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.h2 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Available <span className="text-amber-500">Loans</span>
          </motion.h2>
          <div className="h-1.5 bg-amber-500 w-20 mx-auto rounded-full mb-6" />
        </div>

        {/* Filters & Search Bar */}
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl shadow-xl mb-12 border border-gray-100 dark:border-neutral-800 flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <form onSubmit={handleSearch} className="w-full lg:max-w-xs">
            <input
              type="text"
              placeholder="Search by loan title..."
              ref={searchRef}
              className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-transparent outline-none focus:border-amber-500 transition-all dark:text-white"
            />
          </form>
          {/* <input
            type="text"
            placeholder="Search by loan title..."
            className="w-full lg:max-w-xs px-5 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-transparent outline-none focus:border-amber-500 transition-all dark:text-white"
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          /> */}

          <div className="flex flex-wrap gap-4 w-full lg:w-auto">
            {/* Sort Filter */}
            <select
              className="px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-transparent outline-none focus:border-amber-500 dark:text-white cursor-pointer"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="lowToHigh">Limit: Low to High</option>
              <option value="highToLow">Limit: High to Low</option>
            </select>
          </div>
        </div>

        {/* Loans Grid */}
        {loans.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {loans.map((loan) => (
              <LoanCard key={loan._id} loan={loan} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 text-gray-500">No loans found.</div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16 gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-5 py-2 rounded-xl font-bold transition-all ${
                  page === i + 1
                    ? "bg-amber-500 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-neutral-800 dark:text-gray-400 hover:bg-amber-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LoanAll;
