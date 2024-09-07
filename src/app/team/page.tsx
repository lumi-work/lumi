import React from "react";
import TeamCard from "@/components/landing/TeamCard";

export default function Home() {
  return (
    <main className="h-[700px] p-8">
      <h1 className="text-center text-[50px] font-semibold mt-20">Team</h1>
      <p className="text-center text-xl mt-2 text-gray-500">
        Hello, welcome to our team. We are best app and web developer. <br />U
        can join our team. We are friendly. Join our community
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20">
        <TeamCard
          username="@chefHarun"
          color="#FF0000"
          rolename="Web Developer"
          image="/profile1.png"
        />
        <TeamCard
          username="@berke"
          color="#1B00A9"
          rolename="Mobile Developer"
          image="/profile2.png"
        />
        <TeamCard
          username="@eylül"
          color="#FFCD1B"
          rolename="UI/UX Designer"
          image="/profile3.png"
        />
        <TeamCard
          username="@yağmur"
          color="#8276FF"
          rolename="Bug Tester"
          image="/profile4.png"
        />
        <TeamCard
          username="@alpDevs"
          color="#51CBDC"
          rolename="Data Analyst"
          image="/profile5.png"
        />
        <TeamCard
          username="@doğa"
          color="#FF8ABB"
          rolename="Devops Engineer"
          image="/profile6.png"
        />
      </div>
    </main>
  );
}
