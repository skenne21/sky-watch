import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import Card from '../../components/Card';
import './styles.css';


export class CapsulesContainer extends Component {
  
  determineCardType = () => {
    const { pathname } = this.props.history.location;

    if (pathname === '/rockets') {
      return this.createComponent(this.props.rockets)
    }

    if (pathname === '/capsules') {
      return this.createComponent(this.props.capsules);
    }

    if (pathname === '/launchpads') {
      return this.createComponent(this.props.launchpads)
    }
  }

  createComponent = (cardType) => {
    if (this.props.missionVideos.length) {
      const { id, title, description } = this.props.missionVideos[1];
      return (
        <div>
          <div className='iframe-section'>
            <div className='cards_text-box text-box'>
              <h2 className='cards-container cards_h2'>{title}</h2>
            </div>
            <iframe 
              src={`https://www.youtube.com/embed/${id}?start=96&autoplay=1`}
              height='600px'
              width='65%'
              title="capsule iframe"
              allowFullScreen
            />
          </div>
          <div className="Cards-contianer">
            {  
              this.createCards(cardType)
            }
          </div>
        </div>
      );
    }
  }

  addBookmarks = (card) => {
    const isBookemarked = this.props.bookmarks.includes(card);
    if(!isBookemarked) {
      this.props.addToBookmarks(card); 
    } else {
      this.props.removeBookmark(card);
    }
  }

  createCards = (cardsToMap) => {
    return cardsToMap.map((card, index) => {
      return (
        <Card 
          key={card.name+index} 
          card={card} 
          addBookmarks={this.addBookmarks}
          className={`${card.type}-card`}
        />)
    });
  }

  render() {
    return (
      <div className='CapsulesContainer'>
        {this.determineCardType()}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  capsules: state.capsules,
  missionVideos: state.missionVideos,
  launchpads: state.launchpads,
  rockets: state.rockets, 
  bookmarks: state.bookmarks
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
