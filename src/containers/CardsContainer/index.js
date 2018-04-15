import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import Card from '../../components/Card';
import { randomQuestions } from '../../mockData/mockQuestions';
import './styles.css';


export class CardsContainer extends Component {
  constructor(props) {
    super(props);
  }

  determineCardType = () => {
    const { pathname } = this.props.history.location;
    switch (pathname) {
    case '/rockets':
      return this.createComponent(this.props.rockets);
    case '/capsules':
      return this.createComponent(this.props.capsules);
    case '/launchpads':
      return this.createComponent(this.props.launchpads);
    default:
      return null;
    }
  }

  createComponent = (cardType) => {
    if (this.props.missionVideos.length) {
      const { id, title } = this.props.missionVideos[3];
      return (
        <div>
          <div className='iframe-section'>
            <div className='cards_text-box text-box'>
              <h2 className='cards-container cards_h2'>{title}</h2>
            </div>
            <iframe 
              src={`https://www.youtube.com/embed/${id}?start=148&autoplay=1`}
              height='300px'
              width='45%'
              title="capsule iframe"
              allowFullScreen
            />
          </div>
          <div className="Cards-contianer">
            {
              cardType.length ? <p className='current-p'>CURRENT</p> : ''
            }
            <div className='main'>
              {  
                this.createCards(cardType)
              }
            </div>
          </div>
        </div>
      );
    }
  }

  createCards = (cardsToMap) => {
    return cardsToMap.map((card, index) => {
      return (
        <Card 
          key={card.name+index} 
          card={card} 
          classname={`${card.type}-card`}
          user={this.props.user}
        />);
    });
  }

  render() {
    const questions = randomQuestions();
    const { user } = this.props;
    const users = Object.keys(user)
    return (
      <div className='CapsulesContainer'>
        {
          users.length ? this.determineCardType() : this.createCards(questions)
        }
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  capsules: state.capsules,
  missionVideos: state.missionVideos,
  launchpads: state.launchpads,
  rockets: state.rockets, 
  user: state.user
});


CardsContainer.propTypes = {
  capsules: PropTypes.array,
  rockets: PropTypes.array,
  launchpads: PropTypes.array,
  missionVideos: PropTypes.array,
  user: PropTypes.array,
  history: PropTypes.object
};


/* eslint-disable max-len*/
export default withRouter(connect(mapStateToProps, null)(CardsContainer));
