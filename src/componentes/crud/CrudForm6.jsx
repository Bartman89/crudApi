import React, { useEffect, useState } from "react";

function CrudForm6({ equipos, addEquipo, editEquipo, idEdit, setIdEdit }) {
  // Hooks de Estado

  const [dataForm, setDataForm] = useState({
    id: `${Math.floor(Math.random() * 10000) + 1}`,
    nombre: "",
    pais: "",
  });

  const [desabilitado, setDeshabilitado] = useState(true);

  // Hooks de Efecto

  useEffect(() => {
    if (idEdit) {
      const equipoEditar = equipos.filter((equipo) => equipo.id === idEdit);

      console.log(equipoEditar);

      setDataForm({
        id: `${equipoEditar[0].id}`,
        nombre: `${equipoEditar[0].nombre}`,
        pais: `${equipoEditar[0].pais}`,
      });

      console.log(dataForm);
    } else {
      setDataForm({
        id: `${Math.floor(Math.random() * 10000) + 1}`,
        nombre: "",
        pais: "",
      });
    }
  }, [idEdit]);

  //Funciones

  const Limpiar = () => {
    setDataForm({
      id: `${Math.floor(Math.random() * 10000) + 1}`,
      nombre: "",
      pais: "",
    });

    setIdEdit(null);
    setDeshabilitado(true);
  };
  const handleChange = (e) => {
    if (dataForm.nombre != "" && dataForm.pais != "") {
      setDeshabilitado(false);
    }

    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (idEdit) {
      editEquipo(dataForm);

      setDataForm({
        id: `${Math.floor(Math.random() * 10000) + 1}`,
        nombre: "",
        pais: "",
      });

      setDeshabilitado(true);
    } else {
      addEquipo(dataForm);

      setDataForm({
        id: `${Math.floor(Math.random() * 10000) + 1}`,
        nombre: "",
        pais: "",
      });

      setDeshabilitado(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="mx-1" htmlFor="nombre">
        Nombre:
      </label>
      <input
        onChange={handleChange}
        type="text"
        name="nombre"
        placeholder="Ingresa el nombre.."
        value={dataForm.nombre}
      />
      <label className="mx-1" htmlFor="pais">
        Pais:
      </label>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Ingresa el pais.."
        name="pais"
        value={dataForm.pais}
      />
      <input
        disabled={desabilitado}
        className="btn btn-success mx-1"
        type="submit"
      />
      <button
        disabled={desabilitado}
        onClick={Limpiar}
        className="btn btn-warning mx-1"
        type="button"
      >
        Cancelar
      </button>
    </form>
  );
}

export default CrudForm6;
