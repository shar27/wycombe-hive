import React from 'react'
import ImageGallery from 'react-image-gallery';
import styles from '../styles/Home.module.css'

function Pics() {
    const images = [
        {
          original: '/sky.jpg',
          thumbnail: '/sky.jpg',
        },
        {
          original: '/sky.jpg',
          thumbnail: '/sky.jpg',
        },
        {
          original: '/sky.jpg',
          thumbnail: '/sky.jpg',
        },
      ];
    return (
        <div>
            <div>
            <ImageGallery 
            slideDuration={850}
            autoPlay={true}
           
            items={images} />
        </div>
        <div className='bg-white'>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
        </div>

    )
}

export default Pics
