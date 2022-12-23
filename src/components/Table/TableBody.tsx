import React, { ReactNode } from "react";

interface ITableBody {
  children: ReactNode[];
}

export default function TableBody({ children }: ITableBody) {
  return <tbody>{children}</tbody>;
}
