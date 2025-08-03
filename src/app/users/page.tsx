'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UsersForm, UsersTable } from "../components";

const page = () => {
   const queryClient = new QueryClient(); 
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <UsersForm /> 
    <UsersTable />
    </QueryClientProvider>
    </>
  )
}

export default page;
