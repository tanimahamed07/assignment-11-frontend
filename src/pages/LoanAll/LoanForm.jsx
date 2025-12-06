import React from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

const LoanForm = () => {
  const { id } = useParams();
  const { user } = useAuth();

  // Fetch loan details from backend
  const { data: loan = {}, isLoading } = useQuery({
    queryKey: ["loan-details", id],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/loan-details/${id}`
      );
      return res.data;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (isLoading) {
    return <p className="text-center">Loading loan info...</p>;
  }

  const onSubmit = async (data) => {
    const applicationData = {
      loanId: loan._id,
      loanTitle: loan.title,
      interestRate: loan.interestRate,

      userEmail: user?.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      nidOrPassport: data.nidOrPassport,
      incomeSource: data.incomeSource,
      monthlyIncome: data.monthlyIncome,
      loanAmount: data.loanAmount,
      reason: data.reason,
      address: data.address,
      notes: data.notes,

      status: "Pending",
      applicationFeeStatus: "Unpaid",

      createdAt: new Date().toISOString(),
      approvedAt: "",
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/loan/application`,
        applicationData
      );

      if (res.data.success) {
        toast.success("Loan Application Submitted!");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Failed to submit application");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-3xl p-8 bg-white rounded-2xl shadow-xl relative z-10">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">
          Loan Application Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-gray-700">
          {/* Auto Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={user?.email}
              readOnly
              className="w-full px-4 py-2 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-gray-300"
            />
          </div>

          {/* Loan Title */}
          <div>
            <label className="block mb-1 font-medium">Loan Title</label>
            <input
              type="text"
              value={loan.title}
              readOnly
              className="w-full px-4 py-2 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-gray-300"
            />
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block mb-1 font-medium">Interest Rate (%)</label>
            <input
              type="text"
              value={loan.interestRate}
              readOnly
              className="w-full px-4 py-2 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-gray-300"
            />
          </div>

          {/* First Name */}
          <div>
            <label className="block mb-1 font-medium">First Name</label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className="w-full px-4 py-2 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-gray-300"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-1 font-medium">Last Name</label>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className="w-full px-4 py-2 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-gray-300"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="text"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full px-4 py-2 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-gray-300"
            />
          </div>

          {/* NID / Passport */}
          <div>
            <label className="block mb-1 font-medium">NID / Passport</label>
            <input
              type="text"
              {...register("nidOrPassport", {
                required: "NID or Passport is required",
              })}
              className="w-full px-4 py-2 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-gray-300"
            />
          </div>

          {/* Income Source */}
          <div>
            <label className="block mb-1 font-medium">Income Source</label>
            <input
              type="text"
              {...register("incomeSource", {
                required: "Income source is required",
              })}
              className="w-full px-4 py-2 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-gray-300"
            />
          </div>

          {/* Monthly Income */}
          <div>
            <label className="block mb-1 font-medium">Monthly Income</label>
            <input
              type="number"
              {...register("monthlyIncome", {
                required: "Monthly income is required",
              })}
              className="w-full px-4 py-2 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-gray-300"
            />
          </div>

          {/* Loan Amount */}
          <div>
            <label className="block mb-1 font-medium">Loan Amount</label>
            <input
              type="number"
              {...register("loanAmount", {
                required: "Loan amount is required",
              })}
              className="w-full px-4 py-2 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-gray-300"
            />
          </div>

          {/* Reason */}
          <div>
            <label className="block mb-1 font-medium">Reason</label>
            <textarea
              {...register("reason", { required: "Reason is required" })}
              className="w-full px-4 py-2 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-gray-300"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 font-medium">Address</label>
            <textarea
              {...register("address", { required: "Address is required" })}
              className="w-full px-4 py-2 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-gray-300"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block mb-1 font-medium">Notes (Optional)</label>
            <textarea
              {...register("notes")}
              className="w-full px-4 py-2 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-gray-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-xl hover:from-yellow-500 hover:to-orange-500 shadow-lg transition-all duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanForm;
