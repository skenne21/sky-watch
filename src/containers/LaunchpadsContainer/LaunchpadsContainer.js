import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Launchpad from '../../components/Launchpad/Launchpad';
import * as actions from '../../actions';

export class LaunchpadsContainer extends Component {
  createComponent = () => {
    if(this.props.missionVideos.length) {
      const { id, title, description } = this.props.missionVideos[3]
      return (
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <iframe src={`https://www.youtube.com/embed/${id}`}/>
          {  
            this.createLaunchpads()
          }
        </div>
      )
    }
  }

  createLaunchpads = () => {
    return this.props.launchpads.map((launchpad, index) => {
      return <Launchpad key={launchpad.name+index} launchpad={launchpad}/>
    })
  }
  render() {
    return (
      <div className='lauchpadsContainer'>
        { 
        this.createComponent()
        }
      </div>
    )
  }
}

export const mapStateToProps = ({ launchpads, missionVideos }) => ({
  launchpads,
  missionVideos,
});

export default withRouter(connect(mapStateToProps, null)(LaunchpadsContainer))