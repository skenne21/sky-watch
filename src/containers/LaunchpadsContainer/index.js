import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Launchpad from '../../components/Launchpad/';
import * as actions from '../../actions';
import './styles.css';

export class LaunchpadsContainer extends Component {
  createComponent = () => {
    if (this.props.missionVideos.length) {
      const { id, title, description } = this.props.missionVideos[3];
      return (
        <div>
          <div className='iframe-section'>
            <div className='text-box'>
              <h2>{title}</h2>
            </div>
            <iframe 
              src={`https://www.youtube.com/embed/${id}?start=10&autoplay=1`}
              height='600px'
              width='65%'
              title="capsule iframe"
              allowfullScreen
            />
          </div>
          <div className='LaunchpadsContainer'>
            {  
              this.createLaunchpads()
            }
          </div>
        </div>
      );
    }
  }

  addLaunchPads = (launchpad) => {
    const isBookemarked = this.props.bookmarks.includes(launchpad);
    if(!isBookemarked) {
      this.props.addToBookmarks(launchpad); 
    } else {
      this.props.removeBookmark(launchpad);
    }
  }

  createLaunchpads = () => {
    return this.props.launchpads.map((launchpad, index) => {
      return <Launchpad key={launchpad.name+index} launchpad={launchpad} addLaunchPads={this.addLaunchPads}/>;
    });
  }
  render() {
    return (
      <div className='lauchpadsContainer'>
        { 
          this.createComponent()
        }
      </div>
    );
  }
}

export const mapStateToProps = ({ launchpads, missionVideos, bookmarks }) => ({
  launchpads,
  missionVideos,
  bookmarks
});

export const mapDispatchToProps = dispatch => ({
  addToBookmarks: bookmark => dispatch(actions.addBookmarks(bookmark)),
  removeBookmark: bookmark => dispatch(actions.removeBookmark(bookmark))
});

LaunchpadsContainer.propTypes = {
  launchpads: PropTypes.array,
  missionVideos: PropTypes.array
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LaunchpadsContainer));