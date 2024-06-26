import Image from "next/image";
import { Inter } from "next/font/google";
import TopBar from "@/components/TopBar";
import OnBoarding from "@/components/OnBoarding";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <TopBar />
      <OnBoarding/>
    </main>
  );
}
