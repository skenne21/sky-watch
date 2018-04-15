import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  fetchRockets,
  fetchCapsules,
  fetchLaunchpads,
  fetchLaunches } from '../../helpers/apiCalls';
import * as actions from '../../actions/';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles.css';


export class Homepage extends Component {
  constructor(props) {
    super(props);
  }
  
  createBio = () => {
    const { 
      name,
      founder,
      headquarters,
      summary 
    } = this.props.companyBio[0]; 
    
    const html = this.props.missionVideos[0].id;
    const title = this.props.missionVideos[0].title;
    const detials = this.props.missionVideos[0].description;
    const state = headquarters.state;
    const address = headquarters.address;

    return (
      <div className='Homepage'>
        <section className='homepage-video'>
          <div className='text-box_homepage'>
            <h2 className='title'>{title}</h2>
            <p>{detials}</p>
          </div>
          <iframe 
            className='iframe'
            src={`https://www.youtube.com/embed/${html}?start=1320&autoplay=1`}
            height='600px'
            width='65%'
            title="Homepage iframe"
            allowFullScreen
          />
        </section>
        <section className='bio'>
          <div className='text-box'>
            <h2 className='title'>{name}</h2>
            <h3>Founder: {founder}</h3>
            <h3>Location: {`Location: ${address}, ${state}`}</h3>
            <p>About: {summary}</p>
          </div>
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

  handleLaunches = async () => {
    try {
      const launches = await fetchLaunches();
      this.props.getLaunches(launches);
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
        <form className='nav-links'>
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
            LAUNCHPADS 
          </NavLink>
          <NavLink
            name='launches'
            className='launches'
            activeClassName='isActive'
            to='/launches'
            onClick={this.handleLaunches}
          >
            LAUNCHES 
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
  launchpads: state.launchpads,
  user: state.user,
  launches: state.launches
});

export const mapDispatchToProps = dispatch =>({
  getRockets: rockets => dispatch(actions.addRockets(rockets)),
  getCapsules: capsules => dispatch(actions.addCapsules(capsules)),
  getLaunchpads: launchpads => dispatch(actions.addLaunchPads(launchpads)),
  getLaunches: launches => dispatch(actions.addLaunches(launches)),
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
  launchpads: PropTypes.array,
  getLaunches: PropTypes.func
};

// eslint-disable-next-line 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));