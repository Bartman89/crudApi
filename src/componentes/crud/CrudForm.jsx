import React, {useState, useEffect} from 'react'

const CrudForm = ({equipos, addEquipo, editData, editEquipo}) => {

  useEffect(() => {
    console.log(editData)
  }, [editData])
  

  const [formData, setFormData] = useState({
    id:equipos.length ,
    equipo: "",
    pais: ""
  })
  
  useEffect(() => {
    if (editData !== null ){
      setFormData(editData)
    }
    else{
    setFormData({
      id:equipos.length ,
    equipo: "",
    pais: ""

    })
      
    }

  }, [editData])
  
  

  const handleSubmit = (e)=>{
    e.preventDefault()

    addEquipo(formData)

    setFormData({
    id:equipos.length ,    
    equipo: "",
    pais: ""
    })
  }

  const handleChange =(e)=>{
      
    setFormData(
      {
        ...formData,
        [e.target.name]: e.target.value

      }
    )
      
  }



  return (
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor='equipo'>Equipo</label>    
    <input type="text" name='equipo' onChange={handleChange} value={formData.equipo}/>
    <label htmlFor='pais'>Pais</label>    
    <input type="text" name='pais' onChange={handleChange} value={formData.pais}/>
    <input type="submit" value="Agregar" />
    <input type="reset" value="Cancelar" />

        
    </form>    
    
    </>
  )
}

export default CrudForm    