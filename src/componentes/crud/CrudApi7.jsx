import React, { useEffect } from "react";
import { useState } from "react";
import CrudForm7 from "./CrudForm7";
import CrudTable7 from "./CrudTable7";

import { helpFetch } from "../../helpers/helpFetch7";
import VentanaModal2 from "./VentanaModal2";
import Loader4 from "./Loader4";
import Message4 from "./Message4";

function CrudApi7() {




  const API = helpFetch();

  // HOOKS DE ESTADO

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Hook para manejar el estado de los equipos
  const [equipos, setEquipos] = useState(null);

  //Hook para manejar el estado del id del equipo a editar
  const [idEdit, setIdEdit] = useState(null);

  const [nameDelete, setNameDelete] = useState(null)

  const [idDelete, setIdDelete] = useState(null);

  const [loading, setLoading] = useState(null)

  const [errorMessage, setErrorMessage] = useState(null)

  //HOOKS DE EFECTO

  //Hook para llamar la API y cargar equipos

  useEffect(() => {
    setLoading(true)
    API.get("equipos").then((response) => {
      if (!response.error) {
        setEquipos(response);
        setErrorMessage(null)
      }

      else{
        setErrorMessage(response.statusText)
      }

    });
    setLoading(false)
  }, []);

  //FUNCIONES

  //Funcion para añadir equipo
  const addEquipo = (equipo) => {
    setLoading(true)
    const options = {
      body: equipo,
      method: "POST",
    };

    API.post("equipos", options).then((response) => {
      if (!response.error) {
        setEquipos([...equipos, equipo]);
        setErrorMessage(null)
      }

      else{
        setErrorMessage(response.statusText)
      }
    });
    setLoading(false)
  };

  //Funcion para editar equipo
  const editEquipo = (equipo) => {

    setLoading(true)
    const options = {
      body: equipo,
      method: "PUT",
    };

    API.put("equipos", options, equipo.id).then((response) => {
      if (!response.error) {
        const newEquipos = equipos.map((elemento) => {
          return elemento.id === equipo.id ? equipo : elemento;
          
        });
        setErrorMessage(null)
        setEquipos(newEquipos);
      }

      else{
        setErrorMessage(response.statusText)
      }
    });

    setLoading(false)
  };

  //Funcion para eliminar equipo

  const eliminarEquipo = (id) => {
    
    const options = {
      method: "DELETE",
    };

    API.eliminarEquipo("equipos", options, id).then((response) => {
      if (!response.error) {
        const newEquipos = equipos.filter((equipo) => {
          return equipo.id != id;
        });

        setErrorMessage(null)
        setEquipos(newEquipos);
      }

      else{
        setErrorMessage(response.statusText)
      }
    });

    
  };

  const manejoDeClick = ()=>{
    
    eliminarEquipo(idDelete)
    handleClose();
    setIdDelete(null)
  }

  return (
    <>
      <div className="container">
        <br></br>
        <CrudForm7
          equipos={equipos}
          addEquipo={addEquipo}
          idEdit={idEdit}
          setIdEdit={setIdEdit}
          editEquipo={editEquipo}
        ></CrudForm7>
        <br></br>
        {loading ? <Loader4></Loader4> : errorMessage ? <Message4 text={errorMessage}></Message4> : <CrudTable7
          equipos={equipos}
          setIdEdit={setIdEdit}
          eliminarEquipo={eliminarEquipo}
          handleShow={handleShow}
          setIdDelete={setIdDelete}
          setNameDelete={setNameDelete}
        ></CrudTable7>}

        <VentanaModal2 handleClose={handleClose} show={show} manejoDeClick={manejoDeClick} nameDelete={nameDelete}></VentanaModal2>
      </div>
    </>
  );
}

export default CrudApi7;
