import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Rocket = ({ rocket, addRockets }) => {
  const { 
    name,
    summary,
    active,
    costLaunch,
    fristFight
  } = rocket;
  
  const tags = Object.keys(rocket.stats).map( (stat, index) => {
    return <p key={stat+index}>{rocket.stats[stat]}</p>;
  });

  return (
    <div className='Rocket-card'>
      <h1>Name: {name}</h1>
      <p>Active: {active}</p>
      <h2>Cost to Launch {costLaunch}</h2>
      <h3>Date of Frist Fight : {fristFight}</h3>
      {tags}
      <p>{summary}</p>
      <button
        className='button'
        onClick={() => addRockets(rocket)}>
      </button>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.object
};

export default Rocket;