import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Launchpad = ({launchpad, addLaunchPads}) => {
  console.log(addLaunchPads)
  const {
    name,
    location,
    details,
    status,
    vehicles
  } = launchpad;

  const getVehicles = vehicles.map((vehicle, index) => {
    return <p key={index}>Vehicles Launched: {vehicle}</p>;
  });

  return (
    <div className='launchpad-card'>
      <h1 className='launchpad_h1'>Name: {name}</h1>
      <p>Status: {status}</p>
      <h2>Location: {location}</h2>
      <h3>Details: {details}</h3>
      {getVehicles}
      <button 
        onClick={() => addLaunchPads(launchpad)}
        className='button'
      ></button>
    </div>
  );
};

Launchpad.propTypes = {
  launchpad: PropTypes.object
};

export default Launchpad;