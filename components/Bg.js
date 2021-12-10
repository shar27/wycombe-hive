import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

function Bg() {
    return (
        <div>
            <Image 
      className={styles.backgroundimage}
        src="/sky.jpg"
        width={1500}
        height={800}
        
        
      />

      <h1 className={styles.centered}>Welcome</h1>
      <h2 className={styles.centeredp}>to the Hive.</h2>
      <button className={styles.bgbtn}>Book a place</button>
        </div>
    )
}

export default Bg
