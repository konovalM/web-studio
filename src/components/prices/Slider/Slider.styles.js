import styled from "styled-components";

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


    .bgWrapper {
        width: 100%;
        height: 100%;
        background-color: aliceblue;
    }

    .slideImgWrapper:nth-child(even) {
        transform: translateX(-40px);
    }

    .slideImgWrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 230px;
        max-height: 230px;
        //justify-content: space-between;

    }

    .sliderInnerText {
        padding: 5px 10px;
        display: flex;
        align-items: center;
        background-color: #fff;
        font-size: 18px;
        line-height: 21px;
        flex: 0 0 auto;
    }

    .sliderContainer {
        max-width: 1920px;
        margin: 0 auto;
    }

    .slideFlexWrapper {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        height: 100%;
    }

    // SWIPER

    .swiper {
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
    @media screen and (max-width: 550px) {
        .slideImgWrapper {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 180px;
            transform: none !important;
        }

        .sliderInnerText {
            font-size: 14px;
            line-height: 16px;
        }

        .sliderContainer {
            padding: 0 10px;
        }

    }
    @media screen and (max-width: 400px) {
        .slideImgWrapper {
            height: 140px;
        }
    }
`
