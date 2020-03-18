import React, { Fragment } from 'react';
import Civilizaciones from './componentes/Civilizaciones';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import DetalleCivilizacion from './componentes/DetalleCivilizacion';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/civilizaciones/:id">
            <DetalleCivilizacion />
          </Route>
          <Route path="/civilizaciones">
            <Civilizaciones />
          </Route>
          <Route path="/" exact>
            <Civilizaciones />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
