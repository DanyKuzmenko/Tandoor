import React from "react";
import './kpiPage.scss';
import KpiContent from "../../components/kpiContentComponent";

const KpiPage = () => {
  const items = [
    {name: 'Адель ВХ', percent: 99, interior: true},
    {name: 'Урбан ВХ', percent: 95, interior: true},
    {name: 'Доканто серый бархат ВХ', percent: 86, interior: true},
    {name: 'Сити зеркало Метал-Метал', percent: 75, interior: true},
    {name: 'Лу ВХ', percent: 69, interior: true},
    {name: 'Сицилия ВХ', percent: 58, interior: true},
    {name: 'Гладкая ВХ', percent: 45, interior: true},
    {name: 'Американская решетка ВХ', percent: 37, interior: true},
    {name: 'Барокко', percent: 26, interior: true},
    {name: 'Лиственница ВХ', percent: 20, interior: true},
    {name: 'Лиственница ВХ', percent: 18, interior: true},
    {name: 'Лиственница ВХ', percent: 15, interior: true},
    {name: 'Лиственница ВХ', percent: 12, interior: true},
    {name: 'Лиственница ВХ', percent: 5, interior: true},
  ]
  const selectOptions = [
      "KPI №1",
      "KPI №2",
      "KPI №3",
  ]

  return (
    <div className="kpi-container">
      <header className="kpi-header">
        <div className="kpi-header-container">
          <div className="kpi-header-inputs-container">
            <input defaultChecked className="kpi-header-view__input" type="radio" id="kpi-view-1" name="kpi-view"/>
            <label className="kpi-header-view__label" htmlFor="kpi-view-1"></label>
            <input className="kpi-header-view__input" type="radio" id="kpi-view-2" name="kpi-view"/>
            <label className="kpi-header-view__label" htmlFor="kpi-view-2"></label>
          </div>
          <h2 className="kpi-header_head">KPI помодельный</h2>
        </div>
        <div className="kpi-header-filter-group">
          <input defaultChecked type="radio" id="doors-type-1" name="doors-type" className="kpi-header-filter-group__radio"/>
          <label className="kpi-header-filter-group__label" htmlFor="doors-type-1">Входные двери</label>
          <input type="radio" id="doors-type-2" name="doors-type" className="kpi-header-filter-group__radio"/>
          <label className="kpi-header-filter-group__label" htmlFor="doors-type-2">Межкомнатные двери</label>
          <select className="kpi-header-filter-group-select" name="kpi-filter-select">
            {selectOptions.map((selectOption) => (
                <option className="kpi-header-filter-group-select__option" key={selectOption}>
                  {selectOption}
                </option>
            ))}
          </select>
        </div>
      </header>

      <KpiContent
          items = {items}
      />
    </div>
  )
};

export default KpiPage;