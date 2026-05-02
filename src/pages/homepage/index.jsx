import "../../assets/css/homepage.css"
import InternetLoader from "../../components/loaders/internet-loader"

// Components
import Navbar from "../../components/homepage/navbar"
import HomepageTitle from "../../components/homepage/title"
import Media_showcase from "../../components/homepage/media_showcase"

const HomepageIndex = () => {
  return (
    <>
      <Navbar/>
      <HomepageTitle/>
      <Media_showcase/>
    </>
  )
}

export default HomepageIndex
