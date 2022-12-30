import React from 'react'
import styles from './Home.module.css';
import LandingPage from '../../Components/LandingPage/LandingPage'
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <LandingPage/>
    </div>
  )
}

export default Home
