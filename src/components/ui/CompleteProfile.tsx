"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

function CompleteProfile() {
  const [isCompleteOpen, setIsCompleteOpen] = useState(true);

  function handleCompleteOpen() {
    setIsCompleteOpen(false);
  }

  return (
    <AnimatePresence>
      {isCompleteOpen && (
        <motion.div className="mt-6 bg-gray-100/60 px-4 py-4 rounded-lg w-[30rem]" exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}>
          <div className="flex items-center w-full justify-between">
            <p className="text-green-500 font-medium">Complete Your Profile</p>
            <IoMdClose onClick={handleCompleteOpen} className="text-xl text-gray-600 cursor-pointer" />
          </div>
          <div>
            <ul className="text-gray-600 pt-2">
              <li className="flex items-center gap-1 text-[15.5px]">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <FaCheck className="text-white p-1 text-xl" />
                </div>{" "}
                Setup Account
              </li>
              <li className="flex items-center gap-1 text-[15.5px]">
                <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                Upload Your Photo
              </li>
              <li className="flex items-center gap-1 text-[15.5px]">
                <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                Create First Workspace
              </li>
              <li className="flex items-center gap-1 text-[15.5px]">
                <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                Invite Team Members (0/1)
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CompleteProfile;
