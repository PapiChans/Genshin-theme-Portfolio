import whiteAnemo from '../../assets/images/elements/white/anemo_white.png'

const GameLoader = () => {

  const hour = new Date().getHours();

  // The Light theme is between 6 AM to 5 PM
  const theme = 
    hour >= 6 && hour < 18 ? "light" : "dark";

  return (
    <>
    <div className={`game-loader-background ${theme}`}>
      <div className="game-loader-icon-placement">
        <img className={`game-loader-icon ${theme}`} src={whiteAnemo} alt="Element Logo" />
      </div>
      <div className="game-loader-text-placement">
        <p className={`game-loader-title ${theme}`}>Paimon</p>
        <p className={`game-loader-text ${theme}`}>The best travel companion ever.</p>
      </div>
      <div className="game-loader-loading-placement">
        <span className={`game-loader-loading-line ${theme}`}></span>
        <div className="game-loader-loading-area">

        </div>
        <span className={`game-loader-loading-line ${theme}`}></span>
      </div>
    </div> 
    </>
  )
}

export default GameLoader;
