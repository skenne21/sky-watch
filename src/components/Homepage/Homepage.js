import React, { Component } from 'react';
import { fetchRockets } from '../../helpers/apiCalls';
import * as actions from '../../actions/index';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


export class Homepage extends Component {
  constructor() {
    super();
  }



  createBio = () => {
    const { 
      name,
      founder,
      headquarters,
      summary 
    } = this.props.companyBio[0]; 
    const html = this.props.missionVideos[0].id
    const state = headquarters.state;
    const address = headquarters.address;
    return (
      <div className='Homepage'>
        <section className='bio'>
          <h1>{name}</h1>
          <h2>{founder}</h2>
          <img src="../assets/starman.png"/>
          <h3>{`Location: ${address}, ${state}`}</h3>
          <iframe src={`https://www.youtube.com/embed/${html}`}/>
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

  handleClick = async (event) => {
    const { name } = event.target;
    switch(name) {
      case'rockets':
        const rockets = await fetchRockets();
        console.log(rockets)
      default:
        return name;
    }

    debugger;
  }

  
  render() {
    const { companyBio } = this.props

    return ( 
      <div className='Homepage'>
      {
        companyBio.length > 0 ? this.createBio() : this.createLoadingImage()
      }
        <form>
          <NavLink
            name='rockets' 
            className='rockets'
            activeClassName='isActive'
            to='/rockets'
            onClick={this.handleClick}
          >
            ROCKETS
          </NavLink>
        </form>
      </div>
    )
  } 
}

export const mapStateToProps = ({ companyBio, missionVideos }) => ({
  companyBio,
  missionVideos

});

export const mapDispatchToProps = dispatch =>({

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage))