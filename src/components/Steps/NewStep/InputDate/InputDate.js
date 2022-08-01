import React from 'react';
import PropTypes from 'prop-types';

function InputDate(props) {
    const {date, onChange: handelChange} = props;
    
  return (
    <input type='date' name='date' value={date} onChange={handelChange}/>
  )
}

InputDate.propTypes = {
    date: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}


export default InputDate
