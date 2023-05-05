import RootLayout from "@components/layout/layout";
import dynamic from "next/dynamic";

const Approval = dynamic(() => import("@views/Approval"));

export default function Home() {
  return (
    <RootLayout pageName="Approval">
      <Approval />
    </RootLayout>
  );
}
