import { useState } from "react";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import "./App.css";
import { BaseColaboradores } from "./data/data";

function App() {
  const [error, setError] = useState({});

  return (
    <>
      <Listado colaboradores={BaseColaboradores} />
      <Formulario {...{ error, setError }} />
    </>
  );
}

export default App;
