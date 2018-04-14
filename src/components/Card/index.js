import React from 'react';
import './styles.css';

const Card = ({card, className, addBookmarks}) => {
  const { name, stats } = card;

  const tags = Object.keys(stats).map( (stat, index) => {
    return <p key={stat+index}>{stats[stat]}</p>;
  });

  // const active = Object.keys(card).find(item => console.log(item))
 

  return (
    <div 
      className={`card ${className}`}
    >
      <h1>{name}</h1>
      <button
        className='button'
        onClick={() => addBookmarks(card)}
      > BOOKMARK
      </button>
      {tags}
    </div>
  );
}


export default Card;