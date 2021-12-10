import React from 'react'
import Image from 'next/image'

function GridPics() {
    return (
        <div className=''>
         <div className='row'>
            <div className='col'>
            <Image
                src= "/sky.jpg"
                width="400"
                height="400"
            />
            </div>
            <div className='col'>
            <h1>Prices</h1>
            <p>We have discounted rates for community projects. Contact us to see if you qualify.</p>
            <button>Learn more</button>
            </div>
            <div className='col'>
            <Image
                src= "/sky.jpg"
                width="400"
                height="400"
            />
            </div>
            <div className='col'>
            <h1>Rooms</h1>
            <p>We have a 3 large halls and two meeting rooms as well as onsite parking.</p>
            <button>Learn more</button>
            </div>
        </div>
            
        </div>
    )
}

export default GridPics
