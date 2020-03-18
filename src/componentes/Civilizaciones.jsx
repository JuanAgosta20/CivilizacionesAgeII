import React, { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import FondosPueblos from '../ImagesPueblos.js';
import DetalleCivilizacion from './DetalleCivilizacion';

const Civilizaciones = () => {
  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(
      'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations',
    );
    const users = await data.json();
    setEquipo(users.civilizations);
  };

  return (
    <Fragment>
      <header>
        <Carousel>
          {equipo.map((pueblo, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={FondosPueblos[i]}
                alt="Third slide"
              />
              <Carousel.Caption>
                <Router>
                  <Link to={`/civilizaciones/${pueblo.id}`}>
                    <h3>{pueblo.name}</h3>
                  </Link>
                </Router>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </header>
    </Fragment>
  );
};

export default Civilizaciones;
