import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const LogementCarousel = ({ logementImage }) => {
  
  return (
    <div className="LogementCarousel">
      <Carousel
      // autoPlay
      // infiniteLoop
      showIndicators={false}
      showStatus
      >
        {logementImage?.map((img, i)=>(
          <img src={img} alt="img-logement" key={i} />
        ))}

      </Carousel>
    </div>
  );
};

export default LogementCarousel