import './PhotoList.css';
import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from './PhotoCard/PhotoCard';

function PhotoList(props) {
  const {dataUrl, onClose: handleClickCloseCard} = props;

  return (
    <div className='PhotoList'>
        {dataUrl.map((item) => <PhotoCard key={item.id} card={item} onClose={handleClickCloseCard}/>)}
    </div>
  )
}

PhotoList.propTypes = {
  dataUrl: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string})),
  onClose: PropTypes.func.isRequired,
}


export default PhotoList
