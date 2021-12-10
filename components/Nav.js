import React from 'react'
import Link from 'next/link'
import Head from 'next/dist/shared/lib/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


function Nav() {
    return (
    <div>
  

<ul  className="nav justify-content-center m-1 p-1 col-12 pe-auto ">
<li className="nav-item">
  <Link  href="/">
    <a  className="nav-link fw-bold m-2 p-1  pe-auto text-secondary">Home</a>
    </Link>
  </li>
  <li className="nav-item">
  <Link  href="/">
    <a  className="nav-link fw-bold m-2 p-1  pe-auto text-secondary">About</a>
    </Link>
  </li>
  
  <li className="nav-item">
    <Link href="/"> 
    <a className="nav-link fw-bold m-2 p-1   text-secondary">Bookings</a>
    </Link>
  </li>
  
  <li className="nav-item">
  <Link href="/"> 
    <a className="nav-link fw-bold m-2 p-1 text-secondary" >Community</a>
  </Link>
  </li>
  <li className="nav-item">
  <Link href="/"> 
    <a className="nav-link fw-bold m-2 p-1  text-secondary">Spaces</a>
    </Link>
 </li>
 <li className="nav-item">
  <Link href="/"> 
    <a className="nav-link fw-bold m-2 p-1  text-secondary">Extras</a>
    </Link>
 </li>
 <li className="nav-item">
  <Link href="/"> 
    <a className="nav-link fw-bold m-2 p-1  text-secondary">Contact</a>
    </Link>
 </li>
</ul>


</div>
    )
}

export default Nav