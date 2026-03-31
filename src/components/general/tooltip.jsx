import React from 'react'
import '../../assets/css/tooltip.css'

const Tooltip = ({children, text}) => {
  return (
    <div className='tooltip-wrapper tooltip-bottom'>
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  )
}

export default Tooltip
