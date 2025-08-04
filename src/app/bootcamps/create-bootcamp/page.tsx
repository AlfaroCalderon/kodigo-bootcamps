'use client'
import { BootcampsForm } from "@/app/components"
import { createClient } from "@/utils/supabase/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

 const queryClient = new QueryClient(); 

const Page = () => {

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
    <QueryClientProvider client={queryClient}>
    <BootcampsForm />
    </QueryClientProvider>
  )
}

export default Page