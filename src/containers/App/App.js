import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { fetchBio, fetchSpaceXVideos } from '../../helpers/apiCalls';
import Header from '../../components/Header/Header.js';
import Homepage from '../../components/Homepage/Homepage';
import * as actions from '../../actions/index';
import './App.css';

export class App extends Component {
  constructor() {
    super();
  }

  fetchData = async () => {
    try {
      const bio = await fetchBio();
      await this.props.fetchCompanyBio(bio)
    } catch (error) {
      this.props.handleError(error.message)
    }
  }

  fetchVideos = async () => {
    try {
      const videos = await fetchSpaceXVideos();
      await this.props.fetchMissionVideos(videos)
    } catch(error) {
      this.props.handleError(error.message)
    }
  }

  componentDidMount() {
    this.fetchData();
    this.fetchVideos()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}/>
        </Switch>
      </div>
    );
  }
}

export const  mapStateToProps = state => ({
  companyBio: state.companyBio,
  missionVideos: state.missionVideos
})

export const  mapDispatchToProps = dispatch => ({
  fetchCompanyBio: bio => dispatch(actions.addCompanyBio(bio)),
  fetchMissionVideos: videos => dispatch(actions.upLoadVideos(videos)),
  handleError: message => dispatch(actions.addError(message))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));



