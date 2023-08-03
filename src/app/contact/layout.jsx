import Contact from '@/components/contact/page'
import React from 'react'

function page() {
  return (
    <div className='bg-slate-300 dark:bg-slate-900'>
        <h1 className='text-center font-bold text-xl dark:text-slate-300 py-5'>Let's keep in Touch..</h1>
      <Contact />
    </div>
  )
}

export default page
