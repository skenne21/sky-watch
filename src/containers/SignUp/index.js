import React, { Component } from 'react';
import { auth } from '../../firebase';

class SignUp extends Component {
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
     const { email, password } = this.state;
    auth.doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState(() => ({
          name: '',
          email: '',
          password: '',
          error:''
        }))
      })
      .catch( error => { this.setState({ error: error})})

  }

  handleChange = event => {
    const { name, value} = event.target;
    this.setState({ [name]: value })
  }

  render() {
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
        <button>X</button>
      </form>
    )
  }
}

export default SignUp;
