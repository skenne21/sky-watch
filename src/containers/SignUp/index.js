import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, db } from '../../firebase';
import * as actions from '../../actions';
import './styles.css';

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

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password, name } = this.state;
    try  {
    const authUser = await auth.createUser(email, password)
    const dbUser = await db.createUser(authUser.uid, name, email)
    console.log({authUser});
    console.log({dbUser});
    debugger
    const user = {
      name,
      email: authUser.email,
      uid: authUser.uid
    }
    this.props.addUser(user)
    this.setState({
      name: '',
      email: '',
      password: '',
      error:''
    })
    this.props.history.push('/');
    } catch (error) {
      this.setState({error});
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
        className='SignUp-form'
      >
        <input
          className='input'
          name='name'
          value={this.state.name}
          placeholder='Enter Your Name'
          onChange={this.handleChange}
          type='text'
        />
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

export const mapStateToProps = ({user}) => ({
  user
})

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(actions.addUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
