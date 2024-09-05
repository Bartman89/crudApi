import React from "react";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const CrudTable = ({ equipos, setEditData }) => {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>Pais</th>
            <th>Opciones</th>
          </tr>
        </thead>

        {equipos.length === 0 ? (
          <td>No hay Datos</td>
        ) : (
          equipos.map((equipo, index) => {
            return (
              <tbody key={index}>
                <tr key={index}>
                  <td>{equipo.id}</td>
                  <td>{equipo.equipo}</td>
                  <td>{equipo.pais}</td>
                  <td>
                    <Button
                      onClick={() => setEditData(equipo)}
                      style={{ marginLeft: "5px" }}
                      variant="primary"
                    >
                      Editar
                    </Button>
                    <Button style={{ marginLeft: "5px" }} variant="primary">
                      Eliminar
                    </Button>
                  </td>
                </tr>
              </tbody>
            );
          })
        )}
      </Table>
    </>
  );
};

export default CrudTable;
