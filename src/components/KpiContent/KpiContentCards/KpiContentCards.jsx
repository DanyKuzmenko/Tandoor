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
            src={require("/src/assets/images/doors/" + item.img)}
          ></img>
          <div>
            <div className="kpi-cards__item__name">{item.name}</div>
            <div className="kpi-cards__item__material">{item.material}</div>
          </div>
          <div className="kpi-cards__item__percent">
            <div
              className="kpi-cards__item__percent__bar"
              style={
                item.percent < 30
                  ? {
                      background: "#FBECEC",
                    }
                  : {
                      background: "#E5FFCB",
                    }
              }
            >
              <div
                style={
                  item.percent < 30
                    ? {
                        background: "#D84040",
                        width: (item.percent * 180) / 100 + "px",
                      }
                    : {
                        background: "#9ACA3C",
                        width: (item.percent * 180) / 100 + "px",
                      }
                }
                className="kpi-cards__item__percent__bar_green"
              ></div>
            </div>
            <div
              className="kpi-cards__item__percent__fact"
              style={
                item.percent < 30
                  ? {
                      color: "#D84040",
                    }
                  : {
                      color: "#9ACA3C",
                    }
              }
            >
              {item.fact}
            </div>
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
