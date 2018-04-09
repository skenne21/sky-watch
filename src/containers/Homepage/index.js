import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  fetchRockets,
  fetchCapsules,
  fetchLaunchpads } from '../../helpers/apiCalls';
import * as actions from '../../actions/';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


export class Homepage extends Component {
  createBio = () => {
    const { 
      name,
      founder,
      headquarters,
      summary 
    } = this.props.companyBio[0]; 
    
    const html = this.props.missionVideos[0].id;
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
        <img src="../../assets/starman.png" alt="Picture of starman"/>
        <p> Loading </p>
      </div>
    );
  }

  handleRockets = async ( ) => {
    try {
      const rockets = await fetchRockets();
      this.props.getRockets(rockets);
    } catch (error) {
      this.props.handleError(error.message);
    } 
  }

  handleCapsules = async () => {
    try {
      const capsules = await fetchCapsules();
      this.props.getCapsules(capsules);
    } catch (error) {
      this.props.handleError(error.message);
    }
  }

  handleLaunchpads = async () => {
    try {
      const launchpads = await fetchLaunchpads();
      this.props.getLaunchpads(launchpads);
    } catch (error) {
      this.props.handleError(error.message);
    }
  }

  
  render() {
    const { companyBio } = this.props;
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
            onClick={this.handleRockets}
          >
            ROCKETS
          </NavLink>
          <NavLink
            name='capsules'
            className="capsules"
            activeClassName='isActive'
            to='/capsules'
            onClick={this.handleCapsules}
          >
            CAPSULES
          </NavLink>
          <NavLink
            name='launchpad'
            className='launchpad'
            activeClassName='isActive'
            to='/launchpads'
            onClick={this.handleLaunchpads}
          >
            LANDINGPADS 
          </NavLink>
        </form>
      </div>
    );
  } 
}

export const mapStateToProps = state => ({
  companyBio: state.companyBio,
  missionVideos: state.missionVideos,
  rockets: state.rockets,
  capsules: state.capsules,
  launchpads: state.launchpads
});

export const mapDispatchToProps = dispatch =>({
  getRockets: rockets => dispatch(actions.addRockets(rockets)),
  getCapsules: capsules => dispatch(actions.addCapsules(capsules)),
  getLaunchpads: launchpads => dispatch(actions.addLaunchPads(launchpads)),
  handleError: message => dispatch(actions.addError(message))
});

Homepage.propTypes = {
  getRockets: PropTypes.func,
  getCapsules: PropTypes.func,
  getLaunchpads: PropTypes.func,
  handleError: PropTypes.func,
  companyBio: PropTypes.array,
  missionVideos: PropTypes.array,
  capsules: PropTypes.array,
  launchpads: PropTypes.array
};

// eslint-disable-next-line 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));