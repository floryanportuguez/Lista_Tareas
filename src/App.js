import React, { useEffect, useState } from "react";
import "./App.css";
import Tareas from "./componentes/Tareas";

function App() {
  const [NuevoItem, setNuevoItem] = useState([
    { name: "Revisar material x", done: false },
    { name: "Revisar material y", done: false },
    { name: "Revisar material z", done: false },
  ]);

  function crearTarea(nuevaTarea) {
    setNuevoItem([...NuevoItem, { name: nuevaTarea, done: false }]);
  }

  const eliminar = (index) => {
    setNuevoItem(NuevoItem.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("input", JSON.stringify(NuevoItem));
  }, [NuevoItem]);

  return (
    <div className="App">
      <Tareas crearTarea={crearTarea} />

      <div className="Container">
        {NuevoItem.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>{" "}
            <a
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => eliminar(index)}
            >
              Eliminar
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;