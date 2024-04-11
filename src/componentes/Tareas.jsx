import React, { useState } from "react";

function Tareas(props) {
  const [nuevaTarea, setNuevaTarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.crearTarea(nuevaTarea);
    setNuevaTarea(""); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresar nueva tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default Tareas;