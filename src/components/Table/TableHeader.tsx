import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Container from "@ui/Container/Container";
import Image from "next/image";
import React, { useEffect } from "react";

interface ITableHeader {
  titleList: string[];
}

export default function TableHeader({ titleList }: ITableHeader) {
  return (
    <thead className="text-xs uppercase text-gray-400 dark:border-gray-500">
      <tr className="border-b py-3 dark:border-gray-500">
        {titleList.map((title: string) => (
          <th key={title} className="p-4">{title}</th>
        ))}
      </tr>
    </thead>
  );
}
