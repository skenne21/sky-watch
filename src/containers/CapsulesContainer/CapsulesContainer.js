import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Capsule from '../../components/Capsule/Capsule';


export class CapsulesContainer extends Component {
  
  createComponent = () => {
    if(this.props.missionVideos.length) {
      const { id, title, description } = this.props.missionVideos[2]
      return (
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <iframe src={`https://www.youtube.com/embed/${id}`}/>
          {  
            this.createCapsules()
          }
        </div>
      )
    }
  }

 
  createCapsules = () => {
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

export const mapStateToProps = ({ capsules, missionVideos }) => ({
  capsules,
  missionVideos
});

export default withRouter(connect(mapStateToProps, null)(CapsulesContainer))

