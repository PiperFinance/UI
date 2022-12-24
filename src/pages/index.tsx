import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("@views/Portfolio"));

export default function Home() {
  return <Portfolio />;
}
