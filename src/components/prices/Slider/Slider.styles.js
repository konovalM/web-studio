import styled from "styled-components";
import slideImg from "../../../images/slideImg.jpg";

export const SliderTag = styled.div`
    margin-top: 90px;
    .navigateButtons {
        display: flex;
        justify-content: center;
        position: absolute;
        top: -45px;
        left: 50%;
        transform: translateX(-50%);
    }

    .btnWrapper {
        margin: 0 30px !important;
        cursor: pointer;
    }

    .sliderWrapper {
        display: grid;
        grid-template-columns: 410px 410px;
        grid-template-rows: 231px 231px;
        grid-auto-flow: column;
        grid-auto-columns: 410px;
        gap: 10px;
    }

    .slideInner {
        background: url(${slideImg}) center center/cover no-repeat;
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: flex-end;
    }
    .slideInner + .slideInner{
        margin-top: 10px;
        transform: translateX(-40px);
    }

    .slideImgWrapper {
        width: 100%;
    }

    .sliderInnerText {
        max-width: 100%;
        height: 33px;
        display: flex;
        align-items: center;
        padding-left: 10px;
        background-color: #fff;
        font-size: 18px;
        line-height: 21px;
    }

    .sliderContainer {
        max-width: 1920px;
        margin: 0 auto;
    }
    .slideFlexWrapper{
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    
    // SWIPER
    
    .swiper{
        height: 472px;
        display: flex;
        flex-direction: column-reverse;
        position: relative;
        overflow: visible;
    }

    // ADAPTIVE

    @media screen and (max-width: 1024px) {
        .sliderWrapper {
            grid-template-rows: 231px 231px 231px;
            grid-template-columns: 359px;
            grid-auto-columns: 359px;
        }
    }
    @media screen and (max-width: 650px) {
        .sliderWrapper {
            max-width: 600px;
            padding: 0 10px;
            margin: 0 auto;
            overflow: hidden;
            grid-template-rows: 180px 180px 180px;
            grid-template-columns: 259px;
            grid-auto-columns: 259px;
        }

        .sliderInnerText {
            height: auto;
            padding: 2px 0 3px 4px;
        }
    }
    @media screen and (max-width: 520px) {
        .sliderWrapper {
            max-width: 600px;
            padding: 0 10px;
            margin: 0 auto;
            overflow: hidden;
            grid-template-rows: 125px 125px 125px;
            grid-template-columns: 140px;
            grid-auto-columns: 140px;
        }

        .sliderInnerText {
            font-size: 14px;
            line-height: 16px;

        }
    }
`
