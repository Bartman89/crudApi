import React, { useState, useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const baseDatos = [
  { id: 0, equipo: "Barcelona", pais: "España" },
  { id: 1, equipo: "Real Madrid", pais: "España" },
];

const CrudApp = () => {
  const [editData, setEditData] = useState(null);

  const [equipos, setEquipos] = useState(baseDatos);

  const addEquipo = (equipo) => {
    setEquipos([...equipos, equipo]);
  };

  const editEquipo = () => {
    console.log(setEditData);
  };

  return (
    <>
      <h2>CRUD Lista de equipos de futbol.. </h2>
      <br></br>
      <CrudForm
        addEquipo={addEquipo}
        equipos={equipos}
        editData={editData}
        editEquipo={editEquipo}
      ></CrudForm>
      <br></br>
      <br></br>
      <CrudTable setEditData={setEditData} equipos={equipos}></CrudTable>
    </>
  );
};

export default CrudApp;
