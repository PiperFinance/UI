import RootLayout from "@components/layout/layout";
import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("@views/Portfolio"));

export default function Home() {
  return (
    <RootLayout pageName="Portfolio">
      <Portfolio />
    </RootLayout>
  );
}
