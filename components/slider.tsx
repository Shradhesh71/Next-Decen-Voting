"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Slider() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  const toggleName = isOpen ? "Open" : "❌";

  // Adjusted the position to shift the sidebar more to the left when open
  const containerClasses = `transition-all ml-28 duration-500 h-screen mt-5 fixed z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl ${
    isOpen ? "-left-80 w-50" : "left-0 w-50"
  }`;

  return (
    <div>
      <div className="w-8 h-8 ml-5 mt-5">
        {/* Button to toggle sidebar */}
        <button onClick={toggleSideBar} className="text-white">
          {toggleName}
        </button>
      </div>
      {/* Sidebar content */}
      <div className={containerClasses}>
        <ul className="p-4 mt-20 text-white">
          <li className="py-2">
            <Link href="/dashboard/main">DashBoard</Link>
          </li>
          <li className="py-2 mt-16">
            <Link href="/dashboard/candidateList">Candidate List</Link>
          </li>
          <li className="py-2 mt-16">
            <Link href="/dashboard/voterList">Voters List</Link>
          </li>
          {/* ... Add more menu items */}
        </ul>
      </div>
    </div>
  );
}
