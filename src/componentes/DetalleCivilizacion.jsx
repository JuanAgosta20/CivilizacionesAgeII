import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import banderas from '../images';

const DetalleCivilizacion = () => {
  useParams();

  const { id } = useParams();

  const [civilizacion, setCivilizacion] = useState([]);
  const civ = civilizacion.civilization_bonus;

  useEffect(() => {
    const obtenerDatos = async () => {
      const data = await fetch(
        `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`,
      );
      const civ = await data.json();
      setCivilizacion(civ);
    };
    //console.log('useEffect');
    obtenerDatos();
  }, [id]);

  return (
    <div className="container justify-content-center">
      <div class="row d-flex justify-content-center">
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={banderas[civilizacion.id]} />
          <Card.Body>
            <Card.Title>{civilizacion.name}</Card.Title>
            <Card.Text>
              <hr />
              <h6>{civilizacion.expansion}</h6>
              <hr />
              <h6>{civilizacion.army_type}</h6>
              <hr />
              <div>
                <h6>Civilization Bonus:</h6>
                <ul>{civ && civ.map((item, i) => <li key={i}>{item}</li>)}</ul>
              </div>
              <hr />
              <h6>Team Bonus:</h6>
              <p> {civilizacion.team_bonus}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DetalleCivilizacion;
