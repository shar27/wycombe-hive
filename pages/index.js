import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Bg from '../components/Bg'
import BgTwo from '../components/BgTwo'
import Banner from '../components/Banner'
import Pics from '../components/Pics'
import BannerTwo from '../components/BannerTwo'
import GridPics from '../components/GridPics'
import Extra from '../components/Extra'
import ExtraBullets from '../components/ExtraBullets'

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
      <Pics/>
      <BannerTwo/>
      <GridPics/>
      <Extra/>
      <ExtraBullets/>
    </div>
  )
}
