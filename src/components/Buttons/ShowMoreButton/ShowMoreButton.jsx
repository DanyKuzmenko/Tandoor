import React from 'react';
import './ShowMoreButton.scss';
import PropTypes from 'prop-types';

const ShowMoreButton = ({handleButtonClick}) => {
  return (
    <button
      className={'show-more-button'}
      onClick={handleButtonClick}
    >
      Подробнее
      <span className={'show-more-button__arrow'} />
    </button>
  );
};

ShowMoreButton.propTypes = {
  handleButtonClick: PropTypes.func,
}

export default ShowMoreButton;
