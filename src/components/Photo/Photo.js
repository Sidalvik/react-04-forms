import './Photo.css';
import React from 'react';
import PropTypes from 'prop-types';
import Click2Select from './Click2Select/Click2Select';
import PhotoList from './PhotoList/PhotoList';
import { nanoid } from 'nanoid';


function Photo(props) {
  const [dataUrl, setdataUrl] = React.useState([]);

  const fileToDataUrl = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
    
      fileReader.addEventListener('load', evt => {
        resolve(evt.currentTarget.result);
      });
      
      fileReader.addEventListener('error', evt => {
        reject(new Error(evt.currentTarget.error));
      });
      
      fileReader.readAsDataURL(file);
    });
  }

  const handleSelectFile = async (evt) => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
    setdataUrl((prevDataUrl) => {
      return [...prevDataUrl, ...urls.map((item) => ({id: nanoid(), src: item}))];
    });
  }
  
  const handleClickCloseCard = (id) => {
    setdataUrl((prevDataUrl) => {
      return prevDataUrl.filter((item) => item.id !== id);
    });
  }

  return (
    <div className='Photo'>
        <Click2Select onChange={handleSelectFile}/>
        <PhotoList dataUrl={dataUrl} onClose={handleClickCloseCard}/>
    </div>
  )
}

Photo.propTypes = {
    props: PropTypes.any,
}


export default Photo
