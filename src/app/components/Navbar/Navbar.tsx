'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

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
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </nav>
  );
}