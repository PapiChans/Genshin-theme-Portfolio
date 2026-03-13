import '../../assets/css/game-loader.css'
import whiteAnemo from '../../assets/images/elements/white/anemo_white.png'
import whitePyro from '../../assets/images/elements/white/pyro_white.png'
import whiteDendro from '../../assets/images/elements/white/dendro_white.png'
import whiteGeo from '../../assets/images/elements/white/geo_white.png'
import whiteHydro from '../../assets/images/elements/white/hydro_white.png'
import whiteElectro from '../../assets/images/elements/white/electro_white.png'
import whiteCryo from '../../assets/images/elements/white/cryo_white.png'

import { useLoadingText } from '../../hooks/game-loader-change-text';
import { getThemebyTime } from '../../hooks/get-theme-by-time';

const GameLoader = () => {
  const { title, text, changeLoadingText } = useLoadingText();
  const { theme } = getThemebyTime();

  const elements = [
    { src: whitePyro, name: "pyro" },
    { src: whiteHydro, name: "hydro" },
    { src: whiteAnemo, name: "anemo" },
    { src: whiteElectro, name: "electro" },
    { src: whiteDendro, name: "dendro" },
    { src: whiteCryo, name: "cryo" },
    { src: whiteGeo, name: "geo" },
  ];

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
            {elements.map((el, index) => (
              <div key={index} className="loader-icon-container" style={{ animationDelay: `${index * 0.35}s` }} >
                <img src={el.src} alt={el.name} className={`loader-icon base ${theme}`}/>

                <div className="loader-icon-wipe" style={{ animationDelay: `${index * 0.35}s` }} >
                  <img src={el.src} alt={el.name} className={`loader-icon fill ${theme}`} />
                </div>
              </div>
            ))}
          </div>
        <span className={`game-loader-loading-line ${theme}`}></span>
      </div>
    </div> 
    </>
  )
}

export default GameLoader;
