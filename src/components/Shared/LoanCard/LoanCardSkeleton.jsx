import React from "react";

const LoanCardSkeleton = () => {
  return (
    <div
      className="
        card h-full flex flex-col rounded-2xl overflow-hidden
        bg-white dark:bg-neutral-900/90
        border border-gray-200 dark:border-amber-400/30
        shadow-xl animate-pulse
      "
    >
      {/* Image Skeleton */}
      <div className="h-52 w-full bg-gray-300 dark:bg-neutral-700" />

      {/* Body Skeleton */}
      <div className="card-body p-6 flex flex-col flex-grow space-y-4">
        
        {/* Title */}
        <div className="h-6 w-3/4 bg-gray-300 dark:bg-neutral-700 rounded-md" />

        {/* Category */}
        <div className="h-4 w-1/2 bg-gray-200 dark:bg-neutral-700 rounded-md" />

        {/* Interest */}
        <div className="h-4 w-2/3 bg-gray-200 dark:bg-neutral-700 rounded-md" />

        {/* Max Limit */}
        <div className="h-4 w-1/2 bg-gray-200 dark:bg-neutral-700 rounded-md" />

        {/* Button Skeleton */}
        <div className="mt-auto">
          <div className="h-12 w-full bg-amber-300/60 dark:bg-amber-400/30 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default LoanCardSkeleton;
