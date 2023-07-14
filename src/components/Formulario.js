import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {
  //Crear State de citas, nombre de state y la función que lo modifica, lleva llaves porque es un objeto
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const [error, actualizarError] = useState(false);

  //No se puede acceder al state directamente, por eso usamos el siguiente método para acceder a las propiedades del state
  const acualizarState = (e) => {
    actualizarCita({
      //Le pasamos un objeto, por eso abrimos llaves
      ...cita, //hacemos una copia del objeto para que no sobreescriba las propiedades al pasar a la siguiente
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Cuando el usuario presiona agregar cita
  const enviarCita = (e) => {
    e.preventDefault(); //Para que no envíe por get

    //Validar
    //trim para eliminar los espacios en blanco al inicio y al fin
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    //Eliminar el mensaje previo
    actualizarError(false);
    //Asignar ID
    cita.id = uuidv4();
    //Crear cita
    crearCita(cita);
    //Reiniciar el form
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  };
  return (
    <Fragment>
      <h2>Crear citas</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={enviarCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={acualizarState}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño de la Mascota"
          onChange={acualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={acualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={acualizarState}
          value={hora}
        />
        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          placeholder="Nombre del dueño de la Mascota"
          onChange={acualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Enviar
        </button>
      </form>
    </Fragment>
  );
};

//Documentación de componente con proptotype
Formulario.prototype = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;
