import React from 'react'
import heroBG from '../styles/assets/images/heroBG.png';
import maskBG from '../styles/assets/images/maskBG.png';


const Banner = () => {
  return (
    <div className="hero">
      <img src={heroBG} alt="heroBg" className="heroBG" />
      <img src={maskBG} alt="heroBg" className="maskBG" />
      <h1 className="textHero">
        <span>Chez vous,</span>
        <span>partout et ailleurs</span>
      </h1>
    </div>
  );
}

export default Banner