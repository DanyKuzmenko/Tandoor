import React from 'react';
import './MarketingCard.scss';
import PropTypes from 'prop-types';

const MarketingCard = ({ image, title, text }) => {
  return (
    <div className={'marketing-card'}>
      <img className={'marketing-card__image'} src={image} alt={'Карточка товара'} />
      <div className={'marketing-card__text-block'}>
        <h3 className={'marketing-card__title'}>{title}</h3>
        <p className={'marketing-card__text'}>{text}</p>
        <a className={'marketing-card__button'}>Читать дальше...</a>
      </div>
    </div>
  );
};

MarketingCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default MarketingCard;
