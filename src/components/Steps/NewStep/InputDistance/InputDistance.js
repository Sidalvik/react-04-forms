import React from 'react';
import PropTypes from 'prop-types';

function InputDistance(props) {
    const {distance, onChange: handelChange} = props;

  return (
    <input type='number' name='distance' value={distance} onChange={handelChange} min='0' step='0.10'/>
  )
}

InputDistance.propTypes = {
    distance: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}


export default InputDistance
