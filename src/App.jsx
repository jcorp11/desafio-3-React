import { useState } from "react";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import "./App.css";
import { BaseColaboradores } from "./data/data";

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

  return (
    <>
      <Listado colaboradores={BaseColaboradores} />
      <Formulario {...{ error, setError, colaboradores: BaseColaboradores }} />
    </>
  );
}

export default App;
