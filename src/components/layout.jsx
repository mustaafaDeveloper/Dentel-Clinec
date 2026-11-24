import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className='w-full min-h-screen'>
        <aside className='w-2/10 h-screen  bg-blue-900'>

        </aside>
        <section className='w-8/10 min-h-screen bg-orange-200'>
          {Outlet}
        </section>
    </main>
  )
}

export default Layout