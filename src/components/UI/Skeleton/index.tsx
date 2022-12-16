import React from "react";

const Skeleton = () => {
  return (
    <div role="status" className="w-full animate-pulse my-4">
      <div className="bg-gray-122 rounded-xl p-4 h-14 text-gray-300 border border-gray-700 bg-gray-200 dark:bg-gray-700"></div>
    </div>
  );
};

const ReceiveAmountSkeleton = () => {
  return (
    <div role="status" className="w-full animate-pulse my-4">
      <div className="bg-gray-122 rounded-xl p-4 w-2/3 h-8 text-gray-300 border border-gray-700 bg-gray-200 dark:bg-gray-700"></div>
    </div>
  );
};


const CurrencyInputPanelSkeleton = () => {
  return (
    <div role="status" className="w-full animate-pulse">
      <div className="bg-gray-122 rounded-xl p-4 my-2 h-32 text-gray-300 border border-gray-700 bg-gray-200 dark:bg-gray-700"></div>
    </div>
  );
};

export  {Skeleton,ReceiveAmountSkeleton,CurrencyInputPanelSkeleton};



