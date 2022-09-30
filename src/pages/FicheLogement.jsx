import React, { useEffect, useState } from 'react';
import { Properties } from '../data/data';
import { useParams } from 'react-router-dom';
import LogementCarousel from '../components/LogementCarousel';
import LogementDetails from '../components/LogementDetails';

const FicheLogement = () => {
  const [logementData, setLogementData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    Properties.map((property) => {
      if (property.id === id) {
        setLogementData(property);
      }
      return null;
    });
  }, [id]);

  return (
    <main className='FicheLogement'>
      <LogementCarousel logementDetail={logementData} />
      <LogementDetails logementDetails={logementData} />
    </main>
  );
};

export default FicheLogement;
