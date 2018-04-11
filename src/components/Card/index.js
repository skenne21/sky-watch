import React from 'react';
import './styles.css';

const Card = ({card, className, addBookmarks}) => {
  const { name, stats } = card;

  const tags = Object.keys(stats).map( (stat, index) => {
    return <p key={stat+index}>{stats[stat]}</p>;
  });

  return (
    <div className={className}>
      <h1>Name: {name}</h1>
      {tags}
      <button
        className='button'
        onClick={() => addBookmarks(card)}>
      </button>
    </div>
  );
}


export default Card;