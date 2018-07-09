import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SpaceXBio = ({ bio }) => {

  const { 
      name,
      founder,
      headquarters,
      summary 
    } = bio; 
    
    const state = headquarters.state;
    const address = headquarters.address;

  return (
    <section className='main-header'>
      <h1>WELCOME TO SKY WATCH</h1>
      <div className='text-box'>
        <h2 className='subHeader'>
          {
            `SpaceX is an interactive educational site getting users
            excited about SpaceX innovative technologies.`
          }
        </h2>
        <p className='bio'>
          {
            `${name} was founded by ${founder}. 
            ${summary} SpaceX is located in ${address}, ${state}`
          }
        </p>
      </div>
      <p className='button-text'>WATCH FALCON HEAVY LAUNCH</p>
      <a className='videoButton' href="#homepage-video">▽</a>   
    </section>
  )
}

SpaceXBio.propTypes = { 
  bio: PropTypes.object
}

export default SpaceXBio;