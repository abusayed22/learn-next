"use client"
import React, { useContext } from 'react'
import styles from './styles.module.css'
import { ThemeContext } from '../../../context/ThemeContext'

function DarkModeToggled() {
    
    const {toggled,mode} = useContext(ThemeContext);
  return (
    <div onClick={toggled} className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      {/* <div className={styles.ball} style={mode === "dark" ? {left:"2px"} : {right:"2px"}} /> */}
      <div className={styles.ball} style= {mode==="dark"?{left:"2px"}:{right:"2px"}}/>
    </div>
  )
}

export default DarkModeToggled
