import './PhotoCard.css';
import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from './CloseButton/CloseButton';
import PhotoImg from './PhotoImg/PhotoImg';


function PhotoCard(props) {
  return (
    <div className='PhotoCard'>
      <CloseButton/>
      <PhotoImg/>
    </div>
  )
}

PhotoCard.propTypes = {
    props: PropTypes.any,
}

export default PhotoCard
