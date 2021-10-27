import { Table, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function AutorPages() {
  const [autores, setAutores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/autores/lista")
      .then((data) => data.json())
      .then((data) => setAutores(data))
      .catch((e) => console.log(e));
  });

  const changeAlta = (autor) => {
    var url = "http://localhost:8080/autores/changeAlta";
    //var data = { username: "example" };

    fetch(url, {
      method: "PUT", // or 'PUT'
      body: JSON.stringify(autor), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  };
  return (
    <div>
      <h1>Autores</h1>
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
            {autores.map((aut) => (
              <tr>
                <td>{aut.id}</td>
                <td>{aut.nombre}</td>
                <td>{JSON.stringify(aut.alta)}</td>
                <td>
                  <Link to={`/autores/editar}`}>
                    <Button type="button" className="btn-secondary">
                      Editar
                    </Button>
                  </Link>

                  <Button
                    type="button"
                    className="btn-danger"
                    onClick={() => changeAlta(aut)}
                  >
                    Deshabilitar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
