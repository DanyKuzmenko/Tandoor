import React from "react";
import PropTypes from 'prop-types';

const KpiContent_v2 = ({ props }) => {
    return (
        <>
            <div className="v2_kpi-content">
                {props.items.map((item) => {
                    return (
                        <div key={item.name + item.percent + item.type + item.kpi} className={"v2_kpi-content-item"}>
                            <div className="v2_kpi-content-item__plan">План {item.plan}</div>
                            {item.name}
                        </div>
                    )
                })}
            </div>
        </>
    )
}
KpiContent_v2.propTypes = {
    items: PropTypes.array,
    props: PropTypes.object
};
export default KpiContent_v2;