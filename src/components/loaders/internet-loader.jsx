import '../../assets/css/internet-loader.css'

const InternetLoader = ({ fadeOut }) => {
  return (
    <>
      <div className={`internet-loader-background ${fadeOut ? "fade-out" : ""}`}>
        <div className="internet-loader-box">
            <span className="internet-loader-spinner"></span>
        </div>
      </div>
    </>
  )
}

export default InternetLoader