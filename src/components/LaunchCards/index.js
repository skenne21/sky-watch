import React from 'react';

const LaunchCard = ({ launch, className }) => {
  const { name, stats, details, fightTime, year, image } = launch;

  return (
    <div className={className}>
      <h1>{name}</h1>
      <h2>{year}</h2>
      <h3>{stats.site}</h3>
      <p>{details}</p>
      <img src={image} />
      <ul>
        <li>{stats.sucessful}</li>
        <li>{stats.capsule}</li>
        <li>{stats.core}</li>
        <li>{stats.sideCores}</li>
        <li>{stats.fairings}</li>
      </ul>   
    </div>
  )
}

export default LaunchCard;