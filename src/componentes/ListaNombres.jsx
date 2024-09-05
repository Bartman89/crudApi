import React, { useState } from "react";

const ListaNombres = () => {
  const [nombre, setNombre] = useState("");
  const [nombres, setNombres] = useState([]);

  const guardar = () => {
    setNombres([...nombres, nombre]);
    setNombre("");
  };

  return (
    <div>
      <p>Ingresa un Nombre</p>
      <input
        type="text"
        onChange={(event) => {
          setNombre(event.target.value);
        }}
      />
      <button onClick={guardar}>Enviar</button>
      <ul>
        {nombres.map((nombre, index) => {
          return <li key={index}>{nombre}</li>;
        })}
      </ul>
    </div>
  );
};

export default ListaNombres;
