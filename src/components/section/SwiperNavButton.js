import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSwiper } from 'swiper/react';

const SwiperNavButton = () => {
  const swiper = useSwiper();

  return (
    <div className="flex space-x-3">
      <button
        className="swiper-nav__btn blog__slider-prev bg-pink-500 text-white flex items-center justify-center"
        style={{ borderRadius: '50%', height: '50px', width: '50px' }}
        onClick={() => swiper.slidePrev()}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        className="swiper-nav__btn blog__slider-next bg-pink-500 text-white flex items-center justify-center"
        style={{ borderRadius: '50%', height: '50px', width: '50px' }}
        onClick={() => swiper.slideNext()}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default SwiperNavButton;
