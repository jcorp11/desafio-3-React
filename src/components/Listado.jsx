import Table from "react-bootstrap/Table";

const Listado = ({ colaboradores }) => {
  console.log(Object.keys(colaboradores["0"]));
  const protohead = Object.keys(colaboradores["0"]);
  protohead.shift();
  const header = protohead.map((v) => {
    return v.charAt(0).toUpperCase() + v.slice(1);
  });
  return (
    <div className="listado">
      <Table striped bordered hover>
        <thead>
          <tr>
            {header.map((head) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Listado;
