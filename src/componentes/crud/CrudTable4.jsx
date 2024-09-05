import React from "react";
import Table from "react-bootstrap/Table";

function CrudTable4({ equipos, setIdEdit, deleteEquipo }) {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Equipo</th>
            <th>Pais</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {equipos.length === 0 ? (
            <tr>
              <td>No hay equipos..</td>
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
                      onClick={() => {
                        setIdEdit(equipo.id);
                      }}
                      className="btn btn-primary mx-1"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => {
                        deleteEquipo(equipo.id);
                      }}
                      className="btn btn-danger mx-1"
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

export default CrudTable4;
