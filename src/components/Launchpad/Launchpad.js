import React from 'react';

const Launchpad = ({launchpad}) => {
  const {
    name,
    location,
    details,
    status,
    vehicles
  } = launchpad;

  const getVehicles = vehicles.map((vehicle, index) => (<p key='index'>{vehicle}</p>));

  return (
    <div className='launchpad'>
      <h1>{name}</h1>
      <h2>{location}</h2>
      <h3>{details}</h3>
      {getVehicles}
      <p>{details}</p>
    </div>
  )
}

export default Launchpad;