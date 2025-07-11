'use client'

import Loader from '@/components/mycomponents/Loader'
import Mic from '@/components/mycomponents/Mic'
import React, { useEffect, useState } from 'react'
import { use } from 'react'

const page = ({ params }) => {

  let { topic } = use(params)
  const [allquestions, setAllquestions] = useState([])
  const [questionNumber, setQuestionNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')

  const loadQuestionFromLocalStorage = () => {
    try {

      let result = localStorage.getItem('questions')
      let firstparse = JSON.parse(result)
      const data = JSON.parse(firstparse)
      if (data) {
        setAllquestions(data)
      }
      console.log(data)
    } catch (error) {

      console.log(error)

    }
  }

  const handelNextQuestion = () => {
    setQuestionNumber(questionNumber + 1)
  }

  useEffect(() => {
    loadQuestionFromLocalStorage()
  }, [])

  return (
    <div className='h-screen w-screen text-white relative'>
      <div>
        <span>note : dont change or reload the screen/page.if stop writing mic on again</span>
      </div>

      <div className='w-full px-5 min-h-10 mt-9  flex justify-between items-center relative'>
        <div className='w-[80%] text-2xl'>{allquestions[questionNumber]?.question}</div>
      </div>

      <div className='w-full mt-9 text-gray-300 px-5'>
        <p>{userAnswer}</p>
      </div>





      <div className='fixed bottom-20 flex items-center justify-center w-full'>
        <Mic setUserAnswer={setUserAnswer} />
      </div>

    
        <div className='absolute right-0 top-0 mt-4 flex gap-8'>
          <button className='text-xl border-[0.4px] border-gray-500 px-8 rounded-md bg-yellow-400 cursor-pointer'>skip</button>
          <button className='text-xl border-[0.4px] border-gray-500 px-8 rounded-md bg-pink-400 cursor-pointer' onClick={() => { handelNextQuestion() }}>next</button>
        </div>
  
    </div>
  )
}

export default page