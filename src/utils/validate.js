const validarInput = (e, formState, setError) => {
  console.log({ formState });

  const boolNombre = /^[A-Za-z]+(?: [A-Za-z]+)?$/.test(formState.nombre);
  const boolEmail =
    /^([a-zA-Z0-9_\-]+)(\.[a-zA-Z0-9_\-]+)*@(([a-zA-Z0-9\-]+)\.)+([a-zA-Z]{2,})$/.test(
      formState.correo
    );

  const boolEdad = /^(0?[1-9]|[1-9][0-9]|[1][1-3][1-9])$/.test(formState.edad);
  const boolCargo = /^[A-Za-z]+(?: [A-Za-z]+){0,2}$/.test(formState.cargo);
  const boolTel = /^\d{8}$/.test(formState.telefono);

  // console.log({ boolNombre, boolEmail, boolEdad, boolCargo, boolTel });
  if (!boolNombre || !boolEmail || !boolEdad || !boolCargo || !boolTel) {
    setError({
      load: true,
      mistake: true,
      conditions: { boolNombre, boolEmail, boolEdad, boolCargo, boolTel },
    });
    return true;
  }
  setError({
    load: true,
    mistake: false,
    conditions: { boolNombre, boolEmail, boolEdad, boolCargo, boolTel },
  });
  return false;
};

export { validarInput };
