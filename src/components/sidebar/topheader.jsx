import React from 'react'
import { FaTooth } from "react-icons/fa";



const Topheader = () => {
  return (
    <div className='text-center'>
      <FaTooth className='text-6xl text-Primary-Blue mx-auto mb-2' />
        <h1 className='font-Vazirmatn-Black text-white text-xl'>کلیـنـیک دندان</h1>
        <p className='text-white font-Vazirmatn-Regular text-[10px] my-1'>مدیریت هوشمند کلینیک</p>
    </div>
  )
}

export default Topheader