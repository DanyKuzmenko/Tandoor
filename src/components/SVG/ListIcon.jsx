import React from 'react';
import PropTypes from 'prop-types';

const ListIcon = ({className}) => {
    return (
        <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="&#208;&#154;&#208;&#189;&#208;&#190;&#208;&#191;&#208;&#186;&#208;&#184;_42/cil:description">
                <path id="Vector" d="M11.7642 0.5625H1.6875V17.4375H16.5938V5.39202L11.7642 0.5625ZM15.4688 5.85798V5.90625H11.25V1.6875H11.2983L15.4688 5.85798ZM2.8125 16.3125V1.6875H10.125V7.03125H15.4688V16.3125H2.8125Z" fill="#8F96B0"/>
                <path id="Vector_2" d="M4.78125 10.4062H12.6562V11.5312H4.78125V10.4062Z" fill="#8F96B0"/>
                <path id="Vector_3" d="M4.78125 13.2188H12.6562V14.3438H4.78125V13.2188Z" fill="#8F96B0"/>
            </g>
        </svg>
    );
};

ListIcon.propTypes = {
    className: PropTypes.string
};

export default ListIcon;
