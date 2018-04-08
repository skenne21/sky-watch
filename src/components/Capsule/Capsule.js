import React from 'react';

const Capsule = ({capsule}) => {
  const {
    name,
    crew,
    yearInOrbit,
    diameter,
    heatShield,
    height,
    mass
  } = capsule;

  return (
    <div className='capsule'>
      <h1>{name}</h1>
      <p>{yearInOrbit}</p>
      <h2>{crew}</h2>
      <p>{height}</p>
      <p>{mass}</p>
      <p>{heatShield}</p>
      <p>diameter</p>
    </div>
  )
}

export default Capsule;