import React from "react";
import "./TasksContent.scss";
import PropTypes from "prop-types";
const TasksContent = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => {
        return task.name;
      })}
    </div>
  );
};
TasksContent.propTypes = {
  tasks: PropTypes.array,
};
export default TasksContent;
