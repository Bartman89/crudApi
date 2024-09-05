import React, { useEffect, useState } from "react";

import { helpFetch } from "../../helpers/helpFetch6";

import CrudForm6 from "./CrudForm6";
import CrudTable6 from "./CrudTable6";
import Loader3 from "./Loader3";
import Message3 from "./Message3";
import VentanaModal from "./VentanaModal";

function CrudApi6() {
  //Hooks de estado

  const [equipos, setEquipos] = useState(null);

  const [idEdit, setIdEdit] = useState(null);

  const [idDelete, setIdDelete] = useState(null);

  const [loading, setLoading] = useState(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Variables

  const API = helpFetch();

  // Hooks de estado

  useEffect(() => {
    setLoading(true);

    API.get("equipos").then((response) => {
      if (!response.error) {
        setEquipos(response);
        setErrorMessage(null);
      } else {
        
        setErrorMessage(response.statusText);
      
      }

      setLoading(false);
    });
  }, []);

  //Funciones

  const addEquipo = (equipo) => {
    setLoading(true);

    const options = {
      body: equipo,
      method: "POST",
    };

    API.post("equipos", options).then((response) => {
      if (!response.error) {
        setEquipos([...equipos, equipo]);
        setErrorMessage(null);
      } else {
        setErrorMessage(response.statusText);
      }
    });

    setLoading(false);
  };

  const editEquipo = (equipo) => {
    setLoading(true);

    const options = {
      body: equipo,
      method: "PUT",
    };

    API.put("equipos", options, equipo.id).then((response) => {
      if (!response.error) {
        setErrorMessage(null);
        const newEquipos = equipos.map((elemento) =>
          elemento.id === equipo.id ? equipo : elemento
        );

        setEquipos(newEquipos);

        setIdEdit(null);

        setErrorMessage(null);
      } else {
        setErrorMessage(response.statusText);
      }
    });

    setLoading(false);
  };

  const manejodeClick = () => {
    handleClose();
    eliminarEquipo(idDelete);
  };

  const eliminarEquipo = (id) => {
    const options = {
      method: "DELETE",
    };

    setLoading(true);

    API.eliminarEquipo("equipos", options, idDelete).then((response) => {
      if (!response.error) {
        const newEquipos = equipos.filter((equipo) => equipo.id != id);

        setEquipos(newEquipos);

        setErrorMessage(null);
      } else {
        setErrorMessage(response.statusText);
      }
    });

    setLoading(false);
  };

  return (
    <>
      
        <br />
        <br />
        <CrudForm6
          equipos={equipos}
          addEquipo={addEquipo}
          editEquipo={editEquipo}
          idEdit={idEdit}
          setIdEdit={setIdEdit}
        ></CrudForm6>
        <br />
        <br />

        {loading ? (
          <Loader3></Loader3>
        ) : errorMessage ? (
          <Message3 text={errorMessage}></Message3>
        ) : (
          <CrudTable6
            handleShow={handleShow}
            setIdDelete={setIdDelete}
            equipos={equipos}
            setIdEdit={setIdEdit}
          ></CrudTable6>
        )}

        <VentanaModal
          idDelete={idDelete}
          manejodeClick={manejodeClick}
          show={show}
          handleClose={handleClose}
        ></VentanaModal>
      
    </>
  );
}

export default CrudApi6;
