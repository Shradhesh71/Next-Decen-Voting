// components/Footer.tsx
"use client"


import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex justify-between items-center py-4 px-8 bg-black text-white">
            <div className="text-sm">
                © 2024
            </div>
            <div className="text-center">
                made by ❣️ with{" "}
                <Link href="/aboutme" className=" ">
                    <span className="underline cursor-pointer hover:text-red-400" style={{ textDecoration: "none" }}>Shradesh71</span>
                </Link>
            </div>
            <div>
                <Link href="https://github.com/Shradhesh71" target="_blank">
                    <FaGithub className="text-xl cursor-pointer hover:text-gray-500" />
                </Link>
            </div>
        </footer>
    );
}
