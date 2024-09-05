import React from "react";
import "./estilos.css";

const Estilos = () => {
  const estilo = {
    backgroundColor: "red",
    color: "white",
    padding: 5,
  };

  return (
    <>
      <h1 style={{ backgroundColor: "blue", padding: 5, width: "100%" }}>
        {" "}
        Estilos en la misma Linea
      </h1>
      <h1 style={estilo}> Estilos en Variable</h1>
      <h3 className="sucess">Estilos en hoja externa</h3>
    </>
  );
};

export default Estilos;
