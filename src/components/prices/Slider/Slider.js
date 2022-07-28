import React from 'react';
import {SliderTag} from "./Slider.styles";
import {SwiperSlide, Swiper, useSwiper} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import SwiperButtonPrev from "./SwiperButtonPrev";
import SwiperButtonNext from "./SwiperButtonNext";


const Slider = () => {
    const swiper = useSwiper()
    // console.log(swiper)
    return (
        <SliderTag>
            <div className="sliderContainer">

                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    className="mySwiper"
                >
                    <div className="navigateButtons">
                        <SwiperButtonPrev />
                        <SwiperButtonNext />
                    </div>
                    <SwiperSlide>
                        <div className='slideFlexWrapper'>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slideFlexWrapper'>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slideFlexWrapper'>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slideFlexWrapper'>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slideFlexWrapper'>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slideFlexWrapper'>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slideFlexWrapper'>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slideFlexWrapper'>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slideFlexWrapper'>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slideFlexWrapper'>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slideFlexWrapper'>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                            <div className="slideInner">
                                <div className="slideImgWrapper">
                                    <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/*<div className="sliderWrapper">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >

                    </Swiper>
                    <SwiperSlide>
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <div className="sliderInnerText">Интернет-магазин кухонной мебели</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>*/}
            </div>
        </SliderTag>
    );
};

export default Slider;