import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Rocket from '../../components/Rocket/Rocket';

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
      return <Rocket key={rocket.name+index} rocket={rocket}/>;
    });
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
export const mapStateToProps = ({rockets, missionVideos}) => ({
  rockets,
  missionVideos
});

RocketsContainer.propTypes = {
  rockets: PropTypes.array,
  missionVideos: PropTypes.array
};

export default withRouter(connect(mapStateToProps, null)(RocketsContainer));
