import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

function Bg() {
    return (
        <div>
            <Image 
      className={styles.backgroundimage}
        src="/school.jpg"
        width={1500}
        height={800}
        
        
      />
    <div className={styles.centeredtwo}>
     <div className='bg-white container text-start p-4 m-2'>

        <h1 className='fw-bold text-center mb-4'>ABOUT US</h1>
        <p className='lead'>The Hive is an innovative project by WISE to set up a vibrant multi-use facility that can serve as a 
        community hub. WISE is a registered charity with an Islamic ethos, and has a reputation for providing 
        professionally run services. WISE promotes mutual understanding via community cohesion initiatives and 
        addressing common local issues.

</p>
      <p className='lead'>The Hive is another step major step in our journey. With this bold initiative, 
      we want to create a comfortable safe place for people of all ethnicities to embrace the diversity of Wycombe. 
      This ground-breaking initiative will provide a dynamic space for people to meet, regardless of faith and pave 
      the way for a more open cohesive society.



</p>
      <p className='lead'>From humble beginnings, WISE community based projects have grown rapidly over the last 
      several years. It became clear that to continue serving our community’s needs we needed to take a brave and
       significant step forward. The Hive is the realisation of that ambition. A centre based in the heart of the 
       community. Our hope is that it will be come an integral part of the lives of local residents, community groups
        and organisations.



</p>
     </div>
     </div>
        </div>
    )
}

export default Bg
