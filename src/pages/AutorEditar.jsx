import { Table } from "react-bootstrap";

export default function AutorEditar() {
  /*fetch("http://localhost:8080/autores/editar/{autor}")
    .then((autor) => autor.json())*/
    
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Habilitado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>{autor.id}</td>
            <td>{autor.nombre}</td>
            <td>{JSON.stringify(autor.alta)}</td> */}
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
