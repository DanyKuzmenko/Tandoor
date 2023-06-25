import React from "react";
import KpiContent_v1 from "./kpiContentComponent_v1";
import PropTypes from 'prop-types';
import KpiContent_v2 from "./kpiContentComponent_v2";

const KpiContent = (props) => {
    return props.kpiView === "kpi-view-1" ?
        (<KpiContent_v1
            props={props}
        />)
        :
        (<KpiContent_v2
            props={props}
        />
        )
}
KpiContent.propTypes = {
    kpiView: PropTypes.string
};
export default KpiContent;