const validarInput = (e, formState, setError) => {
  e.preventDefault();

  console.log({ formState });

  const boolNombre = /^[A-Za-z]+(?: [A-Za-z]+)?$/.test(formState.nombre);
  const boolEmail =
    /^([a-zA-Z0-9_\-]+)(\.[a-zA-Z0-9_\-]+)*@(([a-zA-Z0-9\-]+)\.)+([a-zA-Z]{2,})$/.test(
      formState.email
    );
  const boolPass =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_\-])[A-Za-z\d@$!%*#?&_\-]{8,}$/.test(
      formState.password
    );
  const boolRepeatPass = formState.password === formState.confirmarPassword;

  console.log({ boolNombre, boolEmail, boolPass, boolRepeatPass });
  if (!boolNombre || !boolEmail || !boolPass || !boolRepeatPass) {
    setError({
      load: true,
      mistake: true,
      conditions: { boolNombre, boolEmail, boolPass, boolRepeatPass },
    });
    return;
  }
  setError({
    load: true,
    mistake: false,
    conditions: { boolNombre, boolEmail, boolPass, boolRepeatPass },
  });
};

export { validarInput };
