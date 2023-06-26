import React from "react";
import PropTypes from "prop-types";
import "./kpiContentCards.scss";

const KpiContentCards = ({ items }) => {
  return (
    <div className="kpi-cards">
      {items.map((item) => (
        <div key={item.id} className={"kpi-cards__item"}>
          <div className="kpi-cards__item__plan">План {item.plan}</div>
          <img
            className="kpi-cards__item__image"
            src={require("../../../assets/images/doors/" + item.img)}
          ></img>
          <div>
            <div className="kpi-cards__item__name">{item.name}</div>
            <div className="kpi-cards__item__material">{item.material}</div>
          </div>
          <div className="kpi-cards__item__percent">
            <div className="kpi-cards__item__percent__bar">
              <div
                style={{ width: (item.percent * 180) / 100 + "px" }}
                className="kpi-cards__item__percent__bar_green"
              ></div>
            </div>
            <div className="kpi-cards__item__percent__fact">{item.fact}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

KpiContentCards.propTypes = {
  items: PropTypes.array,
};

export default KpiContentCards;
