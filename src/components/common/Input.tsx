import React from "react";
import { FiSearch } from "react-icons/fi";

function Input() {
  return (
    <div className="w-full">
      <div className="relative flex items-center w-full">
        <FiSearch className="absolute left-3 text-gray-500" />
        <input type="text" className="w-full border border-gray-300 bg-gray-100 shadow rounded-md px-10 py-1 focus:outline-[#4B4EE7]" placeholder="Search" />
      </div>
    </div>
  );
}

export default Input;
