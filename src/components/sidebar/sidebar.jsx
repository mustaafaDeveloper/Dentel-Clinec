import React from 'react'
import Topheader from './topheader'
import Mainheader from './mainheader'

const Sidebar = () => {
  return (
    <div className='relative z-30'>
      <Topheader />
      <Mainheader />
    </div>
  )
}

export default Sidebar