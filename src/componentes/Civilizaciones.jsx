import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Civilizaciones = () => {
  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
    //console.log('useEffect');
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
    <div>
      <h1>Civilizaciones</h1>
      <ul>
        {equipo.map((item) => (
          <li key={item.id}>
            <Link to={`/civilizaciones/${item.id}`}>
              {item.name} - {item.expansion} - {item.army_type}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Civilizaciones;
