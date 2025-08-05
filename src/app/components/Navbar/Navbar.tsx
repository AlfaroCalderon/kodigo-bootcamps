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
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      <div className="font-bold text-lg">Navbar</div>
      
      <ul className="md:flex md:gap-6 mt-4 md:mt-0">   
        <li className="flex items-center gap-2 py-2 md:py-0 hover:text-gray-300">
            <IoMdHome className="w-4 h-4"/>   
            <Link href="./bootcamps" className="block py-1 hover:text-gray-300">                           
            Inicio
            </Link>
        </li>
        <li className="flex items-center gap-2 py-2 md:py-0 hover:text-gray-300">
            <HiDocumentMagnifyingGlass  className="w-4 h-4"/>   
            <Link href="./curso" className="block py-1 hover:text-gray-300">                           
            Cursos
            </Link>
        </li>
        <li className="flex items-center gap-2 py-2 md:py-0 hover:text-gray-300">
            <BsFillPersonPlusFill  className="w-4 h-4"/>   
            <Link href="./rusuario" className="block py-1 hover:text-gray-300">                           
            Usuario
            </Link>
        </li>       
        <li 
            className="flex items-center gap-1 px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition">           
            <IoMdExit  className="w-4 h-4"/>   
            <Link 
            onClick={handleLogout}  
            href="" className="block py-1 hover:text-gray-300">                           
            Logout
            </Link>
        </li>        
      </ul>
    </nav>
  );
}