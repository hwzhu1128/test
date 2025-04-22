import React, { useState, useEffect } from 'react';
import './NewsRotator.css';

const NewsRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    '/news1.jpg',
    '/news2.jpg',
    '/news3.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="news-rotator">
      <img src={images[currentIndex]} alt="实验室新闻" />
    </div>
  );
};

export default NewsRotator;