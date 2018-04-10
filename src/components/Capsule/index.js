import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

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
    <div className='capsule-card'>
      <h1 className="capsule_h1">Name: {name}</h1>
      <p>Years in Orbit: {yearInOrbit}</p>
      <h2>Crew Capacity: {crew}</h2>
      <p>Total Height: {height} ft</p>
      <p>Total Mass: {mass} lbs</p>
      <p>Diameter: {diameter} ft</p>
      <p>Heat Shield Capacity: {heatShield} degrees</p>
      <button
      className='button'
      onClick={() => addCapsule(capsule)}
      >
      </button>
    </div>
  );
};

Capsule.propTypes = {
  capsule: PropTypes.object
};

export default Capsule;