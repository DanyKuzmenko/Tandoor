import React, { useEffect, useMemo, useState } from "react";
import "./kpiPage.scss";
import KpiHeader from "../../components/kpiContent/kpiHeader/kpiHeader";
import { kpiItems, kpiSelectOptions } from "../../utils/constants";
import KpiContentBars from "../../components/kpiContent/kpiContentBars/kpiContentBars";
import KpiContentCards from "../../components/kpiContent/kpiContentCards/kpiContentCards";

const KpiPage = () => {
  const [items, setItems] = useState([]);
  const [doors, setDoors] = useState(kpiItems);
  const [selectedOption, setSelectedOption] = useState("");
  const [kpiView, setKpiView] = useState("kpi-view-1");

  useEffect(() => {
    getKpiFilteredDoors();
  }, [doors, selectedOption]);

  useMemo(() => {
    kpiItems.forEach((item) => {
      return (item.percent = Math.ceil((item.fact / item.plan) * 100));
    });
    kpiItems.sort((a, b) => b.percent - a.percent);
  }, [kpiItems]);

  const getKpiFilteredDoors = () => {
    if (selectedOption) {
      const filterItems = [...doors].filter(
        (door) => door.kpi === selectedOption
      );
      setItems(filterItems);
    } else {
      setItems(doors);
    }
  };

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  const handleDoorsTypeRadio = (e) => {
    setDoors(
      kpiItems.filter((door) => {
        if (e.target.value === "all") {
          return true;
        }
        return door.type === e.target.value;
      })
    );
  };

  return (
    <div className="kpi-container">
      <KpiHeader
        kpiView={kpiView}
        setKpiView={setKpiView}
        selectOptions={kpiSelectOptions}
        filterByType={handleDoorsTypeRadio}
        selectChange={handleSelectChange}
      />

      {kpiView === "kpi-view-1" ? (
        <KpiContentBars items={items} />
      ) : (
        <KpiContentCards items={items} />
      )}
    </div>
  );
};

export default KpiPage;
