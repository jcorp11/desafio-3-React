import { useState } from "react";
import Listado from "./components/Listado";
import "./App.css";
import { BaseColaboradores } from "./data/data";

console.log(BaseColaboradores);

function App() {
  const [error, setError] = useState({});

  return (
    <>
      <section className="appContianer">
        <Listado colaboradores={BaseColaboradores} />
      </section>
    </>
  );
}

export default App;
