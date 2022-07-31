import React from 'react';
import PropTypes from 'prop-types';

function InputDistance(props) {
    const {distance, onChange: handelChange} = props;

  return (
    <input type='number' name='distance' value={distance} onChange={handelChange} min='0'/>
  )
}

InputDistance.propTypes = {
    distance: PropTypes.string.isRequired,
    handelChange: PropTypes.func.isRequired,
}


export default InputDistance
