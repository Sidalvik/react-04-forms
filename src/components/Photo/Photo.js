import './Photo.css';
import React from 'react';
import PropTypes from 'prop-types';
import Click2Select from './Click2Select/Click2Select';
import PhotoList from './PhotoList/PhotoList';

function Photo(props) {
  return (
    <div className='Photo'>
        <Click2Select/>
        <PhotoList/>
    </div>
  )
}

Photo.propTypes = {
    props: PropTypes.any,
}

export default Photo
