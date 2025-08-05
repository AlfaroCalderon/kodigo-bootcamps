'use client'
import { Cursos } from '@/app/components';
import { createClient } from "@/utils/supabase/client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

const queryClient = new QueryClient()

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
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className='min-h-screen w-[80%] mx-auto bg-gradient-to-br from-gray-50 to-blue-50 p-6'>
        <Cursos />
      </div>
    </QueryClientProvider>
  )
}

export default Page