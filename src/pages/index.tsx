import dynamic from "next/dynamic";
import { Suspense } from "react";

const Portfolio = dynamic(() => import("@views/Portfolio"));

export default function Home() {
  return <Portfolio />;
}
