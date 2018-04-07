import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export const RocketContainer = (props) => {
  console.log(props)
  // const createRockets = rockets.map(rocket => {
  //   console.log(rocket)
  // });

  return (
    <div className='RocketContainer'>
    </div>
  )
}

export const mapStateToProps = ({rockets}) => ({
  rockets
});

export const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RocketContainer))
