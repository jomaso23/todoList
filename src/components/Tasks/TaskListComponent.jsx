import React, { useEffect, useState } from "react";
//import Task from "./Task";
import TaskComponent from "./Task";
import { Task } from "./task.class";
import { LEVELS } from "./levels.enum";

//import TaskTableComponent from "./TaskTable";

const TaskListComponent = ({ anotherTask }) => {
  const defaultTask1 = new Task(
    "Estudiar React",
    "a darle atomos",
    true,
    LEVELS.URGENT
  );

  const [tasks, setTask] = useState([defaultTask1]);

  useEffect(() => {
    console.log("estoy en list");
    console.log(anotherTask);
    // setTask(anotherTask);
  }, [tasks]);
  return (
    <table>
      <theader>
        <tr>
          <th>Titulo</th>
          <th>Descripcion</th>
          <th>Prioridad</th>
          <th>Acciones</th>
        </tr>
      </theader>
      <tbody>
        {tasks.map((task, index) => {
          return <TaskComponent key={index} task={task}></TaskComponent>;
        })}
      </tbody>
    </table>
  );
};

export default TaskListComponent;
