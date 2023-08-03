import { roboto_mono } from '@/app/font';
import Link from 'next/link'
import React from 'react';
import styles from './styles.module.css'
import DarkModeToggled from '../DarkMode/DarkModeToggled';


const link = [
    {
        id: 0,
        name: 'Home',
        herf: '/'
    }, 
    {
        id: 1,
        name: 'Blog',
        herf: '/blog/:id'
    }, {
        id: 2,
        name: 'About',
        herf: '/about'
    }, {
        id: 3,
        name: 'Contact',
        herf: '/contact'
    }, {
        id: 4,
        name: 'Dashboard',
        herf: '/dashboard'
    }
]

function Navber() {
    return (
        <div>
            <div className='w-[100%] h-[100px]'>
            <div className='p-10'>
                <ul className='flex justify-around'>
                <h1 className={roboto_mono.className } id={styles.logo}>Sayed</h1>
                <DarkModeToggled />
                    {link.map(lin => (
                        <li key={lin.id} className='text-slate-300'>
                            <Link href={lin.herf}>{lin.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Navber
