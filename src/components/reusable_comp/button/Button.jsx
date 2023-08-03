import Link from 'next/link'
import React from 'react'

function Button({url,text}) {
  return (
    <Link href={url}>
      <button  className='bg-green-700 w-[30%] h-[30px] text-slate-300 ml-3 rounded-sm'>{text}</button>
    </Link>
  )
}

export default Button
