import React from 'react';
import NavBar from '../../containers/NavBar';
import PropTypes from 'prop-types';
import './styles.css';

const Header = ({history}) => {

  return (
    <header className="header">
      {/* eslint-disable max-len */}
      <h1 className="App-title">Welcome to Sky Watch: <span>A SpaceX Experience</span></h1>
      {/* eslint-enable max-len */}
      <NavBar history={history} />
    </header>
  );
};

Header.propTypes = {
  history: PropTypes.object
};

export default Header;