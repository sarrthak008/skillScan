'use client'
import React, { useEffect } from 'react'
import { toast } from 'sonner'

const page = () => {

    useEffect(()=>{
        toast.success("hello")
    },[])

  return (
    <div className='text-white'>
        <div className='h-24 flex items-center'>
             <div className='h-[4px] w-[40%] bg-gradient-to-r flex items-center justify-center to-black from-orange-400'>
                <span className='bg-black px-8 py-2 shadow-fuchsia-400 shadow-2xl fliter-10 rounded-4xl text-xl'>welcome, <span className='text-orange-400'>sarthak </span></span>
             </div>
        </div>
    </div>
  )
}

export default page