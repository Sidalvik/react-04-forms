import './PhotoList.css';
import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from './PhotoCard/PhotoCard';

function PhotoList(props) {
  return (
    <div className='PhotoList'>
        <PhotoCard/>
    </div>
  )
}

PhotoList.propTypes = {
  props: PropTypes.any,
}

export default PhotoList
