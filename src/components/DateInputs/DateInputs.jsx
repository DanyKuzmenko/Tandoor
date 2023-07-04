import React from 'react';
import PropTypes from 'prop-types';
import './DateInputs.scss';
const DateInputs = ({
  dates,
  setDates,
  setFilters,
  filters,
  handleInputChange,
}) => {
  return (
    <>
      <input
        maxLength={10}
        onKeyDown={(event) => {
          if (event.key.match(/\D/) && event.key !== event.code) {
            event.preventDefault();
          } else if (
            (event.key.match(/\d/) && event.target.value.length === 2) ||
            (event.target.value.length === 5 && event.key.match(/\d/))
          ) {
            event.target.value += '.';
          }
        }}
        id="from"
        placeholder="От"
        value={dates?.from}
        onChange={(event) => handleInputChange(event)}
        className="date"
        type="text"
      />
      <button
        onClick={() => {
          setDates({ ...dates, from: '' });
          setFilters({ ...filters, from: '1900 01 01' });
        }}
        className="date__clean"
      ></button>
      <span className="date__separator"></span>
      <input
        maxLength={10}
        onKeyDown={(event) => {
          if (event.key.match(/\D/) && event.key !== event.code) {
            event.preventDefault();
          } else if (
            (event.key.match(/\d/) && event.target.value.length === 2) ||
            (event.target.value.length === 5 && event.key.match(/\d/))
          ) {
            event.target.value += '.';
          }
        }}
        id="to"
        placeholder="До"
        onChange={(event) => handleInputChange(event)}
        value={dates?.to}
        className="date"
        type="text"
      />
      <button
        onClick={() => {
          setDates({ ...dates, to: '' });
          setFilters({ ...filters, to: '2099 01 01' });
        }}
        className="date__clean"
      ></button>
    </>
  );
};
DateInputs.propTypes = {
  dates: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  setDates: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
};
export default DateInputs;
