import React, {useEffect, useRef, useState} from 'react';
import {SliderTag} from "./Slider.styles";
import {SwiperSlide, Swiper} from "swiper/react";
import "swiper/css";
import SwiperButtonPrev from "./SwiperButtonPrev";
import SwiperButtonNext from "./SwiperButtonNext";
import {SliderMockData} from "./Slider.mock";
import convertToSlide from "../../../utils/ConvertToSlide";
import useWindowSize from "../../../hooks/useWindowSize";
import {useDispatch} from "react-redux";


const Slider = () => {
    const dispatch = useDispatch()
    const width = useWindowSize()
    const [slidesPerView, setSlidesPerView] = useState(4)
    useEffect(() => {
        if (width >= 1100){
            setSlidesPerView(4)
        }
        if (width < 1100){
            setSlidesPerView(3)
        }
        if (width < 900){
            setSlidesPerView(2)
        }
    }, [width])
    return (
        <SliderTag>
            <div className="sliderContainer">

                <Swiper
                    slidesPerView={slidesPerView}
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
                    {
                        width < 800 ?

                        convertToSlide('mobile', SliderMockData)
                            .map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className='slideFlexWrapper'>
                                            <div className="slideImgWrapper" onClick={() => dispatch({type: 'OPEN_CASE', payload: index * 3})}>
                                                <img src={item.case1.img} alt="case" className='caseImg'/>
                                                <div className="sliderInnerText">{item.case1.title}</div>
                                            </div>
                                            <div className="slideImgWrapper" onClick={() => dispatch({type: 'OPEN_CASE', payload: index * 3 + 1})}>
                                                <img src={item.case2.img} alt="case" className='caseImg'/>
                                                <div className="sliderInnerText">{item.case2.title}</div>
                                            </div>
                                            <div className="slideImgWrapper" onClick={() => dispatch({type: 'OPEN_CASE', payload: index * 3 + 2})}>
                                                <img src={item.case3.img} alt="case" className='caseImg'/>
                                                <div className="sliderInnerText">{item.case3.title}</div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                            :
                        convertToSlide('desktop', SliderMockData)
                            .map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className='slideFlexWrapper'>
                                            <div className="slideImgWrapper" onClick={() => dispatch({type: 'OPEN_CASE', payload: index * 2})}>
                                                <img src={item.case1.img} alt="case" className='caseImg'/>
                                                <div className="sliderInnerText">{item.case1.title}</div>
                                            </div>
                                            <div className="slideImgWrapper" onClick={() => dispatch({type: 'OPEN_CASE', payload: index * 2 + 1})}>
                                                <img src={item.case2.img} alt="case" className='caseImg'/>
                                                <div className="sliderInnerText">{item.case2.title}</div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                    }
                </Swiper>
            </div>
        </SliderTag>
    );
};

export default Slider;