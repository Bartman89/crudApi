import React, { useEffect, useState } from 'react'

function CrudForm2({equipos, addEquipo, editData, editEquipo}) {

  const [formData, setFormData] = useState({
    id:equipos.length,
    nombre:"",
    pais:""
  })

  useEffect(() => {
    setFormData({
    id:equipos.length,
    nombre:"",
    pais:""
    })
  }, [equipos])

  useEffect(() => {
    if (editData === null){
      setFormData({
        id:equipos.length,
        nombre:"",
        pais:""
        })
    }
    else{
      setFormData(editData)
    }


  }, [editData])
  
  
  const handleChange =(e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(formData.nombre !== "" && formData.pais !== "")
      if (editData !== null){
     editEquipo(formData)
    }

    else{
      addEquipo(formData)
    }

    else{
      alert("Ingresa un equipo y pais")
    }
    
    
    
  }



  return (
    <>
    <form onSubmit={handleSubmit}>
      <label className='mx-2' htmlFor="nombre">Nombre</label>
      <input value={formData.nombre} onChange={handleChange} name="nombre" placeholder='Ingresa equipo'></input>
      <label className='mx-2' htmlFor="pais">Pais</label>
      <input value={formData.pais} onChange={handleChange}  name="pais" type="text" placeholder='Ingresa Pais' />
      <input className='btn btn-success mx-2' type="submit" value="Enviar" />
      <button className='btn btn-warning' type='button' onClick={()=> setFormData({
    id:equipos.length,
    nombre:"",
    pais:""
    })}>Cancelar</button>
    </form>
    </>
  )
}

export default CrudForm2