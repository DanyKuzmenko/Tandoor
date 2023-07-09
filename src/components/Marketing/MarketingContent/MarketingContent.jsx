import React from 'react';
import PropTypes from 'prop-types';
import MarketingCard from '../MarketingCard/MarketingCard';
import './MarketingContent.scss';

const MarketingContent = ({ marketing }) => {

  console.log('marketing', marketing);

  return (
    <div className={'marketing-cards'}>
      {marketing.map((item) => (
        <MarketingCard key={item.id} image={item.image} title={item.title} text={item.text} />
      ))}
    </div>
  );
};
MarketingContent.propTypes = {
  marketing: PropTypes.array,
};
export default MarketingContent;
