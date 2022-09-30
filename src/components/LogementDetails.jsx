import React, { useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import TagName from './TagName';
import Collapse from './Collapse';

const LogementDetails = ({ logementDetails }) => {
  const title = logementDetails?.title;
  const Location = logementDetails?.location;
  const name = logementDetails?.host?.name;
  const pictureHoster = logementDetails?.host?.picture;
  const description = logementDetails?.description
  const tags = logementDetails?.tags;
  const equipments = logementDetails?.equipments;
  const rating = logementDetails?.rating;

  const [ratingValue, setRatingValue] = useState(null);

  useEffect(() => {
    setRatingValue(rating);
  }, [rating]);

  return (
    <div className="LogementDetails">
      <div className="logementDetailsHead">
        <div className="logementDetailsTitle">
          <h2 className="title">{title}</h2>
          <h3 className="subtitle">{Location}</h3>
          <div className="tagWrapper">
            <TagName tags={tags} />
          </div>
        </div>
        <div className="logementDetailsRating">
          <div className="logementDetailsHost">
            <span>{name}</span>
            <img src={pictureHoster} alt="pic-user" />
          </div>
          <div className="boxRating">
            <Rating
              value={ratingValue ? ratingValue: ''}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="logementDetailsCollapse">
        <Collapse title={'Description'} key="desc" descrition={description} />
        <Collapse title={'Equipements'} key="equip" equipments={equipments} />
      </div>
    </div>
  );
};

export default LogementDetails;
