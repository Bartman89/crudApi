import React from 'react'
import Table from 'react-bootstrap/Table';


function CrudTable({equipos, setEditId, setidDelete, handleShow, setNameDelete}) {
  return (
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Pais</th>
        <th>Opciones</th>
      </tr>
    </thead>
    <tbody>
      {equipos &&  equipos.map ((equipo,index)=>{return(
      <tr key={index}>
        <td>{equipo.id}</td>
        <td>{equipo.nombre}</td>
        <td>{equipo.pais}</td>
        <td>
          <button onClick={()=>{setEditId(equipo.id)}} className='btn btn-primary mx-1'>Editar</button>
          <button onClick={()=>{setidDelete(equipo.id); handleShow(); setNameDelete(equipo.nombre) }} className='btn btn-danger mx-1'>Eliminar</button>
        </td>
      </tr>
      )}) }
    </tbody>
  </Table>
  )
}

export default CrudTable