import React from 'react';
import Banner from '../components/Banner';
import CardLocation from '../components/CardLocation';
import { Properties } from '../data/data';
import heroBG from '../styles/assets/images/heroBG.png';


const Home = () => {
  return (
    <main className="Home">
      <Banner img={heroBG} text1={'Chez vous,'} text2={'partout et ailleurs'} />
      <div className="contentWrapper">
        {Properties.map((property) => (
          <CardLocation property={property} key={property.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
