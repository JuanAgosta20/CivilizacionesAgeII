import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import banderas from '../images';

const DetalleCivilizacion = (props) => {
  useParams();
  let index = props.index;

  //const { id } = useParams();

  const [civilizacion, setCivilizacion] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const data = await fetch(
        `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${index +
          1}`,
      );
      const civ = await data.json();
      setCivilizacion(civ);
    };
    //console.log('useEffect');
    obtenerDatos();
  }, [index]);

  return (
    <body>
      <hr />
      <div className="container ">
        <div class="row d-flex justify-content-center">
          <Card style={{ width: '50%' }}>
            <Card.Img
              className="width: 104px"
              variant="top"
              src={banderas[index + 1]}
            />
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
                  <ul>
                    {civilizacion.civilization_bonus &&
                      civilizacion.civilization_bonus.map((item) => (
                        <li>{item + '.'}</li>
                      ))}
                  </ul>
                </div>
                <hr />
                <h6>Team Bonus:</h6>
                <p>{civilizacion.team_bonus + '.'}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </body>
  );
};

export default DetalleCivilizacion;
