import mondstadt from '../../assets/images/regions/mondstadt.webp'
import liyue from '../../assets/images/regions/liyue.webp'
import inazuma from '../../assets/images/regions/inazuma.webp'
import sumeru from '../../assets/images/regions/sumeru.webp'
import fontaine from '../../assets/images/regions/fontaine.webp'
import natlan from '../../assets/images/regions/natlan.webp'
import nodkrai from '../../assets/images/regions/nodkrai.webp'
import snezhnaya from '../../assets/images/regions/snezhnaya.webp'

import whiteAnemo from '../../assets/images/elements/white/anemo_white.png'
import whitePyro from '../../assets/images/elements/white/pyro_white.png'
import whiteDendro from '../../assets/images/elements/white/dendro_white.png'
import whiteGeo from '../../assets/images/elements/white/geo_white.png'
import whiteHydro from '../../assets/images/elements/white/hydro_white.png'
import whiteElectro from '../../assets/images/elements/white/electro_white.png'
import whiteCryo from '../../assets/images/elements/white/cryo_white.png'
import whiteMoon from '../../assets/images/elements/white/moon_white.png'

export const regionBackgrounds = [
    {
        name: 'Mondstadt',
        src: mondstadt,
        element: whiteAnemo,
    },
    {
        name: 'Liyue',
        src: liyue,
        element: whiteGeo,
    },
    {
        name: 'Inazuma',
        src: inazuma,
        element: whiteElectro,
    },
    {
        name: 'Sumeru',
        src: sumeru,
        element: whiteDendro,
    },
    {
        name: 'Fontaine',
        src: fontaine,
        element: whiteHydro,
    },
    {
        name: 'Natlan',
        src: natlan,
        element: whitePyro,
    },
    {
        name: 'Nod-Krai',
        src: nodkrai,
        element: whiteMoon,
    },
    {
        name: 'Snezhnaya',
        src: snezhnaya,
        element: whiteCryo,
    },
]