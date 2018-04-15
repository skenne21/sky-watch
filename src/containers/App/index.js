import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchBio, fetchSpaceXVideos } from '../../helpers/apiCalls';
import Header from '../../components/Header';
import Homepage from '../Homepage/';
import CardsContainer from '../CardsContainer';
import LaunchesContainer from '../LaunchesContainer';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import * as actions from '../../actions/';
import './styles.css';

export class App extends Component {

  fetchData = async () => {
    try {
      const bio = await fetchBio();
      await this.props.fetchCompanyBio(bio);
    } catch (error) {
      this.props.handleError(error.message);
    }
  }

  fetchVideos = async () => {
    try {
      const videos = await fetchSpaceXVideos();
      await this.props.fetchMissionVideos(videos);
    } catch (error) {
      this.props.handleError(error.message);
    }
  }

  componentDidMount() {
    this.fetchData();
    this.fetchVideos();
  }

  render() {
    return (
      <div className="App">
        <Header history={this.props.history}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/rockets' component={CardsContainer}/>
          <Route path='/capsules' component={CardsContainer}/>
          <Route path='/launchpads' component={CardsContainer}/>
          <Route path='/launches' component={LaunchesContainer} />
        </Switch>
      </div>
    );
  }
}

export const  mapStateToProps = state => ({
  companyBio: state.companyBio,
  missionVideos: state.missionVideos
});

export const  mapDispatchToProps = dispatch => ({
  fetchCompanyBio: bio => dispatch(actions.addCompanyBio(bio)),
  fetchMissionVideos: videos => dispatch(actions.upLoadVideos(videos)),
  handleError: message => dispatch(actions.addError(message))
});

App.propTypes = {
  fetchCompanyBio: PropTypes.func,
  fetchMissionVideos: PropTypes.func,
  handleError: PropTypes.func,
  companyBio: PropTypes.object,
  missionVideos: PropTypes.array,
  history: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));



