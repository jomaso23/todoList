import React, { useState } from "react";
import { LEVELS } from "../Tasks/levels.enum";
import { Task } from "../Tasks/task.class";
import "../../Styles/appStyles.scss";

const AddTaskForm = ({ add }) => {
  const [texto1, setTexto1] = useState("");
  const [texto2, setTexto2] = useState("");
  const [opcion, setOpcion] = useState(LEVELS.NORMAL);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = new Task(texto1, texto2, false, opcion);
    add(newTask);
    // guardarDatos(texto1, texto2, opcion);
  };

  // const guardarDatos = (texto1, texto2, opcion) => {
  // Aquí puedes hacer lo que desees con los datos recibidos
  // Por ejemplo, podrías guardarlos en un estado global o enviarlos a un servidor
  // const datos = {
  //   texto1: texto1,
  //   texto2: texto2,
  //   opcion: opcion,
  // };
  // const newTask = new Task(
  //     texto1,
  //     texto2,
  //     false,
  //     opcion,
  // );

  // console.log(datos); // Mostrar los datos en la consola para verificar
  // Aquí puedes enviar los datos a un servidor o realizar otras operaciones con ellos
  //   };

  return (
    <form className="form-control    GStyle2" onSubmit={handleSubmit}>
      <label htmlFor="input1">Titutlo</label>
      <input
        className="form-control GStyle2   "
        type="text"
        id="input1"
        name="texto1"
        placeholder="ingresa Titulo de la tarea"
        value={texto1}
        required
        onChange={(e) => setTexto1(e.target.value)}
      />
      <br />
      <label htmlFor="input2">Descripcion</label>
      <input
        className="form-control GStyle2  "
        type="text"
        id="input2"
        name="texto2"
        placeholder="ingresa Descripcion de la tarea"
        value={texto2}
        required
        onChange={(e) => setTexto2(e.target.value)}
      />
      <br />
      <label htmlFor="opciones">Selecciona una opción:</label>
      <select
        className="form-control GStyle2  "
        id="opciones"
        name="opcion"
        value={opcion}
        onChange={(e) => setOpcion(e.target.value)}
      >
        <option value={LEVELS.NORMAL}>NORMAL</option>
        <option value={LEVELS.URGENT}>URGENT</option>
        <option value={LEVELS.BLOCKING}>BLOCKING</option>
      </select>
      <br />
      <button className="btn btn-primary btnStyle" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default AddTaskForm;
