import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "../components/Navbar"
import AutorEditar from "../pages/AutorEditar"
import AutorPages from "../pages/AutorPages"
import EditorialPages from "../pages/EditorialPages"
import HomePages from "../pages/HomePages"
import LibrosPages from "../pages/LibrosPages"
import NotFoundPages from "../pages/NotFoundPages"

export default function AppRouter() {

    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/autores" component={AutorPages} />
                <Route excact path="/autores/editar" component={AutorEditar} />
                <Route excact path="/editoriales" component={EditorialPages} />
                <Route excact path="/libros" component={LibrosPages} />
                <Route excact path="/" component={HomePages} />
                <Route path="*" component={NotFoundPages} />
            </Switch>
        </Router>
    )
}
