import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import { connect } from 'react-redux';

export class NavBar extends Component {

  removeUser = async () => {
    const signOut = await auth.doSignOut();
    console.log(signOut)
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        { user.length > 1 ? 
          <button onChange={this.removeUser}>SignOut</button> : 
          <Link to='/signin'>SignIn</Link>}
      </div>
    )
  }
}

export const mapStateToProps = ({ user }) => ({
  user
})



export default withRouter(connect(mapStateToProps, null)(NavBar))