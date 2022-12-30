import React from 'react'
import styles from './LandingPage.module.css'
import img from './assets/Other 07.svg'
import Handle from '../Handle/Handle'

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>
          The Web3 <br />
          OTT <br />
          Platform
        </div>
        <p>Pay for what you watch</p>
        <Handle nameOfHandle='CONTINUE WITH EMAIL'/>
        <Handle nameOfHandle='CONNECT WITH WALLET'/>
      </div>
      <div className={styles.img}>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default LandingPage
