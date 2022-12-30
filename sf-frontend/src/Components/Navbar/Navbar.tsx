import React from 'react'
import Button from '../Button/Button'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h2>STREAMIFI</h2>
      <div className={styles.box}>
        <a href="/">About Us</a>
        <a href="/">Settings</a>
        <Button/>
      </div>
    </div>
  )
}

export default Navbar
