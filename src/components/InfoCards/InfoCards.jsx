import React from 'react';
import './InfoCards.scss';
import InfoCard from './InfoCard/InfoCard';
import { infoCardsData } from '../../utils/constants';

const InfoCards = () => {
  return (
    <section className='info-cards'>
      <InfoCard
        color={'orange'}
        percent={70}
        title={'План продаж'}
        subtitle={'Межкомнатные двери'}
        infoBlock={infoCardsData.plan}
      />
      <InfoCard
        color={'green'}
        percent={50}
        title={'KPI личный'}
        subtitle={'KPI №1'}
        infoBlock={infoCardsData.kpi}
      />
      <InfoCard
        color={'blue'}
        percent={22}
        title={'Ретро-бонус'}
        subtitle={'ООО “Чебурашка”'}
        infoBlock={infoCardsData.bonus}
      />
    </section>
  );
};

export default InfoCards;
