'use client'

import { Rusuario } from '@/app/components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const page = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='max-w-3xl mx-auto p-6'>
        <Rusuario />
      </div>
    </QueryClientProvider>
  )
}

export default page