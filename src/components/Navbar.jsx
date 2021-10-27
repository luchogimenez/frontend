import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
export default function Navbar() {
    return (
        <Nav>
                <Nav.Item>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink exact to="/autores">
                        Autores
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink exact to="/editoriales">
                        Editoriales
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink exact to="/libros">
                        Libros
                    </NavLink>
                </Nav.Item>
        </Nav>
    )
}
