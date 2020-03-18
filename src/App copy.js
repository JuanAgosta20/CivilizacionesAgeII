import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import Contacto from './componentes/Contacto';
import Civilizaciones from './componentes/Civilizaciones';
import Inicio from './componentes/Inicio';
import DetalleCivilizacion from './componentes/DetalleCivilizacion';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/contacto" className="btn btn-dark">
            Contacto
          </Link>
          <NavLink
            to="/civilizaciones"
            className="btn btn-dark"
            activeClassName="active"
          >
            Civilizaciones
          </NavLink>
        </div>
        <hr />
      </div>
      <Switch>
        {/*
          LAS RUTAS TIENEN QUE ESCRIBIRSE DE LA MAS PARTICULAR A LA MAS GENERAL COMO ESTA ABAJO.
          LA OTRA OPCION ES ACLARAR QUE ES RUTA EXACTA. EJEMPLO: <Route path="/" exact>Pagina de inicio</Route>
        */}
        <Route path="/civilizaciones/:id">
          <DetalleCivilizacion />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
        <Route path="/civilizaciones">
          <Civilizaciones />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
