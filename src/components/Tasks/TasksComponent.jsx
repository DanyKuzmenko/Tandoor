import React, { useEffect, useState } from "react";
import TasksHeader from "./TasksHeader/TasksHeader";
import { constTasks } from "../../utils/constants";
import TasksContent from "./TasksContent/TasksContent";

const TasksComponent = () => {
  const [filters, setFilters] = useState({
    from: "1900 01 01",
    to: "2099 01 01",
    search: "",
  });
  const [dates, setDates] = useState({ from: "", to: "" });
  const [tasks, setTasks] = useState(constTasks);
  useEffect(() => {
    //filtering
    if (filters.from) {
      console.log(
        constTasks.filter((task) => {
          return +new Date(task.dateCreate) - Date.parse(filters.from);
        })
      );
      setTasks(
        constTasks.filter((task) => {
          return (
            +new Date(task.dateCreate) > Date.parse(filters.from) &&
            +new Date(task.dateCreate) < Date.parse(filters.to) &&
            task.name.includes(filters.search)
          );
        })
      );
    }
  }, [filters, constTasks]);
  const handleInputChange = (event) => {
    const regex = new RegExp(
      "^(3[01]|[12][0-9]|0?[1-9])(\\.)(1[0-2]|0?[1-9])\\2[0-9]{4}$"
    );
    const setDatesFilters = (dateFilter) => {
      if (event.target.id === dateFilter) {
        setDates({ ...dates, [dateFilter]: event.target.value });
        if (regex.test(event.target.value)) {
          setFilters({
            ...filters,
            [dateFilter]: event.target.value.split(".").reverse().join(" "),
          });
        } else if (!event.target.value) {
          setFilters({
            ...filters,
            [dateFilter]: [dateFilter] == "from" ? "1900 01 01" : "2099 01 01",
          });
        }
      }
    };
    setDatesFilters("from");
    setDatesFilters("to");

    if (event.target.id === "search") {
      setFilters({ ...filters, search: event.target.value });
    }
  };
  return (
    <div>
      <TasksHeader dates={dates} handleInputChange={handleInputChange} />
      <TasksContent tasks={tasks} />
    </div>
  );
};

export default TasksComponent;
