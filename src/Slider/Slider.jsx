import React, { useState, useEffect } from 'react';
import img1 from './../Slider/assets/img/1.jpg';
import img2 from './../Slider/assets/img/3.jpg';
import img3 from './../Slider/assets/img/7.jpg';
import img4 from './../Slider/assets/img/9.jpg';
import img5 from './../Slider/assets/img/10.jpg';
import img6 from './../Slider/assets/img/11.jpg';
import img7 from './../Slider/assets/img/15.jpg';
import { Link } from 'react-router-dom';
import './Slider.css'

const images = [
 img1,
 img2,
 img3,
 img4,
 img5,
 img6,
 img7
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <>
    <img src={images[currentImageIndex]} alt="slideshow" />
    <Link to='/'> <button className='btn2'>Home</button></Link>
    </>
  );
};

export default Slider
