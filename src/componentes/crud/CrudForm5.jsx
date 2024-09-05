import React, { useEffect, useState } from "react";

function CrudForm5({ equipos, addEquipo, idEdit, editEquipo }) {
  const [deshabilitado, setDeshabilitado] = useState(true);

  const [formData, setformData] = useState({
    id: `${Math.floor(Math.random() * 10000) + 1}`,
    nombre: "",
    pais: "",
  });

  const limpiar = () => {
    setformData({
      id: `${Math.floor(Math.random() * 10000) + 1}`,
      nombre: "",
      pais: "",
    });

    setDeshabilitado(true);
  };

  useEffect(() => {
    if (idEdit != null) {
      const equipoEditar = equipos.filter((equipo) => equipo.id === idEdit);

      setformData({
        id: `${equipoEditar[0].id}`,
        nombre: equipoEditar[0].nombre,
        pais: equipoEditar[0].pais,
      });
    } else {
      setformData({
        id: `${Math.floor(Math.random() * 10000) + 1}`,
        nombre: "",
        pais: "",
      });
    }
  }, [idEdit]);

  const handleChange = (e) => {
    if (formData.nombre != "" && formData.pais != "") {
      setDeshabilitado(false);
    }

    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (idEdit != null) {
      editEquipo(formData);

      setformData({
        id: `${Math.floor(Math.random() * 10000) + 1}`,
        nombre: "",
        pais: "",
      });

      setDeshabilitado(true);
    } else {
      addEquipo(formData);

      setformData({
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
        value={formData.nombre}
        type="text"
        name="nombre"
        placeholder="Ingresa el nombre.."
      />
      <label className="mx-1" htmlFor="pais">
        Pais:
      </label>
      <input
        onChange={handleChange}
        value={formData.pais}
        type="text"
        name="pais"
        placeholder="Ingresa el Pais.."
      />
      <input
        disabled={deshabilitado}
        className="btn btn-success mx-1"
        type="submit"
        value="Enviar"
      />
      <button
        disabled={deshabilitado}
        onClick={limpiar}
        className="btn btn-warning mx-1"
        type="button"
      >
        Cancelar
      </button>
    </form>
  );
}

export default CrudForm5;
