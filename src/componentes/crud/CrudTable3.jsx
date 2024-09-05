import Table from "react-bootstrap/Table";

function CrudTable2({ equipos, setEditData, deleteEquipo }) {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Equipo</th>
            <th>Pais</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {equipos.length === 0 ? (
            <tr>
              <td>No hay Datos</td>
            </tr>
          ) : (
            equipos.map((equipo, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{equipo.nombre}</td>
                  <td>{equipo.pais}</td>
                  <td>
                    <button
                      className="btn btn-info mx-1"
                      onClick={() => {
                        setEditData(equipo);
                      }}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger mx-1"
                      onClick={() => deleteEquipo(equipo)}
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

export default CrudTable2;
