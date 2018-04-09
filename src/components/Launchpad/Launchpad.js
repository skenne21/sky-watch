import React from 'react';
import PropTypes from 'prop-types';

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
    return <p key={index}>{vehicle}</p>;
  });

  return (
    <div className='launchpad'>
      <h1>{name}</h1>
      <p>{status}</p>
      <h2>{location}</h2>
      <h3>{details}</h3>
      {getVehicles}
      <button onClick={() => addLaunchPads(launchpad)}>X</button>
    </div>
  );
};

Launchpad.propTypes = {
  launchpad: PropTypes.object
};

export default Launchpad;