import React from 'react'
import PropTypes from 'prop-types'

function InputHEX(props) {
  const {hexColor, onChange: handleChange} = props;

  return (
    <>
      <input type="text" name="hexColor" className='InputHEX' value={hexColor} onChange={handleChange} placeholder='#000000' />
    </>
  )
}

InputHEX.propTypes = {
  hexColor: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputHEX
