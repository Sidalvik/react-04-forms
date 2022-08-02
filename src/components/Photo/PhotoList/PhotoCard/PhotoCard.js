import './PhotoCard.css';
import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from './CloseButton/CloseButton';


function PhotoCard(props) {
  const {card, onClose: handleClickCloseCard} = props;
  return (
    <div className='PhotoCard'>
      <CloseButton onClose={() => handleClickCloseCard(card.id)}/>
      <img src={card.src} alt=''/>
    </div>
  )
}


PhotoCard.propTypes = {
    card: PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
}

export default PhotoCard
