import React from "react";
import PropTypes from 'prop-types';

const KpiContent = (props) => {
    const countBarWidth = (item) => {
        return item.percent * 950 / 100;
    }

    // setting opacity to the bars
    for(let i = 0; i < props.items.length; i++) {
        if(i === 0) {
            props.items[i].opacity = 1;
            continue;
        }
        props.items[i].opacity = props.items[i - 1].opacity <= 0.6 ? 0.5 : props.items[i - 1].opacity - 0.05;
    }
    return (
        <div className="kpi-content">
            <div className="kpi-content-names">
                {props.items.map((item) => {
                    return <div key={item.name + item.percent} className="kpi-content-names__item">{item.name}</div>
                })}
            </div>
            <div className="kpi-content-lines">
                {props.items.map((item) => {
                    return (
                        <div key={item.name + item.percent} className="kpi-content-lines-line">
                            <span style={{width: countBarWidth(item) + "px", opacity: item.opacity}}
                                  className="kpi-content-lines-line__bar"></span>
                            <span className="kpi-content-lines-line__percentage">{item.percent}%</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
KpiContent.propTypes = {
    items: PropTypes.array.isRequired,
    onFilter: PropTypes.func
};
export default KpiContent;