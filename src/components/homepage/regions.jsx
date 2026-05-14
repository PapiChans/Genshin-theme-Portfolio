import React from 'react'
import { regionBackgrounds } from '../../utils/homepage/region-backgrounds'

const Regions = () => {
  return (
    <>
     <div className="region-area">
        {regionBackgrounds.map((region) => (
          <div 
          key={region.name}
          className="region-item"
          style={{ backgroundImage: `url(${region.src})`}}
          >
            <div className="region-label-area">
              <img src={region.element} alt="element" className='element' />
              <div className="region-label">{region.name}</div>
            </div>
          </div> 
        ))}
     </div> 
    </>
  )
}

export default Regions
