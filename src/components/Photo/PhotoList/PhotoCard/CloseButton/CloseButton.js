import React from 'react';
import PropTypes from 'prop-types';

function CloseButton(props) {
  const {onClose: handleClose} = props;
  return (
    <button type='button' className='CloseButton' onClick = {handleClose}>✘</button>
  )
}

CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default CloseButton
