import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import upload from '../assets/upload.svg';
import uploadHover from '../assets/upload-hover.svg';
import select from '../assets/select.svg';
import selecthover from '../assets/select-hover.svg';
import gif from '../assets/uploading.gif';

export default function Home() {
  const [file, setfile] = useState(null);
  const [selectImage, setSelectImage] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    let selectButton = document.getElementById('selectbtn');
    selectButton.onmouseover = function () {
      document.getElementById('selectbtn').src = selecthover;
    };
    selectButton.onmouseout = function () {
      document.getElementById('selectbtn').src = select;
    };
    let uploadImage = document.getElementById('upload');
    uploadImage.onmouseover = function () {
      document.getElementById('upload').src = uploadHover;
    };
    uploadImage.onmouseout = function () {
      document.getElementById('upload').src = upload;
    };
    if (selectImage) {
      console.log('Yes');
      document.getElementById('file-submit').click();
    }
  }, [selectImage]);

  const navigate = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', file);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    // const url = 'http://localhost:4000/user/upload/';
    const url = 'https://copycat-imuhammadosama.herokuapp.com/user/upload';
    setImageLoading(true);
    axios
      .post(url, formData, config)
      .then((res) => {
        // alert('Image uploaded successfully!!');
        navigate(`/copycat/form?file=${res.data.file}`);
      })
      .catch((error) => {
        console.log('error', error);
        setImageLoading(false);
      });
  };

  const onInputChange = (e) => {
    setfile(e.target.files[0]);
    setSelectImage(true);
  };

  function fileUpload() {
    document.getElementById('file-upload').click();
    // navigate('/form');
  }
  if (imageLoading) {
    return (
      <div className='flex flex-center'>
        <img src={gif} />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className='center t-72 mobile-padding'>
        we will do your math homework for you
      </div>
      <div className='center py-32'>
        <img
          id='upload'
          className='center pointer upload-button'
          src={upload}
          onClick={fileUpload}
        />
      </div>
      <div className='center t-56'>1. take a photo of your homework</div>
      <div className='center t-56'>2. drag and drop your photo here</div>
      {/* Form */}
      <form onSubmit={onFormSubmit}>
        <input
          type='file'
          id='file-upload'
          onChange={onInputChange}
          accept='image/png, image/jpeg, image/webp, image/jpg'
        />
        <button type='submit' className='display-none' id='file-submit'>
          Submit
        </button>
      </form>
      <div className='center py-32'>
        <img
          id='selectbtn'
          className='center pointer select-button'
          src={select}
          onClick={fileUpload}
        />
      </div>
    </div>
  );
}
