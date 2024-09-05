import React, { useEffect, useState } from "react";
import CrudTable4 from "./CrudTable4";
import CrudForm4 from "./CrudForm4";
import Loader from "./Loader";
import Message from "./Message";

import { helpFetch } from "../../helpers/helpFetch4";

function CrudApi4() {
  const [equipos, setEquipos] = useState(null);

  const [idEdit, setIdEdit] = useState(null);

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  const API = helpFetch();

  useEffect(() => {
    setLoading(true);

    API.get("equipos").then((response) => {
      console.log(response);

      if (!response.error) {
        setEquipos(response);

        setErrorMessage(null);
      } else {
        setErrorMessage(response.statusText);
      }
      setLoading(false);
    });
  }, []);

  const addEquipo = (equipo) => {
    setLoading(true);

    const options = {
      body: equipo,
    };

    API.post("equipos", options).then((response) => {
      if (!response.error) {
        setEquipos([...equipos, equipo]);
        setErrorMessage(null);
      } else {
        setEquipos(null);
        setErrorMessage(response.statusText);
      }

      setLoading(false);
    });
  };

  const editEquipo = (equipo) => {
    setLoading(true);
    const options = {
      body: equipo,
    };

    API.put("equipos", options, equipo.id).then((response) => {
      if (!response.error) {
        const newEquipos = equipos.map((elemento, index) => {
          return elemento.id === equipo.id ? equipo : elemento;
        });
        setEquipos(newEquipos);
        setIdEdit(null);
        setErrorMessage(null);
      } else {
        setEquipos(null);
        setErrorMessage(response.statusText);
      }

      setLoading(false);
    });
  };

  const deleteEquipo = (idDelete) => {
    const respuesta = window.confirm(
      `Seguro deseas eliminar al equipo ${idDelete}`
    );
    if (respuesta) {
      setLoading(true);

      const options = {
        method: "DELETE",
      };
      API.eliminar("equipos", options, idDelete).then((response) => {
        if (!response.error) {
          const newEquipos = equipos.filter(
            (elemento) => elemento.id != idDelete
          );
          setEquipos(newEquipos);
          setIdEdit(null);
          setErrorMessage(null);
        } else {
          setEquipos(null);
          setErrorMessage(response.statusText);
        }
        setLoading(false);
      });
    }
  };

  return (
    <>
      <br />

      <CrudForm4
        equipos={equipos}
        addEquipo={addEquipo}
        editEquipo={editEquipo}
        idEdit={idEdit}
        setIdEdit={setIdEdit}
      ></CrudForm4>
      <br></br>
      <br></br>
      {loading ? (
        <Loader></Loader>
      ) : (
        equipos && (
          <CrudTable4
            equipos={equipos}
            setIdEdit={setIdEdit}
            deleteEquipo={deleteEquipo}
          ></CrudTable4>
        )
      )}
      <br />

      {errorMessage && <Message text={errorMessage}></Message>}
    </>
  );
}

export default CrudApi4;
