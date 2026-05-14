import "../../assets/css/homepage.css"
import InternetLoader from "../../components/loaders/internet-loader"

// Components
import Navbar from "../../components/homepage/navbar"
import HomepageTitle from "../../components/homepage/title"
import Media_showcase from "../../components/homepage/media_showcase"
import Regions from "../../components/homepage/regions"

const HomepageIndex = () => {
  return (
    <>
      <Navbar/>
      <HomepageTitle/>
      <Media_showcase/>
      <Regions/>
    </>
  )
}

export default HomepageIndex
