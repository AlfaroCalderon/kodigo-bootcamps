'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { IoMdExit } from "react-icons/io";

export const Navbar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace('/'); // Redirect to login page
  };

  return (
   <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white relative">
      <div className="font-bold text-lg">Kodigo</div>
      {/* Hamburger menu for mobile */}
      <input id="navbar-toggle" type="checkbox" className="peer hidden" />
      <label
      htmlFor="navbar-toggle"
      className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
      >
      <span className="block w-6 h-0.5 bg-white mb-1"></span>
      <span className="block w-6 h-0.5 bg-white mb-1"></span>
      <span className="block w-6 h-0.5 bg-white"></span>
      </label>
      <ul
      className={`
        flex-col gap-4 absolute top-full left-0 w-full bg-gray-800 text-white p-4
        md:static md:flex md:flex-row md:gap-6 md:p-0 md:w-auto md:bg-transparent
        hidden peer-checked:flex z-10
      `}
      >
      <li className="flex items-center gap-2 py-2 md:py-0 hover:text-gray-300">
        <IoMdHome className="w-4 h-4" />
        <Link href="./bootcamps" className="block py-1 hover:text-gray-300">
        Inicio
        </Link>
      </li>
      <li className="flex items-center gap-2 py-2 md:py-0 hover:text-gray-300">
        <HiDocumentMagnifyingGlass className="w-4 h-4" />
        <Link href="./curso" className="block py-1 hover:text-gray-300">
        Cursos
        </Link>
      </li>
      <li className="flex items-center gap-2 py-2 md:py-0 hover:text-gray-300">
        <BsFillPersonPlusFill className="w-4 h-4" />
        <Link href="./rusuario" className="block py-1 hover:text-gray-300">
        Usuario
        </Link>
      </li>
      <li className="flex items-center gap-1 px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition">
        <IoMdExit className="w-4 h-4" />
        <button
        onClick={handleLogout}
        className="block py-1 hover:text-gray-300 bg-transparent border-none outline-none cursor-pointer"
        type="button"
        >
        Logout
        </button>
      </li>
      </ul>
    </nav>
  );
}