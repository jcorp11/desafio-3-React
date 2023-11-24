const Listado = ({ colaboradores }) => {
  return (
    <div className="listado">
      {colaboradores.map((colaborador) => ({
        /* <Colaborador key={colaborador.id} colaborador={colaborador} /> */
      }))}
    </div>
  );
};

export default Listado;
