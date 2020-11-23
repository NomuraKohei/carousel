import React, { useState } from 'react';
import './Carousel.css';

const Carousel: React.FC = () => {
  const [scroll, setScroll] = useState(0);

  const items = [
    'hoge1hogehogeehogehoge1hogehogeehoge',
    'hoge2hogehogeehoge',
    'hoge3hogehogeehoge',
    'hoge4hogehogeehoge',
    'hoge5hogehogeehoge',
    'hoge6hogehogeehoge',
  ];

  const onKeyRightDown = (event: React.KeyboardEvent): void => {
    console.log("test");
  }

  return (
    <>
      <div className="Carousel">
        {items.map((value, index) => 
          <div className="Carousel-item" key={index}>{value}</div>
        )}
      </div>
      <div className="Carousel" onKeyPress={(event: React.KeyboardEvent) => onKeyRightDown(event)}>
        {items.map((value, index) => 
          <div className="Carousel-item" key={index} onClick={() => {setScroll(index); console.log(scroll);}}>{value}</div>
        )}
      </div>
    </>
  );
}

export default Carousel;
