import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import './styles.css';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password, name } = this.state;
    try  {
      const authUser = await auth.createUser(email, password);
      const user = {
        name,
        email: authUser.email,
        uid: authUser.uid
      };
      this.resetState(user)
    } catch (error) {
      this.setState({error});
    }
  }

  resetState = (user) => {
    this.setState({
      name: '',
      email: '',
      password: '',
      error:''
    });
    this.props.addUser(user);
    this.props.history.push('/');
  }

  handleChange = event => {
    const { name, value} = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { error, password, name, email } = this.state;
    return (
      <form 
        onSubmit={this.handleSubmit}
        className='SignUp-form'
      >
        <input
          className='input'
          name='name'
          value={name}
          placeholder='Enter Your Name'
          onChange={this.handleChange}
          type='text'
        />
        <input
          className='input'
          name='email'
          value={email}
          placeholder='Enter Your Email'
          onChange={this.handleChange}
          type='email'
        />
        <input 
          className='input'
          name='password'
          vaule={password}
          placeholder='Enter Your Password'
          onChange={this.handleChange}
          type='password'
        />
        <button>Enter Your Account</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export const mapStateToProps = ({ user }) => ({
  user
});

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(actions.addUser(user))
});

SignUp.propTypes = {
  addUser: PropTypes.func,
  user: PropTypes.object,
  history: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
