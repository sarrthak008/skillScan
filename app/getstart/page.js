import React from 'react'
import AppCheckBox from '@/components/mycomponents/AppCheckBox'
import { Button } from '@/components/ui/button'
import AppRadio from '@/components/mycomponents/AppRadio'
import AppButton from '@/components/mycomponents/AppButton'
import { Shadow } from '@/components/mycomponents/Shadow'

const page = () => {

    const FILDS = ['Html', 'css', 'JavaScript', 'Java', 'C', 'Python', 'C++', 'C#'];
    const LEVELS = ['easy', 'medium', 'hard', 'expert'];

    return (
        <>
        
        <div className='h-[140vh] w-screen text-white py-5 relative z-[20]'>
            <div className='h-[100px] flex items-center pl-10 text-gray-300'>
                <h1 className='text-4xl flex items-center gap-3 cursor-pointer
             '>Get Start <i className="ri-arrow-right-line"></i></h1>
            </div>

            <div className='w-[90vw] h-20 mx-auto'>
                <h3 className='text-2xl text-gray-400 mt- mb-5 flex-wrap'>Select Interview Points .</h3>
                <div className='text-2xl text-gray-400 mt- mb-5 flex-wrap'>
                    {
                        FILDS?.map((fild_name, index) => {
                            return (
                                <AppCheckBox title={fild_name} key={index} />
                            )
                        })
                    }

                </div>

                <div className='mt-20'>
                    <h3 className='text-2xl text-gray-400 mb-1'>Select Interview level .</h3>
                    <div className='flex gap-5'>
                        {
                            LEVELS.map((level, index) => {
                                return (
                                    <span key={index}>
                                        <AppRadio title={level} key={index} name="level" />
                                    </span>
                                )
                            })

                        }

                    </div>

                </div>

                <div className='mt-32 mb-12'>
                    <AppButton title='save & continue'/>
                </div>
            </div>
          
            <div className={`h-[200px] w-[300px] filter-20 blur-[400px] bg-pink-400 absolute top-[0%] right-0 -z-10`}></div>
            <div className={`h-[200px] w-[200px] filter-10 bg-yellow-400 absolute bottom-[0%] left-[0%] -z-10`}></div>
    
        </div>
        </>
    )
}

export default page