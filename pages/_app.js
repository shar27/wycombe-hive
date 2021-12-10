import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
  import("bootstrap/dist/css/bootstrap.css");
  }, [])
  
  return <Component {...pageProps} />
}

export default MyApp
