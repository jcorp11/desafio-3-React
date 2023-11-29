import Table from "react-bootstrap/Table";

import "./css/listado.css";

const Listado = ({ header, colaboradores, setColaboradoresShow }) => {
  function handleDelete(id) {
    const newColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    console.log(newColaboradores);
    localStorage.setItem("colaboradores", JSON.stringify(newColaboradores));
    setColaboradoresShow(newColaboradores);
    // window.location.reload();
  }
  console.log(colaboradores);

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
              <td>
                <button
                  onClick={() => handleDelete(colaborador.id)}
                  className="btn btn-danger bold botonDelete"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Listado;
