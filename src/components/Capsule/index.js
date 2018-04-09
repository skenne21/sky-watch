import React from 'react';
import PropTypes from 'prop-types';

const Capsule = ({capsule, addCapsule}) => {
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
      <p>{diameter}</p>
      <p>{heatShield}</p>
      <p>diameter</p>
      <button onClick={() => addCapsule(capsule)}>X</button>
    </div>
  );
};

Capsule.propTypes = {
  capsule: PropTypes.object
};

export default Capsule;