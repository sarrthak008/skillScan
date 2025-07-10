
const AppRadio = ({title="default title",name,onchange}) => {
  return (
      <div className='flex items-center gap-2 text-xl mt-2 text-gray-500'>
        <label className='cursor-pointer ' htmlFor={title.split(' ').join('_')}>{title}</label>
        <input type='radio' name={name} className='h-[16px] w-[16px] cursor-pointer' id={title.split(' ').join('_')} onChange={()=>{onchange(title)}}/>
    </div>
  )
}

export default AppRadio