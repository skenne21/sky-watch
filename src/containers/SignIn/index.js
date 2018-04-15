import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import './styles.css';

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
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
      });
      this.props.history.push('/');
    } catch (error) {
      this.setState({error});
    }
  }

  handleChange = event => {
    const { name, value} = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { error, email, password,  } = this.state;
    return (
      <form 
        onSubmit={this.handleSubmit}
        className='Signin-form'
      >
        <h2> SIGN INTO YOUR ACCOUNT </h2>
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

export const mapStateToProps = ({user}) => ({
  user
});

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(actions.addUser(user))
});

SignIn.propTypes = {
  addUser: PropTypes.func,
  user: PropTypes.object,
  history: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));