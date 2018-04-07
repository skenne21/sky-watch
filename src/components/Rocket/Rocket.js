import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const { 
    name,
    summary,
    active,
    costLunch,
    fristFight,
  } = rocket;

  const { 
    diameter,
    height,
    mass,
  } = rocket.stats;
  
  const tags = Object.keys(rocket.stats).map( (stat,index) => {
    return <p key={stat+index}>{rocket.stats[stat]}</p>
  })

  return (
    <div className='Rocket'>
      <h1>{name}</h1>
      <p>{active}</p>
      <h2>{costLunch}</h2>
      <h3>{fristFight}</h3>
      {tags}
      <p>{summary}</p>
    </div>
  )

}

Rocket.propTypes = {
  rocket: PropTypes.object
}

export default Rocket;