import React from 'react'
import Image from 'next/image'

function Extra() {
    return (
        <div className='container '>
            <h1 className='text-center display-3 '>Extras</h1>
            <div className='row mt-5 d-flex justify-content-center'>
            
                <div className='col-2 ms-4'>
                <Image
                width={50}
                height={50}
                    src="/computer.png"
                />
                <span>Online booking</span>
                </div>
                <div className='col-2 ms-4'>
                <Image
                width={50}
                height={50}
                    src="/email.png"
                />
                <span>Email support</span>
                </div>
                <div className='col-2 ms-4'>
                
                <Image
                width={50}
                height={50}
                    src="/wifi.png"
                />
                <span>Wifi throughout</span>
                
                </div>
                <div className='col-2 ms-4'>
                <Image
                width={50}
                height={50}
                    src="/tools.png"
                />
                <span>Fully maintained and cleaned</span>
                </div>
            </div>
        </div>
    )
}

export default Extra
