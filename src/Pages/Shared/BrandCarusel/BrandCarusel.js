import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/brands/brand.1.png'
import Brand2 from '../../../assets/brands/brand2.jpg'

const BrandCarusel = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand1}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    );
};

export default BrandCarusel;