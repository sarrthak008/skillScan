'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SpeechRecognition ,{useSpeechRecognition}  from 'react-speech-recognition'
import Dictaphone from './Mic'
import Mic from './Mic'



const SmallLoader = () => {
  return (
    <div className='border-3  border-t-gray-400 border-gray-700 border-solid h-[14px] w-[14px] rounded-full animate-spin'></div>
  )
}

const Modal = ({ title = 'checking details', setIsModelOpen ,interviewPerparationTopic}) => {

  const handelModelClose = () => {
    setIsModelOpen(false)
  }

  const [isconnectToDB, setisConnectTODB] = useState(false)
  const [microPhoneIsavaliable, setMicrophoneIsAvaliable] = useState(false)
  const [isquestionGanarated,setIsquestionGanarated] = useState(false)
    // const [ganratedQuestions,setGanratedQuestions] = useState('')

  const connectToTheServer = async () => {

    try {

      const result = await axios.get('/api/')
      if (result.data.success) {
        setisConnectTODB(true)
      }

    } catch (error) {
      console.log(error)
    }
  }


  const genarateInterViewQuestions = async () => {
     try {
         let respoce = await axios.post('/api/ai/ganaratedata',{
            topic:interviewPerparationTopic,
            level:'easy'
         })
         if(respoce.data.success){
            setIsquestionGanarated(true)
            localStorage.setItem('questions',JSON.stringify(respoce.data.data))
         }
         
     } catch (error) {
         console.log(error)
     }
  }


  useEffect(() => {
    connectToTheServer()
    genarateInterViewQuestions()
  }, [])



  return (
    <div className='h-full w-full flex items-center justify-center backdrop-blur-md bg-black/50 fixed top-0 left-0'>
      <div className='w-[50%] h-[50vh] bg-gray-900 rounded-md text-white p-4 shadow-2xl shadow-gray-900'>
        <div className='text-gray-200 text-xl'>{title} .</div>
        <div className='ml-7 mt-7 text-gray-400 flex flex-col gap-4'>

          <div className='flex gap-2 items-center text-[15px] h-[19px]'>Trying To Connnect Server {isconnectToDB ? <span className='text-green-500 text-xl'>✓</span>: <SmallLoader/>}</div>

          <div className='flex gap-2 items-center text-[15px] h-[19px]'>Genarate Questions {isquestionGanarated ? <span className='text-green-500 text-xl'>✓</span> : <SmallLoader />}</div>

          <div className='flex gap-2 items-center text-[15px] h-[19px]'>Acessing MicroPhone {microPhoneIsavaliable ? <span className='text-green-500 text-xl'>✓</span> : <SmallLoader />}</div>

          <div className='flex gap-2 items-center text-[15px] h-[19px]'>Loading UI <SmallLoader /></div>

        </div>

      
        <div className='flex items-center justify-end text-gray-300 gap-6 mt-12 mr-10'>
          <button className='border-1 cursor-pointer border-gray-400 py-1 px-5 rounded-md' onClick={() => { handelModelClose() }}>Close</button>
          <button className='border-1 cursor-pointer border-gray-400 py-1 px-5 rounded-md bg-gray-500 text-gray-900'>Start</button>
        </div>
      </div>
      <div className='hidden'>
        <Mic setMicrophoneIsAvaliables={setMicrophoneIsAvaliable}/>
      </div>
    </div>
  )
}

export default Modal