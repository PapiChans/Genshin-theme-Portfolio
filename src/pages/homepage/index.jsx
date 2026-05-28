import { useEffect, useState } from 'react'
import "../../assets/css/homepage.css"
import InternetLoader from "../../components/loaders/internet-loader"

// Components
import Navbar from "../../components/homepage/navbar"
import HomepageTitle from "../../components/homepage/title"
import MediaShowcase from "../../components/homepage/media_showcase"
import Regions from "../../components/homepage/regions"
import Footer from "../../components/homepage/footer"

const HomepageIndex = () => {

  const [fadeOut, setFadeOut] = useState(false)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1500)

    // This Removes the Loader after fade
    const removeTimer = setTimeout(() => {
      setShowLoader(false)
    }, 2000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }

  }, [])

  return (
    <>
      {showLoader && <InternetLoader fadeOut={fadeOut}/>}
      <Navbar/>
      <HomepageTitle/>
      <MediaShowcase/>
      <Regions/>
      <Footer/>
    </>
  );
}

export default HomepageIndex
