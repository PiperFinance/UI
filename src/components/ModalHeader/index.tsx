import { XMarkIcon } from "@heroicons/react/20/solid";
import Flex from "@ui/Flex/Flex";
import React from "react";

interface IModalHeader {
  title: string;
  onClick: () => void;
}

export default function ModalHeader({ title, onClick }: IModalHeader) {
  return (
    <Flex justifyContent="between" customStyle="text-lg font-bold text-gray-50">
      <h1>{title}</h1>
      <XMarkIcon
        onClick={onClick}
        className="h-6 w-6 cursor-pointer transition hover:text-red-400"
      />
    </Flex>
  );
}
