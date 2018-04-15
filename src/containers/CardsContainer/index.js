import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import Card from '../../components/Card';
import { randomQuestions } from '../../mockData/mockQuestions';
import './styles.css';


export class CapsulesContainer extends Component {
  
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
      return null
    }
  }

  createComponent = (cardType) => {
    if (this.props.missionVideos.length) {
      const { id, title, description } = this.props.missionVideos[3];
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
            {  
              this.createCards(cardType)
            }
          </div>
        </div>
      );
    }
  }

  // addBookmarks = (card) => {
  //   const isBookemarked = this.props.bookmarks.includes(card);
  //   if(!isBookemarked) {
  //     card.isActive = true;
  //     this.props.addToBookmarks(card); 
  //   } else {
  //     this.props.removeBookmark(card);
  //     card.isActive = false;
  //   }

  // }

  createCards = (cardsToMap) => {
    return cardsToMap.map((card, index) => {
      return (
        <Card 
          key={card.name+index} 
          card={card} 
          addBookmarks={this.addBookmarks}
          className={`${card.type}-card`}
          user={this.props.user}
        />)
    });
  }

  render() {
    const questions = randomQuestions()
    const { user } = this.props;
    console.log(user)
    return (
      <div className='CapsulesContainer'>
        {
          user.length ? this.determineCardType() : this.createCards(questions)
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
  bookmarks: state.bookmarks,
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  addToBookmarks: bookmark => dispatch(actions.addBookmarks(bookmark)),
  removeBookmark: bookmark => dispatch(actions.removeBookmark(bookmark))
})

CapsulesContainer.propTypes = {
  capsules: PropTypes.array,
  rockets: PropTypes.array,
  launchpads: PropTypes.array,
  missionVideos: PropTypes.array
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CapsulesContainer));
