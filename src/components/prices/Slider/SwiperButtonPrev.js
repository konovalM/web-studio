import React from 'react';
import {useSwiper} from "swiper/react";

const SwiperButtonPrev = () => {
    const swiper = useSwiper()
    return (
        <div className="prevBtn btnWrapper" onClick={() => swiper.slidePrev()} data-aos='fade-down'>
            <svg width="90" height="13" viewBox="0 0 90 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M89.5 6.5H0M0 6.5L6.5 0M0 6.5L6.5 13" stroke="white"/>
            </svg>
        </div>
    );
};

export default SwiperButtonPrev;