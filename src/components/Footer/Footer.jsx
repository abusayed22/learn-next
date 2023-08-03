import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import one from "../../../public/1.png"
import two from "../../../public/2.png"
import theree from "../../../public/3.png"

const socials =[
  {
    id:1,
    alt: "fb",
    src: one
  },
  {
    id:2,
    alt: "fb",
    src: two
  },
  {
    id:3,
    alt: "fb",
    src: theree
  }
]

function Footer() {
  return (
    <div className='w-[100%] h-12 flex justify-around items-center bg-fuchsia-400'>
      <div className='font-mono'>@2023 reserve Abu Sayed</div>
      <div>
        <ul className='w-[140px] flex justify-around'>
          {socials.map(so => (
            <Link key={so.id} href={so.alt}>
            <Image src={so.src} width={35} height={35} alt='fb'  />
          </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
