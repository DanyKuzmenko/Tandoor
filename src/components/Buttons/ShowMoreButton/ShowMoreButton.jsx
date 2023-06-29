import React from 'react';
import './ShowMoreButton.scss';

const ShowMoreButton = () => {
  return (
    <button className={'show-more-button'}>
      Подробнее
      <span className={'show-more-button__arrow'} />
    </button>
  );
};

export default ShowMoreButton;
