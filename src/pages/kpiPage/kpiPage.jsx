import React, { useMemo, useState } from "react";
import './kpiPage.scss';
import KpiContent from "../../components/kpiContentComponent";
import KpiHeader from "../../components/kpiHeaderComponent";

const KpiPage = () => {
  const items = [
    { name: 'Адель ВХ', plan: 5000, fact: 1, percent: 99, type: "entrance", kpi: "KPI1" },
    { name: 'Урбан ВХ', plan: 14, fact: 1, percent: 95, type: "interior", kpi: "KPI2" },
    { name: 'Доканто серый бархат ВХ', plan: 300, fact: 24, percent: 86, type: "interior", kpi: "KPI3" },
    { name: 'Сити зеркало Метал-Метал', plan: 30, fact: 14, percent: 75, type: "entrance", kpi: "KPI2" },
    { name: 'Лу ВХ', plan: 45, fact: 24, percent: 69, type: "interior", kpi: "KPI1" },
    { name: 'Сицилия ВХ', plan: 70, fact: 24, percent: 58, type: "interior", kpi: "KPI3" },
    { name: 'Гладкая ВХ', plan: 14, fact: 12, percent: 45, type: "interior", kpi: "KPI2" },
    { name: 'Американская решетка ВХ', plan: 80, fact: 24, percent: 37, type: "interior", kpi: "KPI3" },
    { name: 'Барокко', plan: 180, fact: 24, percent: 26, type: "entrance", kpi: "KPI1" },
    { name: 'Лиственница ВХ', plan: 32, fact: 25, percent: 20, type: "interior", kpi: "KPI3" },
    { name: 'Лиственница ВХ', plan: 25, fact: 24, percent: 18, type: "interior", kpi: "KPI2" },
    { name: 'Лиственница ВХ', plan: 35, fact: 24, percent: 15, type: "interior", kpi: "KPI3" },
    { name: 'Лиственница ВХ', plan: 91, fact: 24, percent: 12, type: "entrance", kpi: "KPI1" },
    { name: 'Лиственница ВХ', plan: 170, fact: 24, percent: 5, type: "entrance", kpi: "KPI2" },
  ]
  useMemo(() => {
    items.forEach(item => {
      return item.percent = Math.ceil(item.fact / item.plan * 100)
    });
    items.sort((a, b) => b.percent - a.percent);
  }, [items])
  const selectOptions = [
    { value: "", label: "Все KPI" },
    { value: "KPI1", label: "KPI № 1" },
    { value: "KPI2", label: "KPI № 2" },
    { value: "KPI3", label: "KPI № 3" }
  ]
  const [doors, setDoors] = useState(items);
  const [selectedOption, setSelectedOption] = useState();
  const [kpiView, setKpiView] = useState("kpi-view-1");
  const getKpiFilteredDoors = () => {
    return selectedOption ? [...doors].filter((door) => door.kpi === selectedOption) : doors;
  }
  const kpiFilteredDoors = useMemo(
    () => getKpiFilteredDoors(),
    [doors, selectedOption])

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };
  const handleDoorsTypeRadio = (ev) => {
    setDoors(items.filter((door) => {
      if (ev.target.value === "all") {
        return true
      }
      return door.type === ev.target.value;
    }))
  }

  return (
    <div className="kpi-container">
      <KpiHeader
        kpiView={kpiView}
        setKpiView={setKpiView}
        selectValue={selectedOption}
        selectOptions={selectOptions}
        filterByType={handleDoorsTypeRadio}
        selectChange={handleSelectChange}
      />

      <KpiContent
        kpiView = {kpiView}
        items={kpiFilteredDoors}
      />
    </div>
  )
};

export default KpiPage;