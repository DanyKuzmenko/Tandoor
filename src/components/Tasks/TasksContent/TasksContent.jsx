import React from "react";
import "./TasksContent.scss";
import PropTypes from "prop-types";
const TasksContent = ({ tasks }) => {
  return tasks.length > 0 ? (
    <div className="tasks-content">
      <div className="tasks-content__item">
        <div className="tasks-content__item__id">№</div>
        <div className="tasks-content__item__name">Наименование задачи</div>
        <div className="tasks-content__item__date">Дата создания</div>
        <div className="tasks-content__item__date">Дата окончания</div>
      </div>
      {tasks.map((task) => {
        const dateCreateObj = new Date(task.dateCreate);
        const dateEndObj = new Date(task.dateEnd);

        return (
          <div
            key={task.id}
            className={`tasks-content__item ${
              task.active ? "tasks-content__item_active" : ""
            }`}
          >
            <div className="tasks-content__item__id">{task.id}</div>
            <div className="tasks-content__item__name">{task.name}</div>
            <div className="tasks-content__item__date">
              {("0" + dateCreateObj.getDate()).slice(-2) +
                "." +
                ("0" + (dateCreateObj.getMonth() + 1)).slice(-2) +
                "." +
                dateCreateObj.getFullYear() +
                " " +
                dateCreateObj.getHours() +
                ":" +
                dateCreateObj.getMinutes()}
            </div>
            <div className="tasks-content__item__date">
              {("0" + dateCreateObj.getDate()).slice(-2) +
                "." +
                ("0" + (dateEndObj.getMonth() + 1)).slice(-2) +
                "." +
                dateEndObj.getFullYear() +
                " " +
                dateEndObj.getHours() +
                ":" +
                dateEndObj.getMinutes()}
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <>
      <div className="tasks_not-found">Задачи не найдены</div>
    </>
  );
};
TasksContent.propTypes = {
  tasks: PropTypes.array,
};
export default TasksContent;
