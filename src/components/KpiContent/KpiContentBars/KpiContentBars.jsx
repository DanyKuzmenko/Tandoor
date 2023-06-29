import React from "react";
import PropTypes from "prop-types";
import "./KpiContentBars.scss";

const KpiContentBars = ({ items }) => {
  if (!items) return;

  const countBarWidth = (item) => {
    return (item.percent * 950) / 100;
  };

  // setting opacity to the bars
  for (let i = 0; i < items.length; i++) {
    if (i === 0) {
      items[i].opacity = 1;
      continue;
    }
    items[i].opacity =
      items[i - 1].opacity <= 0.6 ? 0.5 : items[i - 1].opacity - 0.05;
  }

  return (
    <div className="kpi-content">
      <div className="kpi-content__names">
        {items.map((item) => (
          <div key={item.id} className="kpi-content__names__item">
            {item.name}
          </div>
        ))}
      </div>
      <div className="kpi-content__lines">
        {items.map((item) => (
          <div
            key={item.name + item.percent}
            className="kpi-content__lines__line"
          >
            <span
              style={{
                width: countBarWidth(item) + "px",
                opacity: item.opacity,
              }}
              className="kpi-content__lines__line__bar"
            />
            <span className="kpi-content__lines__line__percentage">
              {item.percent}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

KpiContentBars.propTypes = {
  items: PropTypes.array,
};

export default KpiContentBars;
