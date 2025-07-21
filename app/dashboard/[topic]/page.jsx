'use client'

import Loader from '@/components/mycomponents/Loader'
import Mic from '@/components/mycomponents/Mic'
import axios from 'axios'
import { set } from 'mongoose'
import React, { useEffect, useState } from 'react'
import { use } from 'react'

const Page = ({ params }) => {

  let { topic } = use(params)
  const [allquestions, setAllquestions] = useState([])
  const [questionNumber, setQuestionNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [ansersAiResponse,setAnswersAiResponse] = useState()
  const [submissionStatus,setSubmissionStatus] = useState()

  const loadQuestionFromLocalStorage = () => {
    try {

      let result = localStorage.getItem('questions')
      let firstparse = JSON.parse(result)
      const data = JSON.parse(firstparse)
      if (data) {
        setAllquestions(data)
      }
      //console.log(data)//
    } catch (error) {

      console.log(error)

    }
  }


  const handelNextQuestion = () => {
    try {
      let user_answers = JSON.parse(localStorage.getItem('user_answers')) || []

      user_answers.push({
        AI_QUESTION: allquestions[questionNumber]?.question,
        USER_ANSWER: userAnswer,
       EXPECTED_ANSWER: allquestions[questionNumber]?.expectedAnswer
      })

      localStorage.setItem('user_answers', JSON.stringify(user_answers))

      setUserAnswer('')
      if (allquestions.length > questionNumber) {
        setQuestionNumber(questionNumber + 1)
      }


    } catch (error) {

      console.log(error)
    }
  }

  const submitQuestion = async () => {
      try {
         let userSubmissiondata = JSON.parse(localStorage.getItem('user_answers'))

         if(!userSubmissiondata){
            setAnswersAiResponse("something went wrong...")
         }

        const response = await axios.post("/api/ai/checkdata",{
           usersubmission : userSubmissiondata,
           roundType : topic
        })

        setAnswersAiResponse(JSON.parse(response.data.data))

      } catch (error) {
        console.log(error)
      }
  }

  useEffect(() => {
    loadQuestionFromLocalStorage()
     if(localStorage.getItem('user_answers')){
      localStorage.removeItem('user_answers')
     }
  }, [])

  return (
    <div className='h-screen w-screen text-white relative'>

      <div>
        <span>note : dont change or reload the screen/page.if stop writing mic on again</span>
      </div>

      {
        allquestions.length < questionNumber + 1 ? null :
          <div className='w-full px-5 min-h-10 mt-9  flex justify-between items-center relative'>
            <div className='w-[80%] text-2xl'>{questionNumber + 1} ) {allquestions[questionNumber]?.question}</div>
          </div>
      }

      <div className='w-full mt-9 text-gray-300 px-5 text-xl'>
        {
          allquestions.length < questionNumber + 1 ?

            <div className='h-[500px] w-[90%] bg-gray-950 mx-auto rounded-md flex justify-center items-center text-center relative'>
              <span>please submit your interview </span>
              <div className='h-[300px] w-[300px] filter-10 bg-pink-400 absolute top-[20%] left-[30%] z-0'></div>
              <div className='h-[200px] w-[200px] filter-10 bg-yellow-400 absolute bottom-[10%] right-[10%] z-0'></div>
            </div>

            :
            <p>{userAnswer} <span><i className="ri-mic-fill animate-pulse"></i></span></p>
        }
      </div>


      {

        allquestions.length < questionNumber + 1 ? null :
          <div className='fixed bottom-20 flex items-center justify-center w-full'>
            <Mic setUserAnswer={setUserAnswer} />
          </div>

      }


      <div className='absolute right-0 top-0 mt-4 flex gap-8'>
        {
          allquestions.length < questionNumber + 1 ?

            <button className='text-xl border-[0.4px] border-gray-500 px-8 rounded-md bg-yellow-400 cursor-pointer' onClick={() => submitQuestion()}>submit</button>
            :
            <button className='text-xl border-[0.4px] border-gray-500 px-8 rounded-md bg-yellow-400 cursor-pointer' onClick={() => { handelNextQuestion() }}>next</button>
        }
      </div>

    </div>
  )
}

export default Page