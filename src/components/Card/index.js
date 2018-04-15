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
    console.log(card)
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
        <h2 className='signinMessage'>SIGNIN TO VEIW MORE INFROMATION</h2>
      </div>
    );
  };
  
  const factCards = (card) => {
    return (
      <div 
        className={`${classname}`}
      >
        <h1>{name}</h1>
        {tags}
      </div>
    );
  };

  return (
    <div className='card'>
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