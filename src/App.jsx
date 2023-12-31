import { useState } from "react";
import "./App.css";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import Alerta from "./components/Alerta";
import { BaseColaboradoresDefault } from "./data/data";

let BaseColaboradoresMemoria = JSON.parse(
  localStorage.getItem("colaboradores")
);
const BaseColaboradores = BaseColaboradoresMemoria
  ? BaseColaboradoresMemoria
  : BaseColaboradoresDefault;

const header = ["Nombre", "Correo", "Edad", "Cargo", "Telefono", "Borrar"];
function App() {
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
  // console.log(BaseColaboradores);
  const [colaboradoresShow, setColaboradoresShow] = useState([
    ...BaseColaboradores,
  ]);

  return (
    <>
      <section>
        <Buscador {...{ BaseColaboradores, setColaboradoresShow }} />
        <section className="container-fluid d-flex gap-3 mt-3 second-block">
          <Listado
            {...{
              header,
              setColaboradoresShow,
              colaboradores: colaboradoresShow,
            }}
          />
          <section className="formContainer">
            <Formulario
              {...{
                error,
                setError,
                setColaboradoresShow,
                colaboradores: BaseColaboradores,
              }}
            />
            <Alerta error={error} />
          </section>
        </section>
      </section>
    </>
  );
}

export default App;
