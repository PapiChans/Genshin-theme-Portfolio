import React from 'react'

const Media_showcase = () => {
  return (
    <>
      <div className="homepage-media-showcase">
        <p className="showcase-title">Experience the World of Teyvat</p>
        <div className="media-line-area">
            <div className="media-line"></div>
        </div>
        <div className="media-area">
            <div className="media-area-half">
                <iframe 
                frameBorder="0"
                allowFullScreen 
                src="https://www.youtube.com/embed/lMdsrZ1otlA"
                title="Genshin Impact Announcement Trailer: The Outlander Who Caught The Wind"
                referrerPolicy="strict-origin-when-cross-origin"
                />
            </div>
            <div className="media-area-half">
                <iframe 
                frameBorder="0"
                allowFullScreen 
                src="https://www.youtube.com/embed/TAlKhARUcoY"
                title="Teyvat Chapter Storyline Preview: Travail｜Genshin Impact (Contains spoilers)"
                referrerPolicy="strict-origin-when-cross-origin"
                />
            </div>
        </div>
      </div>
    </>
  )
}

export default Media_showcase
