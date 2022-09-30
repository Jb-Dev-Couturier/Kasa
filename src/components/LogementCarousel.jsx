import React from 'react'

const LogementCarousel = ({ logementDetail }) => {
  return (
    <div className="LogementCarousel">
      <img src={logementDetail.cover} alt="pic" />
    </div>
  );
};

export default LogementCarousel