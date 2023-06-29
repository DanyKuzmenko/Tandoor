import React from "react";
import PropTypes from "prop-types";
import "./TasksHeader.scss";

const TasksHeader = ({
  filters,
  setFilters,
  setDates,
  dates,
  handleInputChange,
}) => {
  return (
    <div className="tasks__container">
      <h2 className="tasks__header">Задачи</h2>
      <input
        type="text"
        className="tasks__search"
        placeholder="Поиск задач..."
        id="search"
        value={dates?.search}
        onChange={(event) => handleInputChange(event)}
      />
      <label className="tasks__search__image" htmlFor="search"></label>
      <input
        maxLength={10}
        onKeyDown={(event) => {
          if (event.key.match(/\D/) && event.key !== event.code) {
            event.preventDefault();
          } else if (
            (event.key.match(/\d/) && event.target.value.length === 2) ||
            (event.target.value.length === 5 && event.key.match(/\d/))
          ) {
            event.target.value += ".";
          }
        }}
        id="from"
        placeholder="От"
        value={dates?.from}
        onChange={(event) => handleInputChange(event)}
        className="tasks__search__date"
        type="text"
      />
      <button
        onClick={() => {
          setDates({ ...dates, from: "" });
          setFilters({ ...filters, from: "1900 01 01" });
        }}
        className="tasks__search__date__clean"
      ></button>
      <span className="tasks__search__date__separator"></span>
      <input
        maxLength={10}
        onKeyDown={(event) => {
          if (event.key.match(/\D/) && event.key !== event.code) {
            event.preventDefault();
          } else if (
            (event.key.match(/\d/) && event.target.value.length === 2) ||
            (event.target.value.length === 5 && event.key.match(/\d/))
          ) {
            event.target.value += ".";
          }
        }}
        id="to"
        placeholder="До"
        onChange={(event) => handleInputChange(event)}
        value={dates?.to}
        className="tasks__search__date"
        type="text"
      />
      <button
        onClick={() => {
          setDates({ ...dates, to: "" });
          setFilters({ ...filters, to: "2099 01 01" });
        }}
        className="tasks__search__date__clean"
      ></button>
      <button className="tasks__search__details">Подробнее</button>
    </div>
  );
};

TasksHeader.propTypes = {
  dates: PropTypes.object,
  handleInputChange: PropTypes.func,
  setDates: PropTypes.func,
  filters: PropTypes.object,
  setFilters: PropTypes.func,
};

export default TasksHeader;
