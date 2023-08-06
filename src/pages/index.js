import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import { getAllAccount, getSelectedAccount } from '@/api/services'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main
      className={`flex min-h-screen flex-col max-w-2xl m-auto items-center pt-24 p-4 ${inter.className}`}
    >
      <div className='flex flex-col items-center gap-2 w-full mb-12'>
        <h3 className='text-2xl font-bold'>Name</h3>
        <p className='text-lg'>Description</p>
      </div>
      <div className='flex flex-col items-center gap-8 w-full'>
        <div className='h-full w-full bg-gray-400 rounded-[24px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 hover:scale-105 transition-all cursor-pointer '>
          <p>hello world</p>
        </div>
        <div className='h-full w-full bg-gray-400 rounded-[24px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 hover:scale-105 transition-all cursor-pointer '>
          <p>hello world</p>
        </div>
        <div className='h-full w-full bg-gray-400 rounded-[24px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 hover:scale-105 transition-all cursor-pointer '>
          <p>hello world</p>
        </div>
        <div className='h-full w-full bg-gray-400 rounded-[24px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 hover:scale-105 transition-all cursor-pointer '>
          <p>hello world</p>
        </div>
        <div className='h-full w-full bg-gray-400 rounded-[24px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 hover:scale-105 transition-all cursor-pointer '>
          <p>hello world</p>
        </div>
      </div>
    </main>
  )
}
