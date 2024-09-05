import React, { useEffect, useState } from "react";
import CrudForm5 from "./CrudForm5";
import CrudTable5 from "./CrudTable5";
import Loader2 from "./Loader2";
import { helpFetch } from "../../helpers/helpFetch5";
import Message2 from "./Message2";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CrudApi5() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(false);

  const API = helpFetch();

  const [equipos, setEquipos] = useState(null);

  useEffect(() => {
    setLoading(true);
    API.get("equipos").then((response) => {
      if (!response.error) {
        setEquipos(response);
        setErrorMessage(null);
      } else {
        setErrorMessage(response.statusText);
      }
    });

    setLoading(false);
  }, []);

  const [errorMessage, setErrorMessage] = useState(false);

  const [idEdit, setIdEdit] = useState(null);
  const [idDelete, setIdDelete] = useState(null);

  const addEquipo = (equipo) => {
    setLoading(true);

    const options = {
      method: "POST",
      body: equipo,
    };

    API.post("equipos", options).then((response) => {
      if (!response.error) {
        setEquipos([...equipos, equipo]);
        setErrorMessage(null);
      } else {
        setErrorMessage(response.statusText);
      }

      setLoading(false);
    });
  };

  const editEquipo = (equipo) => {
    setLoading(true);
    const options = {
      body: equipo,
      method: "PUT",
    };

    API.put("equipos", options, `${equipo.id}`).then((response) => {
      if (!response.error) {
        const newEquipos = equipos.map((elemento, index) => {
          return elemento.id === equipo.id ? equipo : elemento;
        });

        setEquipos(newEquipos);

        setIdEdit(null);
        setErrorMessage(null);
      } else {
        setErrorMessage(response.statusText);
      }

      setLoading(false);
    });
  };

  const deleteEquipo = (id) => {
    const options = {
      method: "DELETE",
    };

    setLoading(true);

    API.eliminar("equipos", options, id).then((response) => {
      if (!response.error) {
        const newEquipos = equipos.filter((equipo) => equipo.id != id);

        setEquipos(newEquipos);

        setErrorMessage(null);

        setShow(false);
      } else {
        setErrorMessage(response.statusText);
        setShow(false);
      }
    });

    setLoading(false);
  };

  const manejarClick = () => {
    deleteEquipo(idDelete);
  };

  return (
    <>
      <br />
      {equipos && (
        <CrudForm5
          equipos={equipos}
          editEquipo={editEquipo}
          idEdit={idEdit}
          addEquipo={addEquipo}
        ></CrudForm5>
      )}
      <br />
      {loading ? (
        <Loader2></Loader2>
      ) : errorMessage ? (
        <Message2 text={errorMessage}></Message2>
      ) : (
        equipos && (
          <CrudTable5
            setIdDelete={setIdDelete}
            handleShow={handleShow}
            setIdEdit={setIdEdit}
            equipos={equipos}
          ></CrudTable5>
        )
      )}

      {show && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Mensaje del Sistema</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Estas seguro de eliminar al equipo {`${idDelete}`}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => deleteEquipo(idDelete)}>
              Eliminar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default CrudApi5;
