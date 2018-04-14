import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './styles.css';

export class NavBar extends Component {

  removeUser = async () => {
    auth.signOut();
    this.props.removeUser(this.props.user);
  }

  toggleLogin = () => {
    const user = Object.keys(this.props.user);
    const { pathname }  = this.props.history.location;
    
    if (user.length > 1) {
      return (
        <div>
          <button onClick ={this.removeUser}>SignOut</button>
          {
            pathname !== '/' ? <NavLink to='/'>HOME</NavLink> : ''
          }
        </div>
      )
    } else {
      return (
        <div>
          <NavLink className='signin' to='/signin'>SIGN IN</NavLink>
          <NavLink className='createAccount' to='/signup'>NEW ACCOUNT</NavLink>
        </div>
      )
    }
  }

  render() {
    
    return (
      <div className="NavBar">
        {this.toggleLogin()}
      </div>
    )
  }
}

export const mapStateToProps = ({ user }) => ({
  user
});

export const mapDispatchToProps = dispatch => ({
  removeUser: user => dispatch(actions.removeUser(user))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))