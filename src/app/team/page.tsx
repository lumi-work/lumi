import React from "react";
import TeamCard from "@/components/landing/TeamCard";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="h-auto">
      <div className="absolute inset-0 -z-1 h-[80vh] w-full mx-auto bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="flex justify-center ">
          <div className="w-[1200px]">
            <div className="flex items-center justify-center relative z-0">
              <div className="w-64 h-32 blur-[200px] bg-[#4B4EE7] absolute "></div>
            </div>
            <Header />
            <div className="w-[1200px]">
              <h1 className="text-center text-[50px] font-semibold mt-20">Team</h1>
              <p className="text-center text-xl mt-2 text-gray-500">
                Hello, welcome to our team. We are best app and web developer. <br />U can join our team. We are friendly. Join our community
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20">
                <TeamCard username="@chefHarun" color="#FF0000" rolename="Web Developer" image="/profile1.png" />
                <TeamCard username="@berke" color="#1B00A9" rolename="Mobile Developer" image="/profile2.png" />
                <TeamCard username="@eylül" color="#FFCD1B" rolename="UI/UX Designer" image="/profile3.png" />
                <TeamCard username="@yağmur" color="#8276FF" rolename="Bug Tester" image="/profile4.png" />
                <TeamCard username="@alpDevs" color="#51CBDC" rolename="Data Analyst" image="/profile5.png" />
                <TeamCard username="@doğa" color="#FF8ABB" rolename="Devops Engineer" image="/profile6.png" />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
