import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Rocket from '../../components/Rocket/';
import * as actions from '../../actions';
import './styles.css';

export class RocketsContainer extends Component {

  createComponent = () => {
    if (this.props.missionVideos.length) {
      const { id, title, description } = this.props.missionVideos[1];
      return (
        <div>
          <div className='iframe-section'>
            <div className='text-box'>
              <h2>{title}</h2>
            </div>
            <iframe 
              src={`https://www.youtube.com/embed/${id}?start=3372&autoplay=1`}
              height='600px'
              width='65%'
              title="capsule iframe"
              allowfullScreen
            />
          </div>
          <div className="rockets-seciton">
            {  
              this.createRockets()
            }
          </div>
        </div>
      );
    }
  }

  createRockets = () => {
    return this.props.rockets.map((rocket, index) => {
      return <Rocket key={rocket.name+index} rocket={rocket} addRockets={this.addRockets}/>;
    });
  }

  addRockets = (rocket) => {
    const isBookemarked = this.props.bookmarks.includes(rocket);
    if(!isBookemarked) {
      this.props.addToBookmarks(rocket) 
    } else {
      this.props.removeBookmark(rocket)
    }
  }

  render() {
    return (
      <div className='RocketContainer'>
        { 
          this.createComponent()
        } 
      </div>
    );
  }
}

export const mapStateToProps = ({rockets, missionVideos, bookmarks}) => ({
  rockets,
  missionVideos,
  bookmarks
});

export const mapDispatchToProps = dispatch => ({
  addToBookmarks: bookmark => dispatch(actions.addBookmarks(bookmark)),
  removeBookmark: bookmark => dispatch(actions.removeBookmark(bookmark))
});

RocketsContainer.propTypes = {
  rockets: PropTypes.array,
  missionVideos: PropTypes.array
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RocketsContainer));
