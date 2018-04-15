import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Card = ({card, classname, addBookmarks, user}) => {

  const { name, stats } = card;
  const users = Object.keys(user)
  const tags = Object.keys(stats).map( (stat, index) => {
    return <p key={stat+index}>{stats[stat]}</p>;
  });

  const questions = card => {
    return (
      <div calssName='card'>
        <div className='front'>Questions</div>
        <div 
          className={`card ${classname} back`}
        >
          <h1>{name}</h1>
          {tags}
        </div>
      </div>
    );
  };
  
  const factCards = (card) => {
    return (
      <div 
        className={`card ${classname}`}
      >
        <h1>{name}</h1>
        {tags}
      </div>
    );
  };

  return (
    <div>
      {
        users.length > 1 ? factCards(card)  : questions(card)
      }
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  classname: PropTypes.string,
  addBookmarks: PropTypes.object,
  user: PropTypes.object
};

export default Card;