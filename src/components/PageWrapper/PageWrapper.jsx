import React from "react";
import "./PageWrapper.scss";
import PropTypes from "prop-types";

const PageWrapper = ({ children }) => (
  <div className="page-wrapper">{children}</div>
);

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PageWrapper;
