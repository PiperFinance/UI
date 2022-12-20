import Flex from "@ui/Flex/Flex";
import React from "react";

const Skeleton = () => {
  return (
    <div role="status" className="my-4 w-full animate-pulse">
      <div className="h-14 rounded-xl border border-gray-700 bg-gray-122 bg-gray-200 p-4 text-gray-300 dark:bg-gray-700"></div>
    </div>
  );
};

const ReceiveAmountSkeleton = () => {
  return (
    <div role="status" className="my-4 w-full animate-pulse">
      <div className="h-8 w-2/3 rounded-xl border border-gray-700 bg-gray-122 bg-gray-200 p-4 text-gray-300 dark:bg-gray-700"></div>
    </div>
  );
};

const CurrencyInputPanelSkeleton = () => {
  return (
    <div role="status" className="w-full animate-pulse">
      <div className="my-2 h-32 rounded-xl border border-gray-700 bg-gray-122 bg-gray-200 p-4 text-gray-300 dark:bg-gray-700"></div>
    </div>
  );
};

const TableRowSkeleton = () => {
  return (
    <div className="flex h-fit justify-between">
      <div role="status" className="w-16 animate-pulse">
        <div className="my-2 h-16 rounded-full border border-gray-700 bg-gray-122 bg-gray-200 p-4 text-gray-300 dark:bg-gray-700"></div>
      </div>
      <div role="status" className="w-[95%] animate-pulse">
        <div className="my-2 h-16 rounded-xl border border-gray-700 bg-gray-122 bg-gray-200 p-4 text-gray-300 dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

export {
  Skeleton,
  ReceiveAmountSkeleton,
  CurrencyInputPanelSkeleton,
  TableRowSkeleton,
};
