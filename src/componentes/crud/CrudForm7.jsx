import React, { useEffect, useState } from "react";

function CrudForm7({ addEquipo, equipos, setIdEdit, editEquipo, idEdit }) {
  //HOOKS DE ESTADO

  //Hook para manejar el estado de la informacion del equipo "formData"
  const [formData, setFormData] = useState({
    id: `${Math.floor(Math.random() * (10000 - 3 + 1)) + 3}`,
    nombre: "",
    pais: "",
  });


  const [desabilitado, setDesabilitado] = useState(true)


  //Hook de efecto para controlar cambios en idEdit

  useEffect(() => {
    if (idEdit) {
      const equipoEditar = equipos.filter((equipo) => {
        return equipo.id === idEdit;
      });

      setFormData({
        id: `${equipoEditar[0].id}`,
        nombre: `${equipoEditar[0].nombre}`,
        pais: `${equipoEditar[0].pais}`,
      });
    } else {
      setFormData({
        id: `${Math.floor(Math.random() * (10000 - 3 + 1)) + 3}`,
        nombre: "",
        pais: "",
      });
    }
  }, [idEdit]);

  //FUNCIONES

  const limpiar = ()=>{
    setFormData({
      id: `${Math.floor(Math.random() * (10000 - 3 + 1)) + 3}`,
        nombre: "",
        pais: "",
    })

    setIdEdit(null)

    setDesabilitado(true)
  }

  //Funcion para manejar cambios en los inputs
  const handleChange = (e) => {

    if( formData.nombre != "" && formData.pais !="" ){

      setDesabilitado(false)

    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //Funcion para manejar el evento de envio de formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (idEdit) {
      editEquipo(formData);

      setIdEdit(null);

      setFormData({
        id: `${Math.floor(Math.random() * (10000 - 3 + 1)) + 3}`,
        nombre: "",
        pais: "",
      })

      setDesabilitado(true)

    } else {
      addEquipo(formData);

      setIdEdit(null);
      setFormData({
        id: `${Math.floor(Math.random() * (10000 - 3 + 1)) + 3}`,
        nombre: "",
        pais: "",
      })

      setDesabilitado(true)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="mx-1" htmlFor="nombre">Nombre:</label>
        <input 
          onChange={handleChange}
          type="text"
          name="nombre"
          value={formData.nombre}
        />
        <label className="mx-1" htmlFor="pais">Pais:</label>
        <input 
          onChange={handleChange}
          type="text"
          name="pais"
          value={formData.pais}
        />
        <input disabled={desabilitado} className="btn btn-success mx-1" type="submit" />
        <button onClick={()=>{limpiar()}} disabled={desabilitado} className="btn btn-warning mx-1" type="button">Cancelar</button>
      </form>
    </>
  );
}

export default CrudForm7;
