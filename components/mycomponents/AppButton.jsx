import React from 'react'

const AppButton = ({title="default title"}) => {
    const BUTTON_VERIANT ={
        default:'bg-yellow-400',
        error:'bg-red-400',
        success:'bg-green-400'

    }
  return (
        <button className={`${BUTTON_VERIANT.default} cursor-pointer py-1.5 px-8 rounded-md text-black text-xl hover:bg-amber-500`}>{title}</button>
  )
}

export default AppButton