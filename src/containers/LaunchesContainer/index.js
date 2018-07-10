import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LaunchCard from '../../components/LaunchCards/';
import { randomQuestions } from '../../mockData/mockQuestions';
import './styles.css';

export class LaunchesContainer extends Component {
  constructor() {
    super();
    this.state = {
      falcon1: [],
      falcon9: [],
      falconHeavy: [],
      isactive: false,
      cards: [...randomQuestions()]
    };
  }

  handleClick = event => {
    const { name } = event.target;

    if (this.props.launches.length) {
      const launches = this.props.launches[0][name];
      this.setState({ [name] : launches});
      this.setState({ cards: launches, isactive: true });
    } else {
      return (
        <Link 
          className='link'
          to='/signin'
        >
          SIGNIN TO SEE MORE INFORMATION
        </Link>
      )
    }
  }

  createCards = (cards) => {
    return cards.map((card, index) => {
      return (
        <LaunchCard 
          key={index+card.name}
          launch={card}
          classname={`${card.type}-card`}
        />
      );
    });
  }

  createQuestion = (card) => {
    const { question, stats } = card[0];

    return (
      <div className='questionCard'>
        <div className='question front'>
          <h2>Q:</h2>
          <p>{question}</p>
          <p id='flip-button'>☛</p>
        </div>
        <div 
          className='question back'
        >
          <h2>A:</h2>
          {stats.answer}
        </div>
      </div>
    )
  }

  render() {
    const { cards, isactive } = this.state;
    return (
      <div className='LaunchesContainer'>
        <div className='launches-buttons'>
          <button
            name='falcon1'
            className='buttons'
            onClick={this.handleClick}
          >
            FALCON 1
          </button>
          <button
            name='falcon9'
            className='buttons'
            onClick={this.handleClick}
          >
            FALCON 9</button>
          <button
            name='falconHeavy'
            className='buttons'
            onClick={this.handleClick}
          >
            FALCON HEAVY
          </button>
        </div>
        <div className='main'>
          {
            isactive ? this.createCards(cards) : this.createQuestion(cards)
          }
        </div>
      </div>
    );
  }
}

export const mapStateToProps = ({ launches }) => ({
  launches
});

LaunchesContainer.propTypes = {
  launches: PropTypes.array
};

export default withRouter(connect(mapStateToProps, null)(LaunchesContainer));
