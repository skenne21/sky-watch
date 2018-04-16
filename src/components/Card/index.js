import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Card = ({card, classname, user}) => {

  const { name, stats, details } = card;
  const users = Object.keys(user)
  const tags = Object.keys(stats).map( (stat, index) => {
    return <p key={stat+index}>{stats[stat]}</p>;
  });

  const questions = card => {
    return (
      <div calssName='questionCard'>
        <div className='question front'>
          <p>{card.question}</p>
        </div>
        <div 
          className={`${classname} question back`}
        >
        {tags}
        </div>
      </div>
    );
  };
  
  const createCards = (card) => {
    if(card.type ==='questionCard') {
      return questions(card)
    } else {
      return (
        <div 
          className={`${classname}`}
        >
          <h1 className="card-h1">{name}</h1>
          <h2 className='details'>{details}</h2>
          <div className='stats'>
            <h3>STATS: </h3>
            {tags}
          </div>
        </div>
      );
    }
  };

  return (
    <div className='card'>
      {
        createCards(card)
      }
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  classname: PropTypes.string,
  user: PropTypes.object
};

export default Card;