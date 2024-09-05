import React from "react";
import Table from "react-bootstrap/Table";

function CrudTable5({ equipos, setIdEdit, setIdDelete, handleShow }) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Pais</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {equipos.length === 0 ? (
            <tr>
              <td>No hay equipos</td>
            </tr>
          ) : (
            equipos.map((equipo, index) => {
              return (
                <tr key={index}>
                  <td>{equipo.id}</td>
                  <td>{equipo.nombre}</td>
                  <td>{equipo.pais}</td>
                  <td>
                    <button
                      className="btn btn-primary mx-1"
                      onClick={() => setIdEdit(equipo.id)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger mx-1"
                      onClick={() => {
                        handleShow();
                        setIdDelete(equipo.id);
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </>
  );
}

export default CrudTable5;
