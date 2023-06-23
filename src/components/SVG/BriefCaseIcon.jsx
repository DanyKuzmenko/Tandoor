import React from 'react';
import PropTypes from 'prop-types';

const BriefCaseIcon = ({className}) => {
    return (
        <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="cil:briefcase" clipPath="url(#clip0_9706_158912)">
                <path id="Vector" d="M16.5668 3.92804H12.9375V0.5625H5.0707V3.92804H1.44961C1.21876 3.92834 0.997444 4.02018 0.834211 4.18342C0.670977 4.34666 0.579146 4.56798 0.578857 4.79883V16.5421C0.579155 16.773 0.67099 16.9943 0.834223 17.1575C0.997456 17.3208 1.21876 17.4126 1.44961 17.4129H16.5668C16.7976 17.4126 17.0189 17.3208 17.1822 17.1575C17.3454 16.9943 17.4372 16.773 17.4375 16.5421V4.79883C17.4373 4.56798 17.3454 4.34666 17.1822 4.18342C17.019 4.02018 16.7976 3.92834 16.5668 3.92804ZM6.1957 1.6875H11.8125V3.92804H6.1957V1.6875ZM16.2585 5.10711V7.92967L14.389 9.79914H9.5977V8.15625H8.4187V9.79914H3.62736L1.75786 7.92967V5.10711H16.2585ZM1.75786 16.2339V9.59702L3.13901 10.9782H8.4187V12.6387H9.5977V10.9782H14.8774L16.2585 9.59702V16.2339H1.75786Z" fill="#8F96B0"/>
            </g>
            <defs>
                <clipPath id="clip0_9706_158912">
                    <rect width="18" height="18" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
};

BriefCaseIcon.propTypes = {
    className: PropTypes.string
};

export default BriefCaseIcon;
