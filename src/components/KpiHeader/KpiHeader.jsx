import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "./KpiHeader.scss";

const KpiHeader = ({
  selectChange,
  setKpiView,
  selectedOption,
  filterByType,
  selectOptions,
  lastFilter,
}) => {
  return (
    <header className="kpi-header">
      <div className="kpi-header__container">
        <div className="kpi-header__inputs">
          <input
            onChange={(ev) => {
              setKpiView(ev.target.value);
            }}
            defaultChecked
            value="kpi-view-1"
            className="kpi-header-view__input"
            type="radio"
            id="kpi-view-1"
            name="kpi-view"
          />
          <label className="kpi-header-view__label" htmlFor="kpi-view-1" />
          <input
            onChange={(ev) => {
              setKpiView(ev.target.value);
            }}
            value="kpi-view-2"
            className="kpi-header-view__input"
            type="radio"
            id="kpi-view-2"
            name="kpi-view"
          />
          <label className="kpi-header-view__label" htmlFor="kpi-view-2" />
        </div>
        <div className="kpi-header__name__container">
          <h2 className="kpi-header__head">KPI помодельный</h2>
          <div className="kpi-header__filter">
            <span>{lastFilter.kpiType}</span>
            <span>{lastFilter.doorType}</span>
          </div>
        </div>
      </div>

      <div className="kpi-header-filter-group">
        <input
          onChange={(event) => filterByType(event)}
          defaultChecked
          value="all"
          type="radio"
          id="doors-type-all"
          name="doors-type"
          className="kpi-header-filter-group__radio"
        />
        <label
          className="kpi-header-filter-group__label"
          htmlFor="doors-type-all"
        >
          Все
        </label>
        <input
          onChange={(event) => filterByType(event)}
          value="Входные двери"
          type="radio"
          id="doors-type-1"
          name="doors-type"
          className="kpi-header-filter-group__radio"
        />
        <label
          className="kpi-header-filter-group__label"
          htmlFor="doors-type-1"
        >
          Входные двери
        </label>
        <input
          onChange={(event) => filterByType(event)}
          value="Межкомнатные двери"
          type="radio"
          id="doors-type-2"
          name="doors-type"
          className="kpi-header-filter-group__radio"
        />
        <label
          className="kpi-header-filter-group__label"
          htmlFor="doors-type-2"
        >
          Межкомнатные двери
        </label>
        <div className="kpi-header-select-container">
          <Select
            classNamePrefix="kpi-header-filter-group-select"
            className={"kpi-header-filter-group-select"}
            defaultValue={selectOptions[0]}
            name="kpi"
            options={selectOptions}
            unstyled={true}
            value={selectedOption}
            onChange={(event) => {
              selectChange(event.value);
            }}
          />
        </div>
      </div>
    </header>
  );
};
KpiHeader.propTypes = {
  selectOptions: PropTypes.array.isRequired,
  filterByType: PropTypes.func,
  selectChange: PropTypes.func,
  selectedOption: PropTypes.string,
  setKpiView: PropTypes.func,
  kpiView: PropTypes.string,
  lastFilter: PropTypes.object,
};
export default KpiHeader;
