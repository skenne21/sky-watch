import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import { connect } from 'react-redux';
import './styles.css';

export class NavBar extends Component {

  removeUser = async () => {
    const signOut = await auth.doSignOut();
    console.log(signOut)
  }

  render() {
    const { user } = this.props;
    return (
      <div className="NavBar">
        { user.length > 1 ? 
          <NavLink onChange={this.removeUser}>SignOut</NavLink> : 
          <NavLink className='signin' to='/signin'>SIGN IN</NavLink>
        }
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
})



export default withRouter(connect(mapStateToProps, null)(NavBar))