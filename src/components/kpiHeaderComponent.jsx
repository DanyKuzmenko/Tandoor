import React from "react";
import PropTypes from "prop-types";
import Select from "react-select"


const KpiHeader = (props) => {
    return (
        <header className="kpi-header">
            <div className="kpi-header-container">
                <div className="kpi-header-inputs-container">
                    <input defaultChecked className="kpi-header-view__input" type="radio" id="kpi-view-1" name="kpi-view" />
                    <label className="kpi-header-view__label" htmlFor="kpi-view-1"></label>
                    <input className="kpi-header-view__input" type="radio" id="kpi-view-2" name="kpi-view" />
                    <label className="kpi-header-view__label" htmlFor="kpi-view-2"></label>
                </div>
                <h2 className="kpi-header_head">KPI помодельный</h2>
            </div>
            <div className="kpi-header-filter-group">
                <input onChange={(event) => props.filterByType(event)} defaultChecked value="all" type="radio" id="doors-type-all" name="doors-type" className="kpi-header-filter-group__radio" />
                <label className="kpi-header-filter-group__label" htmlFor="doors-type-all">Все</label>
                <input onChange={(event) => props.filterByType(event)} value="entrance" type="radio" id="doors-type-1" name="doors-type" className="kpi-header-filter-group__radio" />
                <label className="kpi-header-filter-group__label" htmlFor="doors-type-1">Входные двери</label>
                <input onChange={(event) => props.filterByType(event)} value="interior" type="radio" id="doors-type-2" name="doors-type" className="kpi-header-filter-group__radio" />
                <label className="kpi-header-filter-group__label" htmlFor="doors-type-2">Межкомнатные двери</label>
                <div className="kpi-header-select-container">
                    <Select
                        classNamePrefix="kpi-header-filter-group-select"
                        className={"kpi-header-filter-group-select"}
                        defaultValue={props.selectOptions[0]}
                        name="kpi"
                        options={props.selectOptions}
                        unstyled={true}
                        value={props.selectedOption}
                        onChange={event => {props.selectChange(event.value)}}
                    />
                </div>
            </div>
        </header>
    )
}
KpiHeader.propTypes = {
    selectOptions: PropTypes.array.isRequired,
    filterByType: PropTypes.func,
    selectChange: PropTypes.func,
    selectedOption: PropTypes.string
};
export default KpiHeader;