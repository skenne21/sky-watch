import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Capsule from '../../components/Capsule/Capsule';


export class CapsulesContainer extends Component {

  createComponent = () => {
    const { capsules } = this.props;
    return capsules.map((capsule, index) => {
      return <Capsule key={capsule.name+index} capsule={capsule} />
    })
  }

  render() {
    return (
      <div className='CapsulesContainer'>
        {this.createComponent()}
      </div>
    )
  }
}

export const mapStateToProps = ({ capsules }) => ({
  capsules
});

export default withRouter(connect(mapStateToProps, null)(CapsulesContainer))

