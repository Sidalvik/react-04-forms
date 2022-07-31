import React from 'react';
import PropTypes from 'prop-types';
import './OutputRGB.css';

function OutputRGB(props) {
    const {rgbColor, hexColor, error} = props;
    let rgbString;
    switch (true) {
        case (error): 
            rgbString = 'Ошибка!';
            break;
        case (hexColor.length < 7) || (rgbColor.length !== 3):
            rgbString = null;
            break;
        case (rgbColor.length === 3):
            rgbString = `rgb(${rgbColor?.join(', ')})`;
            break;
        default:
            break;
    }

  return (
    <div className='OutputRGB'>
        <p>{rgbString}</p>
    </div>
  )
}

OutputRGB.propTypes = {
    rgbColor: PropTypes.instanceOf(Array),
    hexColor: PropTypes.string,
    error: PropTypes.bool,
}

export default OutputRGB
