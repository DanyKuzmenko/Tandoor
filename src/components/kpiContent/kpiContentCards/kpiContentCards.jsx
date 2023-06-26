import React from "react";
import PropTypes from "prop-types";
import "./kpiContentCards.scss";

const KpiContentCards = ({ items }) => {
  return (
    <>
      <div className="v2_kpi-content">
        {items.map((item) => (
          <div key={item.id} className={"v2_kpi-content-item"}>
            <div className="v2_kpi-content-item__plan">План {item.plan}</div>
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
};

KpiContentCards.propTypes = {
  items: PropTypes.array,
};

export default KpiContentCards;
