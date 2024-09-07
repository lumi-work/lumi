import Footer from "@/components/landing/Footer";
import Futures from "@/components/landing/Futures";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import { Contact, Grid } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-[350vh]">
      <div className="absolute inset-0 -z-1 h-[80vh] w-full mx-auto bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="flex justify-center ">
          <div className="w-[1200px]">
            <div className="flex items-center justify-center relative z-0">
              <div className="w-64 h-32 blur-[200px] bg-[#4B4EE7] absolute "></div>
            </div>
            <Header />
            <Hero />
            <Futures />
            <Grid />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
