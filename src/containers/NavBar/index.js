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
    const user = Object.keys(this.props.user)
    if (user.length > 1) {
      return (<button onClick ={this.removeUser}>SignOut</button>)
    } else {
      return (<NavLink className='signin' to='/signin'>SIGN IN</NavLink>)
    }
  }

  render() {
    
    return (
      <div className="NavBar">
        {this.toggleLogin()}
        <NavLink 
          className='createAccount' 
          to='/signup'
        >NEW ACCOUNT
        </NavLink>
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