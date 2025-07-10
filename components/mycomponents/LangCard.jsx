'use client'
import Image from 'next/image'
import React from 'react'
import LOGO from '@/app/assets/py.svg'
import AppButton from './AppButton'



const LangCard = ({lang_name ="loading",image=LOGO,setIsModelOpen,setInterviewPerparationTopic}) => {

const handelModel = ()=>{
  setInterviewPerparationTopic(lang_name)
  setIsModelOpen(true)
}


  return (
    <div className='border-0 border-gray-100 lang-card h-[300px] shadow-sm shadow-gray-700 w-[200px] lang-card-shadow cursor-pointer bg-gray-900 rounded-xl overflow-hidden p-2 relative'>
      <div className='absolute h-full w-full flex items-start justify-center'>
         <img src={image.src} className='h-[100px] lang-img transition-all mt-[50px]'/>
      </div>
      <div className='absolute top-0 left-0 h-full w-full overlay flex gap-5 pb-10 pl-6 justify-end flex-col'>
          <h2 className='text-3xl capitalize font-medium text-gray-400'>{lang_name.toLocaleLowerCase()}</h2>
          <div>
             <button className='lang-card-button transition-colors text-gray-500' onClick={()=>{handelModel()}}>Start Prepartion</button>
          </div>
      </div>
    </div>
  )
}

export default LangCard