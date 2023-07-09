import React from 'react';
import PropTypes from 'prop-types';
import DateInputs from '../../DateInputs/DateInputs';
import './MarketingHeader.scss';
import Input from '../../Input/Input';
import ShowMoreButton from '../../Buttons/ShowMoreButton/ShowMoreButton';

const MarketingHeader = ({
  dates,
  setDates,
  filters,
  setFilters,
  handleInputChange,
}) => {
  return (
    <div className="marketing-header">
      <h2 className="marketing-header__title">Маркетинг</h2>
      <Input
        filters={filters}
        setFilters={setFilters}
        placeholder="Поиск акции..."
        styles={{ marginRight: '10px' }}
      />
      <DateInputs
        setFilters={setFilters}
        setDates={setDates}
        dates={dates}
        filters={filters}
        handleInputChange={handleInputChange}
      />
      <div className="marketing-header__radio">
        <input
          onChange={(event) =>
            setFilters({ ...filters, radio: event.target.value })
          }
          defaultChecked
          value="Все"
          type="radio"
          id="marketing-all"
          name="marketing-filter"
          className="marketing-header__radio__item"
        />
        <label
          className="marketing-header__radio__label"
          htmlFor="marketing-all"
        >
          Все
        </label>
        <input
          onChange={(event) =>
            setFilters({ ...filters, radio: event.target.value })
          }
          value="Активные"
          type="radio"
          id="marketing-active"
          name="marketing-filter"
          className="marketing-header__radio__item"
        />
        <label
          className="marketing-header__radio__label"
          htmlFor="marketing-active"
        >
          Активные акции
        </label>
        <input
          onChange={(event) =>
            setFilters({ ...filters, radio: event.target.value })
          }
          value="Законченные"
          type="radio"
          id="marketing-ended"
          name="marketing-filter"
          className="marketing-header__radio__item"
        />
        <label
          className="marketing-header__radio__label"
          htmlFor="marketing-ended"
        >
          Законченные
        </label>
      </div>
      <ShowMoreButton />
    </div>
  );
};
MarketingHeader.propTypes = {
  dates: PropTypes.object,
  setDates: PropTypes.func,
  filters: PropTypes.object,
  setFilters: PropTypes.func,
  handleInputChange: PropTypes.func,
};
export default MarketingHeader;
