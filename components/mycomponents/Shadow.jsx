import React from 'react'

export const Shadow = ({top=0,right=0,bottom=0,left=100}) => {
  return (
    <>
    
    <div className={`h-[300px] w-[300px] filter-10 bg-pink-400 absolute top-[${top}%] left-[${left}%] -z-10`}></div>
    <div className={`h-[200px] w-[200px] filter-10 bg-yellow-400 absolute bottom-[${bottom}%] right-[${right}%] -z-10`}></div>
    
    </>
  )
}
