import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase';
import * as actions from '../../actions';
import './styles.css';

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, name } = this.state;
    try {
      const authUser = await auth.signIn(email, password);
      const user = {
        email: authUser.email,
        uid: authUser.uid
      };
      this.props.addUser(user);
      this.setState({
        name: '',
        email: '',
        password: '',
        error:''
      })
      this.props.history.push('/')
    } catch (error) {
      this.setState({error})
    }
  }

  handleChange = event => {
    const { name, value} = event.target;
    this.setState({ [name]: value })
  }

  render() {
    const { error } = this.state
    return(
      <form 
        onSubmit={this.handleSubmit}
        className='Signin-form'
      >
        <h2> SIGN INTO YOUR ACCOUNT </h2>
        <input
          className='input'
          name='email'
          value={this.state.email}
          placeholder='Enter Your Email'
          onChange={this.handleChange}
          type='email'
        />
        <input 
          className='input'
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));