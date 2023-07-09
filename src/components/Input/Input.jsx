import React from 'react';
import './Input.scss';
import PropTypes from 'prop-types';

const Input = ({ placeholder, styles, filters, setFilters }) => {
  return (
    <div style={styles} className="input__wrapper">
      <input
        onChange={(event) => {
          if (setFilters) {
            setFilters({ ...filters, search: event.target.value });
          }
        }}
        value={filters?.search}
        placeholder={placeholder}
        className="input"
      />
      <button className="input__search-button" />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  styles: PropTypes.object,
  filters: PropTypes.object,
  setFilters: PropTypes.func,
};

export default Input;
