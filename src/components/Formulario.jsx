import { useState } from "react";
import { useEffect } from "react";
import "../components/css/formulario.css";
import { validarInput } from "../utils/validate.js";

const Formulario = ({ error, setError }) => {
  const [formState, setFormState] = useState({
    nombre: "",
    email: "",
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

  useEffect(() => console.log({ error }), [error]);

  return (
    <section className="formContainer">
      <form
        className="formulario"
        onSubmit={(e) => validarInput(e, formState, setError)}
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
            name="email"
            id="email"
            className="form-control"
            placeholder="Email del colaborador"
            value={formState.email}
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
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Formulario;
