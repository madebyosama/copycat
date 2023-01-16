import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

import submitButton from '../assets/submit-button.svg';
import submitHover from '../assets/submit-hover.svg';

import Navbar from '../components/Navbar';
import gif from '../assets/submitting.gif';
export default function Form(props) {
  const form = useRef();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const { search } = useLocation();
  useEffect(() => {
    let submitBtn = document.getElementById('submitButton');
    submitBtn.onmouseover = function () {
      document.getElementById('submitButton').src = submitHover;
    };
    submitBtn.onmouseout = function () {
      document.getElementById('submitButton').src = submitButton;
    };
    const searchParams = new URLSearchParams(search);
    // const url = 'http://localhost:4000/public/';
    const url = 'https://copycat-imuhammadosama.herokuapp.com/public/';
    setFile(`${url}${searchParams.get('file')}`);
    setFilename(`${searchParams.get('file')}`);
  }, []);

  function submitForm() {
    document.getElementById('submitButtonInput').click();
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);
    emailjs
      .sendForm(
        'service_4gjyi7p',
        'template_wsf6ksr',
        form.current,
        'VdSVobMfhmKrcOFN4'
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate(`/copycat/thankyou?file=${filename}`);
        },
        (error) => {
          console.log(error.text);
          setSubmitting(false);
        }
      );
  };
  if (submitting) {
    return (
      <div>
        <div className='flex flex-center'>
          <img src={gif} />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className='flex center'>
        <form ref={form} onSubmit={sendEmail} className='flex-item'>
          <p
            style={{
              textAlign: 'left',
              fontSize: '72px',
              margin: '-25px',
              color: 'red',
            }}
          >
            *
          </p>
          <div class='input-container'>
            <input
              type='text'
              name='codename'
              required
              placeholder='code name'
              autocomplete='off'
            />
          </div>
          <br />
          <p
            style={{
              textAlign: 'left',
              fontSize: '72px',
              margin: '-25px',
              color: 'red',
            }}
          >
            *
          </p>
          <div class='input-container'>
            <input
              type='email'
              name='email'
              required
              placeholder='email'
              autocomplete='off'
            />
          </div>

          <br />
          <p
            style={{
              textAlign: 'left',
              fontSize: '72px',
              margin: '-25px',
              color: 'red',
            }}
          >
            *
          </p>
          <div class='input-container'>
            <input
              type='number'
              name='number'
              required
              placeholder='number'
              autocomplete='off'
            />
          </div>
          <br />
          <input
            type='url'
            name='image'
            value={file}
            className='display-none'
          />
          <img
            src={submitButton}
            className='pointer'
            onClick={submitForm}
            id='submitButton'
          />
          <input
            type='submit'
            value='Send'
            className='display-none'
            id='submitButtonInput'
          />
        </form>

        <img src={file} className='flex-item homework' />
      </div>
    </div>
  );
}
