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
    display: grid;
    grid-template-columns: 410px 410px;
    grid-template-rows: 231px 231px;
    grid-auto-flow: column;
    grid-auto-columns: 410px;
    gap: 10px;
  }

  .slideInner{
    background: url(${slideImg})center center/cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .slideImgWrapper{
    width: 100%;
  }
  .sliderInnerText{
    max-width: 100%;
    height: 33px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    background-color: #fff;
    font-size: 18px;
    line-height: 21px;
  }
  .sliderContainer{
    max-width: 1920px;
    margin: 0 auto;
    overflow: hidden;
  }
  
  // ADAPTIVE
  
  @media screen and (max-width: 1024px){
    .sliderWrapper{
      grid-template-rows: 231px 231px 231px;
      grid-template-columns: 359px;
      grid-auto-columns: 359px;
    }
  }
  @media screen and (max-width: 650px){
    .sliderWrapper{
      max-width: 600px;
      padding: 0 10px;
      margin: 0 auto;
      overflow: hidden;
      grid-template-rows: 180px 180px 180px;
      grid-template-columns: 259px;
      grid-auto-columns: 259px;
    }
    .sliderInnerText{
      height: auto;
      padding: 2px 0 3px 4px;
    }
  }
  @media screen and (max-width: 520px){
    .sliderWrapper{
      max-width: 600px;
      padding: 0 10px;
      margin: 0 auto;
      overflow: hidden;
      grid-template-rows: 125px 125px 125px;
      grid-template-columns: 140px;
      grid-auto-columns: 140px;
    }
    .sliderInnerText{
      font-size: 14px;
      line-height: 16px;

    }
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
            </div>
        </SliderTag>
    );
};

export default Slider;