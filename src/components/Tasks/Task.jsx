import React from "react";
import { LEVELS } from "./levels.enum";
import { Task } from "./task.class";
import PropTypes from "prop-types";
//import { Task } from "./task.class";

const TaskComponent = ({ task, complete, remove }) => {
  /*logica del boton LEVEL*/
  const taskLevelBadge = () => {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );

      default:
        break;
    }
  };
  /*funcion que devuelve un Icono */
  const taskCompletedtIcon = () => {
    return task.completed ? (
      <i
        onClick={() => complete(task)}
        className="bi bi-toggle-on task-cursor"
        style={{ color: "green" }}
      />
    ) : (
      <i
        onClick={() => complete(task)}
        className="bi bi-toggle-off task-cursor"
        style={{ color: "grey" }}
      />
    );
  };
  const completedStyle = {
    fontWeight: "bold",
    color: "grey",
    textDecoration: "line-through",
  };

  const pendingStyle = {
    fontWeight: "bold",
    color: "tomato",
  };

  return (
    <tr
      className="fw-normal l-s "
      style={task.completed ? completedStyle : pendingStyle}
    >
      <td className="align-middle">{task.titulo}</td>
      <td className="align-middle">{task.descripcion}</td>
      <td className="align-middle">{taskLevelBadge()}</td>
      <td className="align-middle">
        {taskCompletedtIcon()}
        <i
          onClick={() => remove(task)}
          className="bi bi-trash task-cursor"
          style={{ color: "tomato" }}
        ></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;
