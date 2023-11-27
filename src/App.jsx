import { useState } from "react";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import "./App.css";
import { BaseColaboradores } from "./data/data";
import Buscador from "./components/Buscador";

function App() {
  const header = ["Nombre", "Correo", "Edad", "Cargo", "Telefono"];

  const [error, setError] = useState({
    load: false,
    mistake: true,
    conditions: {
      boolNombre: false,
      boolEmail: false,
      boolEdad: false,
      boolCargo: false,
      boolTel: false,
    },
  });

  const [colaboradoresShow, setColaboradoresShow] = useState([
    ...BaseColaboradores,
  ]);

  return (
    <>
      <section>
        <Buscador {...{ BaseColaboradores, setColaboradoresShow }} />
        <section className="container-fluid d-flex gap-3 mt-3 second-block">
          <Listado header={header} colaboradores={colaboradoresShow} />
          <Formulario
            {...{
              error,
              setError,
              setColaboradoresShow,
              colaboradores: BaseColaboradores,
            }}
          />
        </section>
      </section>
    </>
  );
}

export default App;
