import React, { useState } from "react";
import "./SearchBlock.scss";
import Input from "../Input/Input";
import Select from "react-select";

const options = [
  {
    value: "Текущий KPI и мотивация",
    label: "Текущий KPI и мотивация",
  },
  {
    value: "Другой KPI",
    label: "Другой KPI",
  },
  {
    value: "Третий KPI",
    label: "Третий KPI",
  },
];

const SearchBlock = () => {
  const [selectOption, setSelectOption] = useState("");

  const handleSelectOption = (e) => {
    setSelectOption(e.value);
  };

  console.log("s", selectOption);

  return (
    <div className="search-block">
      <Select
        className="search-block__select"
        defaultValue={options[0]}
        options={options}
        value={selectOption}
        onChange={(e) => handleSelectOption(e)}
        unstyled={true}
      />
      <div className="search-block__container">
        <Input />
        <button className="search-block__button">Подробнее</button>
      </div>
    </div>
  );
};

export default SearchBlock;
