import React from 'react'
import maskBG from '../styles/assets/images/maskBG.png';


const Banner = ({img, text1,text2}) => {
  return (
    <div className="hero">
      <img src={img} alt="heroBg" className="heroBG" />
      <img src={maskBG} alt="heroBg" className="maskBG" />
      <h1 className="textHero">
        <span>{text1}</span>
        <span>{text2}</span>
      </h1>
    </div>
  );
}

export default Banner