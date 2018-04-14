import React from 'react';
import './styles.css';

const Card = ({card, className, addBookmarks, user}) => {
  const { name, stats } = card;
  const tags = Object.keys(stats).map( (stat, index) => {
    return <p key={stat+index}>{stats[stat]}</p>;
  });

  // const active = Object.keys(card).find(item => console.log(item))
  
  const questions = card => {
    return (
      <div calssName='card'>
        <div className='front'>Questions</div>
        <div 
          className={`card ${className} back`}
        >
        <h1>{name}</h1>
        <button
          className='button'
          onClick={() => addBookmarks(card)}
        > BOOKMARK
        </button>
          {tags}
        </div>
      </div>
    )
  }
  
  const factCards = (card) => {
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
    )
  }

  return (
    <div>
      {
        user.length ? factCards(card) : questions(card)
      }
    </div>
  )
}


export default Card;