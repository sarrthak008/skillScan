import React from 'react'


const Loader = () => {
  return (
   <div className='h-screen w-screen flex items-center justify-center backdrop-blur-md bg-black absolute top-0 left-0 opacity-75'>
        <div className='loader'></div>
   </div>
  )
}

export default Loader