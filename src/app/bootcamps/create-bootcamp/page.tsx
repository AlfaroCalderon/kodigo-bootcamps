'use client'
import { BootcampsForm } from "@/app/components"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const page = () => {
   const queryClient = new QueryClient(); 

  return (
    <QueryClientProvider client={queryClient}>
    <BootcampsForm />
    </QueryClientProvider>
  )
}

export default page