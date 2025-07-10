import Loader from '@/components/mycomponents/Loader'
import React from 'react'

const page =async ({params}) => {
 
    let {topic} = await params


  return (
    <div>
        <div className='h-24 flex items-center text-white'>
             <div className='h-[4px] w-[40%] bg-gradient-to-r flex items-center justify-center to-black from-orange-400'>
                <span className='bg-black px-8 py-2 shadow-fuchsia-400 shadow-2xl fliter-10 rounded-4xl text-xl'>Preparing for,<span className='text-orange-400'> {topic}</span></span>
             </div>
             
        </div>
    </div>
  )
}

export default page