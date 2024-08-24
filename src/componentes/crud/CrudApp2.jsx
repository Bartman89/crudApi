import React, { useState } from 'react'
import CrudForm2 from './CrudForm2'
import CrudTable2 from './CrudTable2'

function CrudApp2() {

  const baseDatos =[
    {id:0, nombre:"Real Madrid", pais:"España"},
    {id:1, nombre:"Bayern Munich", pais:"Alemania"}
  ]

  const [equipos, setEquipos] = useState(baseDatos)

  const addEquipo = (equipo)=>{
    setEquipos([...equipos,equipo])
  }

  const [editData, setEditData] = useState(null)

  const editEquipo = (equipo)=>{
    const newEquipos = equipos.map ((elemento)=>elemento.id === equipo.id ? equipo : elemento )

    setEquipos(newEquipos)
    setEditData(null)
  }

  const deleteEquipo = (equipo)=>{
    const isDelete = window.confirm (`Realmente deseas eliminar el equipo con id ${equipo.id}`)

    if (isDelete){
      const newEquipos = equipos.filter((elemento)=>elemento.id  !== equipo.id )
    console.log(equipos)
    console.log(newEquipos)
    
    setEquipos(newEquipos)

    }

    
  }

  return (
    <>
    <br></br>
    <CrudForm2 equipos={equipos} addEquipo={addEquipo} editData={editData} editEquipo={editEquipo} ></CrudForm2>
    <br></br>
    <CrudTable2 deleteEquipo={deleteEquipo}  equipos={equipos} setEditData={setEditData}></CrudTable2>

    </>
  )
}

export default CrudApp2