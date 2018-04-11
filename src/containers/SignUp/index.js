import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase';
import * as actions from '../../actions';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    }

  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, name } = this.state;

    auth.createUser(email, password)
      .then(authUser => {
        const user = {
          name,
          email: authUser.email,
          uid: authUser.uid
        }
        this.props.addUser(user)
      })
      .then(authUser => {
        this.setState(() => ({
          name: '',
          email: '',
          password: '',
          error:''
        }))
      })
      .then(authUser => this.props.history.push('/'))
      .catch( error => { this.setState({error})})
  }

  handleChange = event => {
    const { name, value} = event.target;
    this.setState({ [name]: value })
  }

  render() {
    const { error } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name='name'
          value={this.state.name}
          placeholder='Enter Your Name'
          onChange={this.handleChange}
          type='text'
        />
        <input
          name='email'
          value={this.state.email}
          placeholder='Enter Your Email'
          onChange={this.handleChange}
          type='email'
        />
        <input 
          name='password'
          vaule={this.state.password}
          placeholder='Enter Your Password'
          onChange={this.handleChange}
          type='password'
        />
        <button>Enter Your Account</button>
        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const mapStateToProps = ({user}) => ({
  user
})

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(actions.addUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
