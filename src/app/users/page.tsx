'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UsersForm, UsersTable } from "../components";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

const Page = () => {
   const queryClient = new QueryClient(); 
   
   const router = useRouter();
      const [loading, setLoading] = useState(true);
       
         useEffect(() => {
           const checkAuth = async () => {
             const supabase = createClient();
             const { data: { user } } = await supabase.auth.getUser();
             if (!user) {
               router.replace("/");
             } else {
               setLoading(false);
             }
           };
           checkAuth();
         }, [router]);
         
       
         if (loading) {
           return <div className="flex justify-center items-center h-screen">Loading...</div>;
         }

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <UsersForm /> 
    <UsersTable />
    </QueryClientProvider>
    </>
  )
}

export default Page;
