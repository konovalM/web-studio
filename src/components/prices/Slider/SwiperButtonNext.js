import React from 'react';
import {useSwiper} from "swiper/react";

const SwiperButtonNext = () => {
    const swiper = useSwiper()
    return (
        <div className="nextBtn btnWrapper" onClick={() => swiper.slideNext()}>
            <svg width="90" height="13" viewBox="0 0 90 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6.5H89.5M89.5 6.5L83 0M89.5 6.5L83 13" stroke="white"/>
            </svg>
        </div>
    );
};

export default SwiperButtonNext;