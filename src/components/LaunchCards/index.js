import React from 'react';

const LaunchCard = ({ launch, className }) => {
  const { name, stats, details, fightTime, year } = launch;
  return (
    <div className={className}>
      <h1>{name}</h1>
      <p>{year}, fightTime </p>
      <h3>{stats.core}</h3>
      <p>{details}</p>
    </div>
  )
}

export default LaunchCard;