import React from 'react'
import ROBO from "@/app/assets/robo.png"
import Image from 'next/image'


const Hero = () => {
  return (
    <>
    <div className='min-h-[80vh] z-10 overflow-x-hidden w-screen flex relative items-center justify-center flex-col text-white'>
         <div className='h-[300px] w-[600px] animate-up-down'>
          <img src={ROBO.src}  className='drop-shadow-black h-full w-full object-contain' alt='MAIN_ROBO_IMAGE skillscan main image'/>
         </div>
         <div className='text-7xl font-extrabold text-card text-gray-300'>Your Personal <span className='text-yellow-500'>AI Interview</span> Coach</div>
         <div className='text-2xl text-gray-400 font-light tracking-wide mt-2'>Analyze. Improve. Succeed. </div>
    </div>
    <div className='h-[300px] w-[300px] filter-10 bg-pink-400 absolute top-[20%] left-[30%] z-0'></div>
    <div className='h-[200px] w-[200px] filter-10 bg-yellow-400 absolute bottom-[10%] right-[10%] z-0'></div>
    </>
  )
}

export default Hero