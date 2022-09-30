import React from 'react';
import { Link } from 'react-router-dom';

const CardLocation = ({ property }) => {
  return (
    <div className="cardContent">
      <Link to={`/fiche_logement/${property.id}`}>
        <div className="imgBox">
          <img src={property.cover} alt="logement-Pic" />
          <div className='LinearGradient'/>
        </div>
        <h3>{property.title}</h3>
      </Link>
    </div>
  );
};

export default CardLocation;
