import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Capsule from '../../components/Capsule/Capsule';
import * as actions from '../../actions';


export class CapsulesContainer extends Component {
  
  createComponent = () => {
    if (this.props.missionVideos.length) {
      const { id, title, description } = this.props.missionVideos[2];
      return (
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <iframe src={`https://www.youtube.com/embed/${id}`}/>
          {  
            this.createCapsules()
          }
        </div>
      );
    }
  }

  addCapsule = (capsule) => {
    const isBookemarked = this.props.bookmarks.includes(capsule);
    if(!isBookemarked) {
      this.props.addToBookmarks(capsule); 
    } else {
      this.props.removeBookmark(capsule);
    }
  }

  createCapsules = () => {
    const { capsules } = this.props;
    return capsules.map((capsule, index) => {
      return <Capsule key={capsule.name+index} capsule={capsule} addCapsule={this.addCapsule} />;
    });
  }

  render() {
    return (
      <div className='CapsulesContainer'>
        {this.createComponent()}
      </div>
    );
  }
}

export const mapStateToProps = ({ capsules, missionVideos, bookmarks }) => ({
  capsules,
  missionVideos, 
  bookmarks
});

export const mapDispatchToProps = dispatch => ({
  addToBookmarks: bookmark => dispatch(actions.addBookmarks(bookmark)),
  removeBookmark: bookmark => dispatch(actions.removeBookmark(bookmark))
})

CapsulesContainer.propTypes = {
  capsules: PropTypes.array,
  missionVideos: PropTypes.array
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CapsulesContainer));

