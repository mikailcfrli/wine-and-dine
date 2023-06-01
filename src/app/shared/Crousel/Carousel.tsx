import './Carousel.scss';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import specialwrite from '../../../assets/Images/Special Offer.png';

import { Link } from 'react-router-dom';
import React from 'react';
import Slider from 'react-slick';

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Slider {...settings}>
        <div className='for-slide'>
          <div className="container">
            <div className="slide2">
              <div className="for-2writes">
                <div className="empty"></div>
                <div className="second-div">
                  <div className="for-image">
                    <img src={specialwrite} alt="" className="special-write" />
                  </div>

                  <p className="background-p">
                    PINOT NOIR:<br />BURGUNDY VS. South Africa

                  </p>
                  <Link to={''} className="for-order">
                    TO LEARN MORE
                  </Link>
                </div>
                <div className="empty"></div>
              </div>
            </div>
          </div>
        </div>
        <div className='for-slide'>
          <div className="container">
            <div className="slide1">
              <div className="for-2writes">
                <div className="empty"></div>
                <div className="second-div">
                  <div className="for-image">
                    <img src={specialwrite} alt="" className="special-write" />
                  </div>

                  <p className="background-p">
                    PICHON LONGUEVILLE <br />COMTESSE DE LALANDE

                  </p>
                  <Link to={''} className="for-order">
                    ORDER WINE
                  </Link>
                </div>
                <div className="empty"></div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Carousel;