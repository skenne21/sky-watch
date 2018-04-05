import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBio } from './helpers/apiCalls';
import * as actions from './actions/index';
import './App.css';

export class App extends Component {
  constructor() {
    super() 

  }

  fetchData = async () => {
    try {
      const bio = await fetchBio();
      await this.props.fetchCompanyBio(bio)
    } catch (error) {
      // not sure this is working
      this.props.handleError(error.message)
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export const  mapStateToProps = state => ({
  companyBio: state.companyBio
})

export const  mapDispatchToProps = dispatch => ({
  fetchCompanyBio: (bio) => dispatch(actions.addCompanyBio(bio)),
  handleError: (message) => dispatch(actions.companyError(message))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));



