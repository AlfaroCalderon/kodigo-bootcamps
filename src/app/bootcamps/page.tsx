'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BootcampsDashboard } from "../components"

const page = () => {
  
  const queryClient = new QueryClient(); 

  return (
    <QueryClientProvider client={queryClient} >
    <BootcampsDashboard />
    </QueryClientProvider>
  )
}

export default page