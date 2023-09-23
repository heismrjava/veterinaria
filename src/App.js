import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  //Citas en local storage, el local storage sólo almacena string
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    //Verificamos si hay citas en el local storage, si no hay inicia como un array vacío
    citasIniciales = [];
  }

  //Arreglo de citas, el use state es un arreglo, por eso lleva corchetes
  const [citas, guardarCitas] = useState(citasIniciales);

  //Use Effect para realizar ciertas operaciones cuando el State cambia, siempre es un arrow function
  //Le pasamos un array vacío para que se ejecute solo una vez
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);
  //Función que toma las citas actuales y agrega nuevas
  const crearCita = (cita) => {
    guardarCitas([
      ...citas, //Copia del actual
      cita, //La nueva cita
    ]);
  };

  //Función que elimina una cita por su ID
  const eliminarCita = (id) => {
    //Le decimos que filtre los registros distintos al id que le pasemos, es decir, elimina el id pasado
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas); //No hacen falta los corchetes ya que le estmos pasando un arreglo
  };

  //Mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
