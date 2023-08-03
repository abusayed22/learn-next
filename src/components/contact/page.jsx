import Image from 'next/image'
import React from 'react'
import contactImg from '../../../public/contact.png'
import styles from './styles.module.css'

function Contact() {
  return (
    <div className='p-5 w-[90%] mx-auto h-[80vh]'>
      <div className='flex justify-between'>
        <div className='w-[50%]'>
        <Image className={styles.contact_img} src={contactImg} alt='lsdhf'/>
        </div>
        <div className='w-[50%]'>
            <form className='flex flex-col gap-3'>
            <input placeholder='Name' type="text" className='p-3 border-solid border-2 w-[80%] h-8 focus-none' />
            <input placeholder='Email' type="email"  className='p-3 border-solid border-2 w-[80%] h-8 focus-none'  />
            <textarea placeholder='Text...' name="" id="" cols="30" rows="10" className='p-3 border-solid border-2 w-[80%] h-64 focus-none'  />
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
