import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Rocket from '../../components/Rocket/Rocket';
import * as actions from '../../actions';

export class RocketsContainer extends Component {

  createComponent = () => {
    if (this.props.missionVideos.length) {
      const { id, title, description } = this.props.missionVideos[1];
      return (
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <iframe src={`https://www.youtube.com/embed/${id}`}/>
          {  
            this.createRockets()
          }
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
