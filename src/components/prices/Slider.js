import React from 'react';
import styled from 'styled-components'
import slideImg from '../../images/slideImg.jpg'


const SliderTag = styled.div`
  .navigateButtons{
    display: flex;
    justify-content: center;
    margin-bottom: 35px;
  }
  .btnWrapper{
    margin: 0 30px;
    cursor: pointer;
  }
  .sliderWrapper{
    display: flex;
  }
  .slide{
    margin: 0 5px;
  }
  .slideInner{
    display: grid;
    grid-template-columns: 410px;
    grid-template-rows: 231px 231px;
    grid-row-gap: 10px;
  }
  .sliderContainer{
    max-width: 1920px;
    margin: 0 auto;
    overflow: hidden;
  }
`

const Slider = () => {
    return (
        <SliderTag>
            <div className="sliderContainer">
                <div className="navigateButtons">
                    <div className="prevBtn btnWrapper">
                        <svg width="90" height="13" viewBox="0 0 90 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M89.5 6.5H0M0 6.5L6.5 0M0 6.5L6.5 13" stroke="white"/>
                        </svg>
                    </div>
                    <div className="nextBtn btnWrapper">
                        <svg width="90" height="13" viewBox="0 0 90 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 6.5H89.5M89.5 6.5L83 0M89.5 6.5L83 13" stroke="white"/>
                        </svg>
                    </div>
                </div>
                <div className="sliderWrapper">
                    <div className="slide">
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <img src={slideImg} alt="Slide Image"/>
                            </div>
                            <div className="slideImgWrapper">
                                <img src={slideImg} alt="Slide Image"/>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <img src={slideImg} alt="Slide Image"/>
                            </div>
                            <div className="slideImgWrapper">
                                <img src={slideImg} alt="Slide Image"/>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <img src={slideImg} alt="Slide Image"/>
                            </div>
                            <div className="slideImgWrapper">
                                <img src={slideImg} alt="Slide Image"/>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <img src={slideImg} alt="Slide Image"/>
                            </div>
                            <div className="slideImgWrapper">
                                <img src={slideImg} alt="Slide Image"/>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <img src={slideImg} alt="Slide Image"/>
                            </div>
                            <div className="slideImgWrapper">
                                <img src={slideImg} alt="Slide Image"/>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <img src={slideImg} alt="Slide Image"/>
                            </div>
                            <div className="slideImgWrapper">
                                <img src={slideImg} alt="Slide Image"/>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <img src={slideImg} alt="Slide Image"/>
                            </div>
                            <div className="slideImgWrapper">
                                <img src={slideImg} alt="Slide Image"/>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideInner">
                            <div className="slideImgWrapper">
                                <img src={slideImg} alt="Slide Image"/>
                            </div>
                            <div className="slideImgWrapper">
                                <img src={slideImg} alt="Slide Image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SliderTag>
    );
};

export default Slider;