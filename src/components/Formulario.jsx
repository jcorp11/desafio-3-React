import { useState } from "react";
import { useEffect } from "react";
import "../components/css/formulario.css";
import { validarInput } from "../utils/validate.js";
import { addColaborador } from "../utils/addColaborador.js";
import Alerta from "./Alerta.jsx";

const Formulario = ({ error, setError, colaboradores }) => {
  const [formState, setFormState] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const changeInput = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e, formState, setError, colaboradores) => {
    e.preventDefault();
    const boolMistake = validarInput(e, formState, setError);
    // console.log({ mistake: error.mistake });
    // useEffect(() => {
    //   if (!error.mistake) addColaborador(formState, colaboradores);
    // }, [error]);
    if (!boolMistake) {
      addColaborador(formState, colaboradores);
    }
  };
  //   useEffect(() => console.log({ error }), [error]);

  return (
    <section className="formContainer">
      <h2>Agrega un colaborador</h2>
      <form
        className="formulario"
        onSubmit={(e) => submitForm(e, formState, setError, colaboradores)}
      >
        <section className="form-group">
          <input
            type="text"
            name="nombre"
            id="nombre"
            className="form-control"
            placeholder="Nombre del colaborador"
            value={formState.nombre}
            onChange={changeInput}
          />
        </section>
        <section className="form-group mt-2">
          <input
            type="text"
            name="correo"
            id="email"
            className="form-control"
            placeholder="Email del colaborador"
            value={formState.correo}
            onChange={changeInput}
          />
        </section>
        <section className="form-group mt-2">
          <input
            type="number"
            name="edad"
            id="edad"
            className="form-control"
            placeholder="Edad del colaborador"
            value={formState.edad}
            onChange={changeInput}
          />
        </section>
        <section className="form-group mt-2">
          <input
            type="text"
            name="cargo"
            id="cargo"
            className="form-control"
            placeholder="Cargo del colaborador"
            value={formState.cargo}
            onChange={changeInput}
          />
        </section>
        <section className="form-group mt-2">
          <input
            type="text"
            name="telefono"
            id="telefono"
            className="form-control"
            placeholder="Teléfono del colaborador"
            value={formState.telefono}
            onChange={changeInput}
          />
        </section>
        <button
          type="submit"
          className="btn mt-4
    btn-primary d-block w-100"
        >
          Agregar Colaborador
        </button>
      </form>
      <Alerta error={error} />
    </section>
  );
};

export default Formulario;
