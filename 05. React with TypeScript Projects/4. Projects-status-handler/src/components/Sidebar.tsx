import React from "react";
import { FaFolder } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
const Sidebar = () => {
  return (
    <div
      className="w-16 fixed h-screen border-[#242424] p-4 flex flex-col item-center space-y-8 ">
        <div className="text-white">Logo</div>
        <div className="text-gray-400 text-lg ml-1"><FaFolder/></div>
        <div className="text-gray-400 text-2xl"><FaPerson/></div>
        <div className="text-gray-400 text-2xl"><CiSettings/></div>
    </div>
  );
};

export default Sidebar;
