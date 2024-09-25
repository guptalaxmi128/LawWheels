import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSwiper } from 'swiper/react';

export const SwiperNavButton = () => {
  const swiper = useSwiper();

  return (
    <div className="flex">
    <button onClick={() => swiper.slidePrev()}>
      <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
    </button>
    <button onClick={() => swiper.slideNext()} className="ml-3">
      <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
    </button>
  </div>
  
  );
};