import './Click2Select.css';
import React from 'react';
import PropTypes from 'prop-types';

function Click2Select(props) {
  const {ref: fileURL, onChange: handleSelectFile} = props;
  return (
    <div className='Click2Select'>
      <div className='wrapper'><p>Click to select</p></div>
      <input type="file" ref={fileURL} onChange={handleSelectFile} multiple/>
    </div>
  )
}

Click2Select.propTypes = {
  ref: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}


export default Click2Select
