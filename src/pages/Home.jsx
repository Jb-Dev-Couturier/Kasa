import React from 'react';
import Banner from '../components/Banner';
import CardLocation from '../components/CardLocation';
import { Properties } from '../data/data';


const Home = () => {
  return (

      <main className="Home">
        <Banner/>
        <div className="contentWrapper">
          {Properties.map((property)=>(
            <CardLocation property={property} key={property.id}/>
          ))}
        </div>
      </main>

  );
};

export default Home;
