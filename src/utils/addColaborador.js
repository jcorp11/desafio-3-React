const addColaborador = (formState, colaboradores) => {
  console.log("fire addColaborador");
  const id =
    +colaboradores.reduce((max, obj) => (obj.id > max ? obj.id : max), 0) + 1;
  const newColaborador = {
    id,
    nombre: formState.nombre,
    correo: formState.correo,
    edad: formState.edad,
    cargo: formState.cargo,
    telefono: formState.telefono,
  };
  colaboradores.push(newColaborador);
  console.log(colaboradores);
};

export { addColaborador };
