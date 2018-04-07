import React from 'react';

const Rocket = ({rocket}) => {
  const { 
    name,
    summary,
    active,
    costLunch,
    fristFlight,
    stages,
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
      <h3>{fristFlight}</h3>
      <h3>{stages}</h3>
      {tags}
      <p>{summary}</p>
    </div>
  )

}

export default Rocket;