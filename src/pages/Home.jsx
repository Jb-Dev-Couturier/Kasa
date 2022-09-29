import React from 'react';
import NavBar from '../components/NavBar';
import heroBG from '../styles/assets/images/heroBG.png'
import maskBG from '../styles/assets/images/maskBG.png'

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="Home">
        <div className="heroBackGround">
          
          <img src={heroBG} alt="heroBg" className="heroBG" />
          <img src={maskBG} alt="heroBg" className="maskBG" />
        </div>
      </div>
    </div>
  );
};

export default Home;
