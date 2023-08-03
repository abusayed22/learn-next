import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'
import Button from '../reusable_comp/button/Button'

function About() {
  return (
    <div className='bg-slate-300'>
      <div className='py-5'>
        <div className='w-[90%] h-[50vh] relative mx-auto'>
          <Image fill={true} className={styles.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Charity_to_Street_Arab.jpg/220px-Charity_to_Street_Arab.jpg' alt='hum' />
          <div className='absolute top-[55%] p-5 bg-lime-500/40'>
            <h1 className='text-white text-lg font-bold font-serif'>Digital service..</h1>
            <p className='font-thin text-white'>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Repellat.</p>
          </div>
        </div>
        <div className='w-[90%] mx-auto flex justify-around'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-xl font-bold '>Who Are We?</h1>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Ut itaque velit sed quis quibusdam rerum<br />  voluptates voluptatibus delectus obcaecati voluptas, eveniet quisquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. uis quibusdam rerum<br />  voluptates voluptatibus delectus </p>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-xl font-bold'>What We Do?</h1>
            <p>Lorem ipsum dolor sit amet consectetur<br />  adipisicing elit. Ut itaque velit sed quis quibusdam rerum voluptates<br />  voluptatibus delectus obcaecati voluptas, eveniet quisquam?</p>
            <ul>
              <li>-Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
              <li>-Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            </ul>
            <Button url={'/'} text={'hello'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
