import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const DetalleCivilizacion = () => {
  useParams();

  const { id } = useParams();

  const [civilizacion, setCivilizacion] = useState([]);

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
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{civilizacion.name}</Card.Title>
          <Card.Text>
            <p>Civilization Bonus: {civilizacion.civilization_bonus}</p>
            <br />
            <p>Team Bonus:{civilizacion.team_bonus}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetalleCivilizacion;
