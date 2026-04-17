import "../../assets/css/homepage.css"
import InternetLoader from "../../components/loaders/internet-loader"

// Components
import Navbar from "../../components/homepage/navbar"

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const HomepageIndex = () => {
  return (
    <>
      <Navbar/>
      <div className="homepage-content">
        <div className="homepage-display">
          <h1 className="homepage-title">WORLD OF TEYVAT</h1>
          <div className="homepage-line"></div>
          <h1 className="homepage-subtitle">EXPLORE TO BEGIN</h1>

          <div className="homepage-server-box">
            <div className="homepage-server-box-border">
              <div className="homepage-text-area">
                <div className="diamond-border">
                  <FontAwesomeIcon icon={faCheck} className='diamond-check'/>
                </div>
                <p className="homepage-region-text-area">
                  Teyvat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-content">

      </div>
    </>
  )
}

export default HomepageIndex
