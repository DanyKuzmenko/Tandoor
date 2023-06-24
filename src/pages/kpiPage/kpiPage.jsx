import React, {useState} from "react";
import './kpiPage.scss';
import KpiContent from "../../components/kpiContentComponent";
import KpiHeader from "../../components/kpiHeaderComponent";

const KpiPage = () => {
    const items = [
        {name: 'Адель ВХ', percent: 99, type: "entrance"},
        {name: 'Урбан ВХ', percent: 95, type: "interior"},
        {name: 'Доканто серый бархат ВХ', percent: 86, type: "interior"},
        {name: 'Сити зеркало Метал-Метал', percent: 75, type: "entrance"},
        {name: 'Лу ВХ', percent: 69, type: "interior"},
        {name: 'Сицилия ВХ', percent: 58, type: "interior"},
        {name: 'Гладкая ВХ', percent: 45, type: "interior"},
        {name: 'Американская решетка ВХ', percent: 37, type: "interior"},
        {name: 'Барокко', percent: 26, type: "entrance"},
        {name: 'Лиственница ВХ', percent: 20, type: "interior"},
        {name: 'Лиственница ВХ', percent: 18, type: "interior"},
        {name: 'Лиственница ВХ', percent: 15, type: "interior"},
        {name: 'Лиственница ВХ', percent: 12, type: "entrance"},
        {name: 'Лиственница ВХ', percent: 5, type: "entrance"},
    ]
     const selectOptions = [
        {value: "KPI1", label: "KPI № 1"},
        {value: "KPI2", label: "KPI № 2"},
        {value: "KPI3", label: "KPI № 3"}
    ]
    const [doors, setDoors] = useState(items);
    const handleDoorsTypeRadio = (ev) => {
        console.log(ev.target)
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
                selectOptions={selectOptions}
                filterByType={handleDoorsTypeRadio}
            />

            <KpiContent
                items={doors}
            />
        </div>
    )
};

export default KpiPage;