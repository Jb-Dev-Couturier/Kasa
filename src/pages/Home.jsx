import React from 'react';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="Home">
        <Banner/>
      </div>
    </div>
  );
};

export default Home;
