import React, { useEffect, useState, Fragment } from 'react';
import { Carousel } from 'react-bootstrap';
import FondosPueblos from '../ImagesPueblos.js';
import DetalleCivilizacion from './DetalleCivilizacion';

const Civilizaciones = () => {
  const [equipo, setEquipo] = useState([]);
  const [index, setIndex] = useState(0);

  var civilizacion = equipo[index];
  console.log(civilizacion);

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

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Fragment>
      <header>
        <Carousel onSelect={handleSelect}>
          {equipo.map((pueblo, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={FondosPueblos[i]}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h1 className="text-light">{pueblo.name}</h1>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </header>
      <DetalleCivilizacion index={index} />
    </Fragment>
  );
};

export default Civilizaciones;
