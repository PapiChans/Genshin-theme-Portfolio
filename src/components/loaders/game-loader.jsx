import whiteAnemo from '../../assets/images/elements/white/anemo_white.png'
import { useLoadingText } from '../../hooks/game-loader-change-text';
import { getThemebyTime } from '../../hooks/get-theme-by-time';

const GameLoader = () => {
  const { title, text, changeLoadingText } = useLoadingText();
  const { theme } = getThemebyTime();

  return (
    <>
    <div className={`game-loader-background ${theme}`} onClick={changeLoadingText}>
      <div className="game-loader-icon-placement">
        <img className={`game-loader-icon ${theme}`} src={whiteAnemo} alt="Element Logo" />
      </div>
      <div className="game-loader-text-placement">
        <p className={`game-loader-title ${theme}`}>{title}</p>
        <p className={`game-loader-text ${theme}`}>{text}</p>
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
