'use client'
import { Cursos } from '@/app/components/Cursos/Cursos'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const page = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='max-w-3xl mx-auto p-6'>
        <Cursos />
      </div>
    </QueryClientProvider>
  )
}

export default page