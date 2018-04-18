import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({card, classname}) => {
  const { name, stats, details } = card;
  const tags = Object.keys(stats).map( (stat, index) => {
    return <p key={stat+index}>{stats[stat]}</p>;
  });

  const questions = card => {
    return (
      <div className='questionCard'>
        <Link 
          className='link'
          to='/signin'
        >
          SIGNIN TO SEE MORE INFORMATION
        </Link>
        <div className='question front'>
          <h2>Q:</h2>
          <p>{card.question}</p>
          <p id='flip-button'>☛</p>
        </div>
        <div 
          className={`${classname} question back`}
        >
          <h2>A:</h2>
          {tags}
        </div>
      </div>
    );
  };
  
  const createCards = (card) => {
    if (card.type ==='questionCard') {
      return questions(card);
    } else {
      return (
        <div 
          className={`card ${classname}`}
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
    <div className='card-box'>
      {
        createCards(card)
      }
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  classname: PropTypes.string,
  history: PropTypes.object
};

export default Card;