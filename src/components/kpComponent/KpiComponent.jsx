import React, { useEffect, useMemo, useState } from "react";
import "./kpiComponent.scss";
import KpiHeader from "../kpiHeader/kpiHeader";
import { kpiItems, kpiSelectOptions } from "../../utils/constants";
import KpiContentBars from "../kpiContent/kpiContentBars/kpiContentBars";
import KpiContentCards from "../kpiContent/kpiContentCards/kpiContentCards";

const KpiComponent = () => {
  const [items, setItems] = useState([]);
  const [doors, setDoors] = useState(kpiItems);
  const [selectedOption, setSelectedOption] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [lastFilter, setLastFilter] = useState({
    doorType: "",
    kpiType: "Все KPI",
  });
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
    ``;
    if (value) {
      setLastFilter({ ...lastFilter, kpiType: value });
    } else {
      setLastFilter({ ...lastFilter, kpiType: "Все KPI" });
    }
  };

  const handleDoorsTypeRadio = (e) => {
    setDoors(
      kpiItems.filter((door) => {
        if (e.target.value === "all") {
          setLastFilter({ ...lastFilter, doorType: "" });
          return true;
        }
        setLastFilter({ ...lastFilter, doorType: e.target.value });
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
        lastFilter={lastFilter}
        setLastFilter={setLastFilter}
      />

      {kpiView === "kpi-view-1" ? (
        <KpiContentBars items={items} />
      ) : (
        <KpiContentCards items={items} />
      )}
    </div>
  );
};

export default KpiComponent;
