"use client";

import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import ThemeSelection from "./ThemeSelection";
import { createClient } from "@/utils/client";
import { useRouter } from "next/navigation";

function Settings({ username, useremail }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [err, setErr] = useState("");

  const supabase = createClient();
  const router = useRouter();

  async function handleLogout() {
    try {
      const { error } = await supabase.auth.signOut();
      router.push("/sign-in");

      if (error) throw error;
    } catch (error: any) {
      setErr(error.message || "Something went wrong while logging out.");
    }
  }

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal} className="hover:cursor-pointer">
        <IoMdSettings className="text-[19px] text-gray-600 cursor-pointer hover:opacity-80" />
      </button>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen} size="lg">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Settings</ModalHeader>
            <ModalBody>
              <div className="text-gray-700">Personal Details</div>
              <div className="flex items-center justify-start mt-2 gap-6">
                <div className="w-24 h-24 rounded-full bg-blue-500 text-white flex items-center justify-center text-[32px]">{username.slice(0, 2).toUpperCase()}</div>
                <div className="pt-4 flex-col flex items-start justify-center">
                  <h2 className="font-medium">Username</h2>
                  <p className="text-gray-600">@{username}</p>
                  <h2 className="font-medium">Email</h2>
                  <p className="text-gray-600">{useremail}</p>
                </div>
              </div>
              <div className="text-gray-700 mt-4">
                Interface theme<div className="text-gray-500 text-[14px]">Customise you application theme</div>
              </div>
              <div className="flex items-center justify-center pt-4 gap-8">
                <ThemeSelection />
              </div>
              <div className="mt-4 mb-5">
                {err && <div className="text-red-500">{err}</div>}
                <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-1.5 rounded-lg text-sm hover:px-5 transition-all">
                  Logout
                </button>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Settings;
