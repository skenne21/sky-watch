import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import Rocket from '../../components/Rocket/Rocket';

export class RocketsContainer extends Component {

  createRockets = () => {
    return this.props.rockets.map((rocket, index) => {
      return <Rocket key={rocket.name+index} rocket={rocket}/>
    })
  }

  render() {
    return(
      <div className='RocketContainer'>
    {
      this.createRockets()
    }
      </div>
    )
  }
}
export const mapStateToProps = state => ({
  rockets: state.rockets
});

export default withRouter(connect(mapStateToProps, null)(RocketsContainer))
