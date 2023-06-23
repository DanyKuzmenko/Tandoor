import React from "react";
import './kpiPage.scss';

const KpiPage = () => {
  const items = [
    {name: 'Адель ВХ', percent: 99},
    {name: 'Урбан ВХ', percent: 95},
    {name: 'Доканто серый бархат ВХ', percent: 86},
    {name: 'Сити зеркало Метал-Метал', percent: 75},
    {name: 'Лу ВХ', percent: 69},
    {name: 'Сицилия ВХ', percent: 58},
    {name: 'Гладкая ВХ', percent: 45},
    {name: 'Американская решетка ВХ', percent: 37},
    {name: 'Барокко', percent: 26},
    {name: 'Лиственница ВХ', percent: 20},
    {name: 'Лиственница ВХ', percent: 18},
    {name: 'Лиственница ВХ', percent: 15},
    {name: 'Лиственница ВХ', percent: 12},
    {name: 'Лиственница ВХ', percent: 5},
  ]
  const countBarWidth = (item) => {
    return item.percent * 970 / 100;
  }
  // setting opacity to the bars
  for(let i = 0; i < items.length; i++) {
    if(i === 0) {
      items[i].opacity = 1;
      continue;
    }
    items[i].opacity = items[i - 1].opacity <= 0.6 ? 0.5 : items[i - 1].opacity - 0.05;
  }
  return (
    <>
      <div className="kpi-content">
        <div className="kpi-content-names">
          {items.map((item) => {
            return <div key={item.name + item.percent} className="kpi-content-names__item">{item.name}</div>
          })}
        </div>
        <div className="kpi-content-lines">
          {items.map((item) => {
            return (
              <div key={item.name + item.percent} className="kpi-content-lines-line">
                <span style={{width:countBarWidth(item) + "px", opacity: item.opacity}}  className="kpi-content-lines-line__bar"></span>
                <span className="kpi-content-lines-line__percentage">{item.percent}%</span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
};

export default KpiPage;
