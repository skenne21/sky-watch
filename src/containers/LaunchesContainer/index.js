import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import { randomQuestions } from '../../mockData/mockQuestions';
import './styles.css';

export class LaunchesContainer extends Component {
  constructor() {
    super();
    this.state = {
      falcon1: [],
      falcon9: [],
      falconHeavy: [],
      cards: [...randomQuestions()]
    };
  }

  handleClick = event => {
    const { name } = event.target;
    if (this.props.launches.length) {
      const launches = this.props.launches[0][name];
      this.setState({ [name] : launches});
      this.setState({cards: launches });
    } else {
      return (<p className='launch-link'>PLEASE SIGN IN TO VEIW MORE INFORMATION</p>);
    }
  }

  createCards = (cards) => {
    return cards.map((card, index) => {
      return (
        <Card 
          key={index+card.name}
          card={card}
          classname={`${card.type}-card`}
        />
      );
    });
  }

  render() {
    const { cards } = this.state;
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
            this.createCards(cards) 
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
