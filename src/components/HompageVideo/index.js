import React from 'react';
import PropTypes from 'prop-types';


const HomepageVideo = ({ video }) => {
  const { id , title, description } = video;

  return (
    <section className='homepage-video'>
      <div className='text-box_homepage'>
        <h2 className='title'  id='homepage-video'>{title}</h2>
        <p>{description}</p>
      </div>
      <iframe 
        className='iframe'
        src={`https://www.youtube.com/embed/${id}?start=1320&autoplay=1`}
        height='600px'
        width='65%'
        title="Homepage iframe"
        allowFullScreen
      />
    </section>
  )
}

HomepageVideo.propTypes = { 
  video: PropTypes.object
}

export default HomepageVideo;