import { useState } from "react";
import "./css/buscador.css";

const Buscador = ({ BaseColaboradores, setColaboradoresShow }) => {
  const [colabBuscado, setColabBuscado] = useState("");

  const filtarTabla = (colabBuscado) => {
    console.log(BaseColaboradores);
    const filtrado = BaseColaboradores.filter((colaborador) => {
      if (!colabBuscado) return true;

      return (
        colaborador.nombre.toLowerCase().includes(colabBuscado.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(colabBuscado.toLowerCase())
      );
    });
    setColaboradoresShow(filtrado);
  };

  return (
    <div className="buscador-container">
      <h1>Lista de colaborador</h1>
      <input
        type="text"
        className="form-control mt-3"
        placeholder="Busca un colaborador"
        onChange={(e) => {
          filtarTabla(e.target.value);
        }}
      />
    </div>
  );
};

export default Buscador;
