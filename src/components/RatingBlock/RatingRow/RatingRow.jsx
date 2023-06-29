import React from 'react';
import './RatingRow.scss';
import PropTypes from 'prop-types';

const RatingRow = ({place, placeColor, title, percent, image}) => {
  return (
    <>
      <div className={'rating-row'}>
        <span className={`rating-row__place ${placeColor}`}>{place}</span>
        <div className={'rating-row__avatar'}>
          <img src={image} alt={'/'} />
        </div>
        <h4 className={'rating-row__title'}>{title}</h4>
        <p className={'rating-row__percents'}>{percent}</p>
      </div>
      <div className={'rating-row__line'} />
    </>
  );
};

RatingRow.propTypes = {
  place: PropTypes.string,
  placeColor: PropTypes.string,
  title: PropTypes.string,
  percent: PropTypes.string,
  image: PropTypes.string,
}

export default RatingRow;
