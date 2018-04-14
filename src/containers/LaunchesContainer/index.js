import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import Card from '../../components/Card';

class LaunchesContainer extends Component {
  constuctor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div clasName='LaunchesContainer'>
        <button
          className='buttons'
          onClick={this.handleClick}
        >
          FALCON 1
        </button>
        <button
          className='buttons'
          onClick={this.handleClick}
        >
          FALCON 9</button>
        <button
          className='buttons'
          onClick={this.handleClick}
        >
          FALCON HEAVY
        </button>
      </div>
    )
  }
}
export const mapStateToProps = ({launches}) => {
  launches
}

export default withRouter(connect(mapStateToProps, null)(LaunchesContainer));
