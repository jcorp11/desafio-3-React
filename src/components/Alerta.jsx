import "./css/alerta.css";

const Alerta = ({ error }) => {
  let paraAlerta = "";

  const errorMessages = {
    boolNombre: "El nombre es obligatorio",
    boolEmail: "El email debe ser válido",
    boolEdad: "La edad debe ser un número",
    boolCargo: "El cargo es obligatorio",
    boolTel: "El telefono debe ser numerico de 8 digitos",
  };

  // caso default exitoso
  paraAlerta = <p>Colaborador agregado</p>;

  for (const condition in error.conditions) {
    if (!error.conditions[condition]) {
      paraAlerta = <p>{errorMessages[condition]}</p>;
      break;
    }
  }

  return (
    <section
      className={`alert mt-3 w-100  text-center ${
        error.load ? "visible" : "hidden"
      } ${error.mistake ? "alert-danger" : "alert-success"}`}
    >
      {paraAlerta}
    </section>
  );
};

export default Alerta;
