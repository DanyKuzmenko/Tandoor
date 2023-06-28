import React from 'react';
import './InfoCards.scss';
import InfoCard from './InfoCard/InfoCard';

const InfoCards = () => {
  return (
    <section className='info-cards'>
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </section>
  );
};

export default InfoCards;