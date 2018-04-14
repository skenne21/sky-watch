import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import Card from '../../components/Card';

export class LaunchesContainer extends Component {
  constructor() {
    super();
    this.state = {
      falcon1: [],
      falcon9: [],
      falconHeavy: [],
      isActive: false,
    }
  }

  handleClick = event => {
    const { name } = event.target;
    if (this.props.launches.length) {
      if (!this.state[name].length) {
        const launches = this.props.launches[0][name];
        this.setState({ [name] : launches});
        this.setState({isActive: true});
      } else {
        this.setState({isActive: false});
      };
    };
  }


  render() {
    return (
      <div className='LaunchesContainer'>
        <button
          name='falcon1'
          className='buttons'
          onClick={this.handleClick}
        >
          FALCON 1
        </button>
        <button
          name='falcon9'
          className='buttons'
          onClick={this.handleClick}
        >
          FALCON 9</button>
        <button
          name='falconHeavy'
          className='buttons'
          onClick={this.handleClick}
        >
          FALCON HEAVY
        </button>
      </div>
    )
  }
}
export const mapStateToProps = ({launches}) => ({
  launches
})

export default withRouter(connect(mapStateToProps, null)(LaunchesContainer));
