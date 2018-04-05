import React, { Component } from 'react';
import * as actions from '../../actions/index';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


export class Homepage extends Component {

  createCards = () => {
    const { 
      name,
      founder,
      headquarters,
      summary 
    } = this.props.companyBio[0]; 
    const state = headquarters.state;
    const address = headquarters.address;
    
    return (
      <div className='Homepage'>
        <section className='bio'>
          <h1>{name}</h1>
          <h2>{founder}</h2>
          <img src="../../assets/starman.png"/>
          <h3>{`Location: ${address}, ${state}`}</h3>
          <p>{summary}</p>
        </section>
      </div>
    );
  }

  createLoadingImage = () => {
    return (
      <div className='loading'>
        <img src="../../assets/starman.png"/>
        <p> Loading </p>
      </div>
    )
  }
  
  render() {
    const { companyBio } = this.props

    return ( 
      companyBio.length > 0 ? this.createCards() : this.createLoadingImage()
    )
  } 
}

export const mapStateToProps = ({ companyBio }) => ({
  companyBio
});

export const mapDispatchToProps = dispatch =>({

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage))