import Image from 'next/image'
import React from 'react'
import hero from '../../../../public/hero.png'
import styles from './styles.module.css'
import Button from '@/components/reusable_comp/button/Button'

function Hero() {
  return (
    <div className='mx-auto w-[80%] h-[80vh] bg-slate-300 dark:bg-slate-950 flex justify-center items-center'>
      <div className='w-[50%]'>
        <h1 className={styles.content} >Better design for your digital products.</h1>
        <p className='w-[60%] p-3 ml2 text-md text-stone-700 dark:text-slate-300'>Lorem ipsum adipisicing elit. Laboriosam nobis corporis similique esse fugit aliquam nesciunt! Consequatur, assumenda!</p>
        <Button url='/' text={'see more..'} />
      </div>
      <div className='w-[30%] '>
        <Image className={styles.contact_img} src={hero} alt='hero' />
      </div>
    </div>
  )
}

export default Hero
