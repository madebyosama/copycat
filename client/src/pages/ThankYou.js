import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import image from '../assets/logo.svg';
import Navbar from '../components/Navbar';

export default function ThankYou() {
  const [file, setFile] = useState(null);

  const { search } = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    // const url = 'http://localhost:4000/public/';
    const url = 'https://copycat-imuhammadosama.herokuapp.com/public/';
    setFile(`${url}${searchParams.get('file')}`);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='flex'>
        <div className='t-80 pr-120 flex-item'>
          thanks, we will txt <br />
          you answers to <br />
          your homework! <br />- copycat
        </div>
        <div className='t-64 flex-item'>
          <img src={file} className='homework' />
        </div>
      </div>
    </div>
  );
}
