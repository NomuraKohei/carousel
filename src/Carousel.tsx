import React from 'react';
import './Carousel.css';

const Carousel: React.FC = () => {

  const items = [
    'hoge1hogehogeehogehoge1hogehogeehoge',
    'hoge2hogehogeehoge',
    'hoge3hogehogeehoge',
    'hoge4hogehogeehoge',
    'hoge5hogehogeehoge',
    'hoge6hogehogeehoge',
  ];


  return (
    <>
      <div className="Carousel">
        {items.map((value, index) => 
          <div className="Carousel-item" key={index}>{value}</div>
        )}
      </div>
    </>
  );
}

export default Carousel;
