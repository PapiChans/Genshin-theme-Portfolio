import React from 'react'
import whiteMondstadt from '../../assets/images/region-emblems/mondstadt-white.webp'
import whiteLiyue from '../../assets/images/region-emblems/liyue-white.webp'
import whiteInazuma from '../../assets/images/region-emblems/inazuma-white.webp'
import whiteSumeru from '../../assets/images/region-emblems/sumeru-white.webp'
import whiteFontaine from '../../assets/images/region-emblems/fontaine-white.webp'
import whiteNatlan from '../../assets/images/region-emblems/natlan-white.webp'
import whiteNodKrai from '../../assets/images/region-emblems/nod-krai-white.webp'

export function regionChange(data) {
    switch(data) {
        case 'mondstadt':
            return whiteMondstadt;
        case 'liyue':
            return whiteLiyue;
        case 'inazuma':
            return whiteInazuma;
        case 'sumeru':
            return whiteSumeru;
        case 'fontaine':
            return whiteFontaine;
        case 'natlan':
            return whiteNatlan;
        case 'nod-krai':
            return whiteNodKrai;
        default:
            return whiteMondstadt;
    }
}
