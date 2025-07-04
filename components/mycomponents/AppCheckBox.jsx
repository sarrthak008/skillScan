import React from 'react'

const AppCheckBox = ({title = "default title"}) => {
  return (
    <div className='flex items-center gap-2 text-xl mt-3 text-gray-500'>
        <label className='cursor-pointer w-[100px]' htmlFor={title.split(' ').join('_')}>{title} :</label>
        <input type='checkbox' className='h-[16px] w-[16px] cursor-pointer' id={title.split(' ').join('_')}/>
    </div>
  )
}

export default AppCheckBox