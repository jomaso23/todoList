import React, { useState } from "react";
import TaskComponent from "../Tasks/Task";
import AddTaskForm from "../Form/AddTaskForm";

const TaskCard = () => {
  const [tasks, setTasks] = useState([]);
  /*funciones modificadoras de tareas */

  const addTask = (task) => {
    const temptask = [...tasks];
    temptask.push(task);
    setTasks(temptask);
    console.log("estoy en card");
    console.log(task);
  };
  const completeTask = (task) => {
    console.log("Task completed:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    /*esta funcion me marca como completada una tarea seleccionando el icono de TOOGLE-BTN ubicado al fina de la tarea
        , esta funcion se llama desde TASK */
    setTasks(tempTasks);
  };
  const removeTask = (task) => {
    console.log("Task deleted:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
    /*esta funcion me remueve una tarea seleccionando el icono de TACHO DE BASURA, esta funcion se llama
        desde TASK*/
  };
  //const Cardstyle = {};
  return (
    <div>
      <div className="card  GStyle2 " style={{ height: "70vh" }}>
        <div className="card-header"></div>
        <div className="card-body " style={{ overflow: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Descripcion</th>
                <th>Prioridad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => {
                return (
                  <TaskComponent
                    key={index}
                    task={task}
                    complete={completeTask}
                    remove={removeTask}
                  ></TaskComponent>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="card-footer  ">
          <AddTaskForm add={addTask} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
