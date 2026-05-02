import React from 'react'
import "../../assets/css/homepage.css"

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const HomepageTitle = () => {
  return (
    <>
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
    </>
  )
}

export default HomepageTitle
