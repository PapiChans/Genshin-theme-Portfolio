import React from 'react'
import paimonIcon from '../../assets/images/icons/Paimon Menu.webp'

//Components
import Tooltip from '../general/tooltip'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'

const navbar = () => {
  return (
    <>
        <div className="navbar-area">
            <nav className="navbar">
                <Tooltip text="Menu">
                <img src={paimonIcon} alt="paimon" className="navbar-paimon" />
                </Tooltip>
                <p className="navbar-greetings">
                    Welcome! Traveler...
                </p>
                <Tooltip text={"Developer"}>
                    <FontAwesomeIcon icon={faUserTie} className='navbar-icon'/>
                </Tooltip>
            </nav> 
        </div>
    </>
  )
}

export default navbar
