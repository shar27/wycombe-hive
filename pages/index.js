import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Bg from '../components/Bg'
import BgTwo from '../components/BgTwo'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Hive</title>
        <meta name="description" content="The Hive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Nav/>
    <Bg/>
      <BgTwo/>
      <Banner/>
    </div>
  )
}
