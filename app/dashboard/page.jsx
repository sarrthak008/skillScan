'use client'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import LangCard from '@/components/mycomponents/LangCard'
import LOGO from '@/app/assets/py.svg'
import Loader from '@/components/mycomponents/Loader'
import Modal from '@/components/mycomponents/CheckCredentialsModal'

const page = () => {

  const [points, setPoints] = useState([]);

  const loadDataLocalStorage = () => {
    try {
      if (JSON.parse(localStorage.getItem('points'))) {
        setPoints(JSON.parse(localStorage.getItem('points')));
      } else {
        setPoints([]);
      }
    } catch (error) {
      console.error(`your browser not support local storage or ${error}`);

    }
  }

  const [isModelOpen,setIsModelOpen] = useState(false)
  const [interviewPerparationTopic,setInterviewPerparationTopic] = useState()


  useEffect(() => {
    loadDataLocalStorage();
  }, [])


  return (
    <div className='w-screen h-screen sm:px-4 px-0 relative'>
      <div className='text-white'>
        <div className='h-24 flex items-center'>
          <div className='h-[4px] w-[40%] bg-gradient-to-r flex items-center justify-center to-black from-orange-400'>
            <span className='bg-black px-8 py-2 shadow-fuchsia-400 shadow-2xl fliter-10 rounded-4xl text-xl'>welcome, <span className='text-orange-400'>sarthak </span></span>
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='text-2xl text-gray-500 ml-12'>Programing Languages Interview Preparation .</h3>
          <div className='flex flex-wrap gap-14 items-center mt-10  justify-evenly'>
            {
              points.length === 0 ?
                <div><Loader /></div> :
                points.map((point, index) => {
                  return (<LangCard key={index} lang_name={point.language_name} image={point.language_image ? point.language_image
                    : LOGO}  setIsModelOpen={setIsModelOpen} setInterviewPerparationTopic={setInterviewPerparationTopic}/>)
                })
            }
          </div>
        </div>
      </div>
     {isModelOpen ? <Modal setIsModelOpen={setIsModelOpen} interviewPerparationTopic={interviewPerparationTopic}/> :  null}
    </div>
  )
}

export default page