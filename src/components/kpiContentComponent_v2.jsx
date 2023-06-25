import React from "react";
import PropTypes from 'prop-types';

const KpiContent_v2 = ({ props }) => {
    return (
        <h1>
            {props.items[0].name}
        </h1>
    )
}
KpiContent_v2.propTypes = {
    items: PropTypes.array,
    props: PropTypes.object
};
export default KpiContent_v2;