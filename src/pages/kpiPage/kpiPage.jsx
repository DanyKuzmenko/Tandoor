import React, { useMemo, useState } from "react";
import './kpiPage.scss';
import KpiContent from "../../components/kpiContentComponent";
import KpiHeader from "../../components/kpiHeaderComponent";

const KpiPage = () => {
  const items = [
    { name: 'Адель ВХ', percent: 99, type: "entrance", kpi: "KPI1" },
    { name: 'Урбан ВХ', percent: 95, type: "interior", kpi: "KPI2" },
    { name: 'Доканто серый бархат ВХ', percent: 86, type: "interior", kpi: "KPI3"},
    { name: 'Сити зеркало Метал-Метал', percent: 75, type: "entrance", kpi: "KPI2"},
    { name: 'Лу ВХ', percent: 69, type: "interior", kpi: "KPI1"},
    { name: 'Сицилия ВХ', percent: 58, type: "interior", kpi: "KPI3"},
    { name: 'Гладкая ВХ', percent: 45, type: "interior", kpi: "KPI2"},
    { name: 'Американская решетка ВХ', percent: 37, type: "interior", kpi: "KPI3"},
    { name: 'Барокко', percent: 26, type: "entrance", kpi: "KPI1"},
    { name: 'Лиственница ВХ', percent: 20, type: "interior", kpi: "KPI3"},
    { name: 'Лиственница ВХ', percent: 18, type: "interior", kpi: "KPI2"},
    { name: 'Лиственница ВХ', percent: 15, type: "interior", kpi: "KPI3"},
    { name: 'Лиственница ВХ', percent: 12, type: "entrance", kpi: "KPI1"},
    { name: 'Лиственница ВХ', percent: 5, type: "entrance", kpi: "KPI2"},
  ]
  const selectOptions = [
    { value: "", label: "Все KPI"},
    { value: "KPI1", label: "KPI № 1" },
    { value: "KPI2", label: "KPI № 2" },
    { value: "KPI3", label: "KPI № 3" }
  ]
  const [doors, setDoors] = useState(items);
  const [selectedOption, setSelectedOption] = useState();
  const getKpiFilteredDoors = () => {
    console.log("fsdfkk")
    return selectedOption ? [...doors].filter((door) => door.kpi === selectedOption) : doors;
  }
  const kpiFilteredDoors = useMemo(
    () => getKpiFilteredDoors(),
    [doors, selectedOption])
  
    const handleSelectChange = (value) => {
    setSelectedOption(value);
  };
  const handleDoorsTypeRadio = (ev) => {
    setDoors([...items].filter((door) => {
      if (ev.target.value === "all") {
        return true
      }
      return door.type === ev.target.value;
    }))
  }

  return (
    <div className="kpi-container">
      <KpiHeader
        selectValue={selectedOption}
        selectOptions={selectOptions}
        filterByType={handleDoorsTypeRadio}
        selectChange={handleSelectChange}
      />

      <KpiContent
        items={kpiFilteredDoors}
      />
    </div>
  )
};

export default KpiPage;