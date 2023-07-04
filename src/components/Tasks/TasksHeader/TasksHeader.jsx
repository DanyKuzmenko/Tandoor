import React from "react";
import PropTypes from "prop-types";
import "./TasksHeader.scss";
import ShowMoreButton from '../../Buttons/ShowMoreButton/ShowMoreButton';
import DateInputs from '../../DateInputs/DateInputs';

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


      <DateInputs
        filters = {filters}
        setFilters={setFilters}
        dates={dates}
        setDates={setDates}
        handleInputChange={handleInputChange}
      />
      <ShowMoreButton/>
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
