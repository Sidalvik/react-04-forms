import React from 'react';
import PropTypes from 'prop-types';
import './Hex2Rgb.css';
import InputHEX from './InputHEX/InputHEX';
import OutputRGB from './OutputRGB/OutputRGB';
import { parseHEX } from '../../lib/parseHEX';

function Hex2Rgb(props) {
    const [state, setState] = React.useState(
        {hexColor: '',
        rgbColor: [],
        error: false,
    });

    const style = {
        backgroundColor: state.error ? "#ff0000" : state.rgbColor.length === 3 ? `rgb(${state.rgbColor?.join(', ')})` : null,
    }
    
    const handleChange = (evt) => {
        const {value} = evt.target;

        setState((prevState) => ({
            hexColor: value.slice(0, 7), 
            rgbColor: parseHEX(value.slice(0, 7)) || prevState.rgbColor,
            error: value.slice(0, 7).length < 7 ? false : !parseHEX(value.slice(0, 7)),
        }));
    }

  return (
    <div className = "Hex2Rgb" style={style}>
        <form className="wrap">
            <InputHEX hexColor = {state.hexColor} onChange={handleChange}/>
            <OutputRGB rgbColor = {state.rgbColor} hexColor ={state.hexColor} error = {state.error}/>
        </form>
    </div>
  )
}

Hex2Rgb.propTypes = {
    props: PropTypes.any,
}

export default Hex2Rgb
