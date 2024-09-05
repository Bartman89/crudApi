import React, { useEffect, useState } from "react";

function CrudForm4({
  equipos,
  addEquipo,
  idEdit,
  editEquipo,
  setIdEdit,
  mayorId,
}) {
  const [formData, setFormData] = useState({
    id: `${Math.floor(Math.random() * 10000) + 1}`,
    nombre: "",
    pais: "",
  });

  const [desabilitado, setDesabilitado] = useState(true);

  useEffect(() => {
    if (idEdit != null) {
      const equipoEdit = equipos.filter((equipo) => equipo.id === idEdit);

      setFormData({
        id: `${idEdit}`,
        nombre: equipoEdit[0].nombre,
        pais: equipoEdit[0].pais,
      });

      setDesabilitado(false);
    } else {
      setFormData({
        id: `${Math.floor(Math.random() * 10000) + 1}`,
        nombre: "",
        pais: "",
      });
    }
  }, [idEdit]);

  useEffect(() => {
    if (idEdit != null) {
      setFormData({
        id: `${idEdit}`,
        nombre: equipos[idEdit].nombre,
        pais: equipos[idEdit].pais,
      });
    } else {
      setFormData({
        id: `${Math.floor(Math.random() * 10000) + 1}`,
        nombre: "",
        pais: "",
      });
    }
  }, [equipos]);

  const handleChange = (e) => {
    if (formData.nombre != "" && formData.pais != "") {
      setDesabilitado(false);
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (idEdit != null) {
      editEquipo(formData);
      setDesabilitado(true);
      setFormData({
        id: `${Math.floor(Math.random() * 10000) + 1}`,
        nombre: "",
        pais: "",
      });
    } else {
      addEquipo(formData);
      setDesabilitado(true);
      setFormData({
        id: `${Math.floor(Math.random() * 10000) + 1}`,
        nombre: "",
        pais: "",
      });
    }
  };

  const limpiar = () => {
    setFormData({
      id: `${Math.floor(Math.random() * 10000) + 1}`,
      nombre: "",
      pais: "",
    });

    setDesabilitado(true);
    setIdEdit(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="mx-1" htmlFor="nombre">
          Nombre:
        </label>
        <input
          onChange={handleChange}
          className="mx-1"
          type="text"
          name="nombre"
          placeholder="Ingresa el equipo."
          value={formData.nombre}
          required
        />
        <label className="mx-1" htmlFor="pais">
          Pais:
        </label>
        <input
          onChange={handleChange}
          className="mx-1"
          type="text"
          name="pais"
          placeholder="Ingresa el pais."
          value={formData.pais}
          required
        />
        <input
          disabled={desabilitado}
          className="btn btn-success mx-1"
          type="submit"
          value="Enviar"
        />
        <button
          onClick={limpiar}
          disabled={desabilitado}
          className="btn btn-warning mx-1"
          type="button"
        >
          Cancelar
        </button>
      </form>
    </>
  );
}

export default CrudForm4;
