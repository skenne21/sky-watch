import React from 'react';
import NavBar from '../../containers/NavBar';
import './styles.css'

const Header = ({history}) => {

  return (
    <header className="header">
      <h1 className="App-title">Welcome to Sky Watch: <span>A SpaceX Experience</span></h1>
      <NavBar history={history} />
    </header>
  );
};

export default Header;