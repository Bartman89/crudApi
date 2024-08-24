import React, { useEffect, useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import CrudForm3 from './CrudForm3'
import CrudTable2 from './CrudTable3'
import {helpFetch} from '../../helpers/helpFetch'



function CrudApi2() {

  
    
   


  const API = helpFetch()
  const [equipos, setEquipos] = useState([])    
  const [editData, setEditData] = useState(null)

  
  
  const addEquipo = (equipo)=>{
    const options ={
      body:equipo
    }  
    
    API.post ("equipos", options).then(response=>{
      if (!response.error) setEquipos ([...equipos, equipo])
    })
    
  }

  const editEquipo = (equipo)=>{
    console.log(equipo.id)
    const options ={
      body:equipo
    }  
    
    API.put ("equipos", options,equipo.id).then(response=>{
      if (!response.error){
        const newEquipos = equipos.map (elemento=> elemento.id === equipo.id ? equipo : elemento)
        setEquipos (newEquipos)
        setEditData(null)
      }
    })
  }

  const deleteEquipo = (equipo)=>{ 
    const isDelete = window.confirm (`Deseas eliminar el equipo con id ${equipo.id}`)
    if (isDelete){
      API.eliminar ("equipos", equipo.id).then (response =>{
        if (!response.error){
          const newEquipos = equipos.filter (elemento => elemento.id !== equipo.id)
          setEquipos(newEquipos)
        }
      })
    }
  }
  
  
useEffect(() => {
  
    API.get("equipos").then((response)=>{
      console.log(response)
      if (!response.error){
        setEquipos(response)
      }

    })

    /*
    try{
        async function peticion(){
            const response = await fetch ("http://localhost:3004/equipos")
            const data = await response.json()
            setEquipos(data)    
            }
    
            peticion()
    }

    catch (error){
console.error ("New error", error)
    }
    
    

    */

}, [])






  return (
    <>
    <br></br>
    <CrudForm3 addEquipo={addEquipo} equipos={equipos} editData={editData} editEquipo={editEquipo}></CrudForm3>
    <br />
    <CrudTable2 equipos={equipos} setEditData={setEditData} deleteEquipo={deleteEquipo}></CrudTable2>
    </>
  )
}

export default CrudApi2