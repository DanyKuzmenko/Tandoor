import React from 'react';
import PropTypes from 'prop-types';
const MarketingContent = ({ marketing }) => {
  return (
    <div>
      {marketing.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};
MarketingContent.propTypes = {
  marketing: PropTypes.array,
};
export default MarketingContent;
