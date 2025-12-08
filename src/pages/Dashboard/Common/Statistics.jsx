import React from "react";
import AdminStatistics from "../../../components/Dashboard/Statistics/AdminStatistics";
import useRole from "../../../hooks/useRole";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import BorrowerStatistics from "../../../components/Dashboard/Statistics/borrower";

const Statistics = () => {
  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) {
    return <div className="text-center mt-10"><LoadingSpinner></LoadingSpinner></div>;
  }

  return (
    <div>
      {role === "admin" && <AdminStatistics />}
      {role === "manager" && <AdminStatistics />}
      {role === "borrower" && <BorrowerStatistics></BorrowerStatistics>}
    </div>
  );
};

export default Statistics;



// {/* Main Profile Card */}
//       <div className="relative z-10 w-full max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl shadow-gray-200 dark:shadow-black/50 overflow-hidden border border-white/20 dark:border-gray-700 transition-all duration-300">
//         {/* Cover Section */}
//         <div className="relative h-60 md:h-72 group">
//           <img
//             alt="cover photo"
//             src={coverImg}
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//           />
//           {/* Gradient Overlay on Cover */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//         </div>

//         {/* Profile Content */}
//         <div className="relative px-6 md:px-10 pb-10">
//           {/* Profile Image & Role Badge */}
//           <div className="flex flex-col md:flex-row items-center md:items-end -mt-20 md:-mt-16 mb-6 gap-6">
//             <div className="relative">
//               <div className="w-36 h-36 md:w-40 md:h-40 rounded-full p-1 bg-white dark:bg-gray-800 shadow-lg">
//                 <img
//                   alt="profile"
//                   src={user?.photoURL}
//                   className="w-full h-full object-cover rounded-full border-4 border-amber-500/20"
//                 />
//               </div>
//               <span className="absolute bottom-2 right-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md border-2 border-white dark:border-gray-800">
//                 Customer
//               </span>
//             </div>

//             {/* Name & Basic Info (Desktop align left, Mobile center) */}
//             <div className="text-center md:text-left flex-1">
//               <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">
//                 {user?.displayName}
//               </h2>
//               <p className="text-gray-500 dark:text-gray-400 font-medium">
//                 {user?.email}
//               </p>
//             </div>
//           </div>

//           <hr className="border-gray-200 dark:border-gray-700 mb-8" />

//           {/* Details Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//             {/* User ID Box */}
//             <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/30 flex items-center gap-4">
//               <div className="p-3 bg-amber-100 dark:bg-amber-800/30 rounded-full text-amber-600 dark:text-amber-400">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   User ID
//                 </p>
//                 <p className="font-bold text-gray-800 dark:text-gray-200 break-all">
//                   {user?.uid}
//                 </p>
//               </div>
//             </div>

//             {/* Account Status Box */}
//             <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 flex items-center gap-4">
//               <div className="p-3 bg-blue-100 dark:bg-blue-800/30 rounded-full text-blue-600 dark:text-blue-400">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   Account Status
//                 </p>
//                 <p className="font-bold text-gray-800 dark:text-gray-200">
//                   Verified Active
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <button
//               className="
//                 group relative overflow-hidden 
//                 bg-gradient-to-r from-amber-500 to-orange-600 
//                 hover:from-amber-600 hover:to-orange-700
//                 text-white font-bold py-3 px-8 rounded-xl
//                 shadow-lg shadow-amber-500/30 
//                 transform transition-all duration-300 hover:-translate-y-1
//               "
//             >
//               <span className="relative z-10">Update Profile</span>
//               <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
//             </button>

//             <button
//               className="
//                 border-2 border-gray-200 dark:border-gray-600
//                 text-gray-700 dark:text-gray-300 font-semibold py-3 px-8 rounded-xl
//                 hover:bg-gray-100 dark:hover:bg-gray-700
//                 hover:border-gray-300 dark:hover:border-gray-500
//                 transition-all duration-300
//               "
//             >
//               Change Password
//             </button>
//           </div>
//         </div>
//       </div>
