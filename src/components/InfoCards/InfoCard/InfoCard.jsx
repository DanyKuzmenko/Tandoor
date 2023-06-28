import React from 'react';
import './InfoCard.scss';
import PropTypes from 'prop-types';

const InfoCard = ({ color, title, subtitle, percent, infoBlock }) => {
  return (
    <div className={'info-card'}>
      <div className={`info-card__top-block background-light-${color}`}>
        <div className={'info-card__title-block'}>
          <div className={`info-card__icon background-${color}`} />
          <div className={'info-card__title-container'}>
            <h3 className={'info-card__title'}>{title}</h3>
            <a className={'info-card__subtitle'} href={'#'}>
              {subtitle}
              <span className={'info-card__subtitle-arrow'} />
            </a>
          </div>
        </div>
        <div className={'info-card__line-block'}>
          <div className={'info-card__line-container'}>
            <span className={`info-card__line-active background-${color}`} style={{width: `${percent}%`}} />
            <span className={'info-card__line'} style={{width: `${100 - percent}%`}} />
          </div>
          <p className={`info-card__line-percent ${color}`}>{percent}%</p>
        </div>
      </div>
      <div className='info-card__bottom-block'>
        {infoBlock.map((info, index) => (
          <>
            <div className={'info-card__info-block'} key={info.id}>
              <h4 className={'info-card__info-block-title'}>{info.title}</h4>
              <p className={`info-card__info-block-subtitle ${index === 1 ? color : ''}`}>{info.value}</p>
            </div>
            <div className={'info-card__between-line'} />
          </>
        ))}
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  percent: PropTypes.number,
  infoBlock: PropTypes.array,
};

export default InfoCard;
