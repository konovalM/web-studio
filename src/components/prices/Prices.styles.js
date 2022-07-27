import styled, {keyframes} from "styled-components";
import bg from "../../images/bg.png";
import bigCircle from "../../images/bigCircle.svg";
import mediumCircle from "../../images/mediumCircle.svg";
import smallCircle from "../../images/smallCircle.svg";


const rotate = keyframes`
    0% {
        transform: translateY(-50%) rotate(0deg);
    }
    100% {
        transform: translateY(-50%) rotate(360deg);
    }
`;

const rotateReverse = keyframes`
    0% {
        transform: translateY(-50%) rotate(0deg);
    }
    100% {
        transform: translateY(-50%) rotate(-360deg);
    }
`;

export const PricesTag = styled.section`
    padding: 90px 0 75px;
    background-color: #1a1a1a;
    background-image: url(${bg});
    background-position: center -100px;
    background-repeat: repeat;

    .title {
        font-size: 88px;
        line-height: 106px;
        color: #FFFFFF;
    }

    .description {
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        max-width: 490px;
        margin-bottom: 58px;
    }

    .product {
        max-width: 652px;
        margin-left: 120px;
        font-size: 109px;
        line-height: 100%;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-bottom: 93px;
    }

    .wrapperPrices {
        position: relative;
        z-index: 100;
        overflow: hidden;
    }

    .whiteLine {
        background-color: #fff;
        position: absolute;
    }

    .priceInner {
        background-color: #1E4FCD;
        padding: 39px;
        position: relative;
    }

    .price {
        width: 690px;
        height: 186px;
        position: absolute;
        right: 0;
        z-index: 100;
        transform: translate(0);
    }

    .cost {
        max-width: 271px;
        font-size: 35px;
        line-height: 41px;
        color: #FFFFFF;
        margin-bottom: 4px;
        font-weight: 600;
    }

    .descr {
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }

    .price::before {
        content: '';
        width: 470px;
        height: 480px;
        position: absolute;
        z-index: -10;
        background: url(${bigCircle});
        left: -138px;
        top: 50%;
        //transform: translateY(-50%);
        animation: ${rotate} linear 9s infinite;
    }

    .price::after {
        content: '';
        width: 394px;
        height: 394px;
        position: absolute;
        z-index: -10;
        background: url(${mediumCircle});
        left: -105px;
        top: 50%;
        animation: ${rotateReverse} linear 6s infinite;
        

    }

    .priceInner::before {
        content: '';
        position: absolute;
        background: url(${smallCircle});
        height: 310px;
        width: 310px;
        left: -64px;
        top: 50%;
        z-index: -100;
        animation: ${rotate} linear 6s infinite;
    }

    .flexWrapper {
        display: flex;
        margin-bottom: 45px;
    }

    .flexList {
        padding-left: 23px;
    }

    .flexList + .flexList {
        margin-left: 120px;
    }

    .flexItem {
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        position: relative;
    }

    .flexItem + .flexItem {
        margin-top: 20px;
    }

    .flexItem::before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: #1E4FCD;
        left: -23px;
        top: 50%;
        transform: translateY(-50%);
    }

    .btnWrapper {
        display: flex;
        justify-content: center;
        margin-top: 36px;

    }

    .prices_btn {
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #FFFFFF;
        height: 52px;
        width: 271px;
        background: #1E4FCD;
        border: none;
    }

    .points_prices {
        width: 82px;
        position: relative;
    }

    .prices_1 {
        width: 26px;
        height: 50%;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
    }

    .prices_2 {
        width: 26px;
        height: 50%;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .bold {
        font-weight: 900;
    }

    .pricesComponentWrapper {
        margin-top: 225px;
    }

    // ADAPTIVE
    
    @media screen and (min-width: 2150px){
        .price {
            width: 36%;
        }
    }
    @media screen and (max-width: 1850px) {
        .price {
            width: 500px;
        }
    }
    @media screen and (max-width: 1490px) {
        .price {
            width: 400px;
        }
    }
    @media screen and (max-width: 1300px) {
        .price {
            width: 350px;
        }
    }
    @media screen and (max-width: 1250px) {
        padding: 76px 0 32px;
        .product {
            margin-bottom: 475px;
            font-size: 105px;
        }

        .price {
            width: 58%;
        }

        .price::before {
            width: 380px;
            height: 388px;
            background-size: cover;
        }

        .price::after {
            width: 320px;
            height: 320px;
            left: -110px;
            background-size: cover;
        }

        .priceInner::before {
            width: 252px;
            height: 252px;
            background-size: cover;
            left: -77px;
        }
    }
    @media screen and (max-width: 1024px) {
        .title {
            font-size: 80px;
            line-height: 96px;
        }

        .description {
            font-size: 18px;
            line-height: 150%;
            margin-bottom: 50px;
        }

        .pricesComponentWrapper {
            margin-top: 130px;
        }
    }
    @media screen and (max-width: 800px) {
        .flexList + .flexList {
            margin-left: 40px;
        }
    }
    @media screen and (max-width: 767px) {
        .pricesComponentWrapper {
            margin-top: 120px;
        }

        .product {
            font-size: 65px;
            line-height: 100%;
            margin-bottom: 337px;
        }

        .price {
            height: 116px;
        }

        .priceInner {
            padding: 20px 0 20px 25px;
        }

        .cost {
            font-weight: 600;
            font-size: 21.9196px;
            line-height: 26px;
        }

        .price::before {
            width: 238px;
            height: 243px;
            left: -90px;
        }

        .price::after {
            width: 202px;
            height: 202px;
            left: -74px;
        }

        .priceInner::before {
            width: 157px;
            height: 157px;
            left: -52px;
        }
    }
    @media screen and (max-width: 520px) {
        .title {
            font-size: 60px;
            line-height: 100%;
        }

        .description {
            font-size: 14px;
            line-height: 150%;
        }

        .product {
            font-size: 40px;
        }

        .flexWrapper {
            flex-direction: column;
        }

        .flexList + .flexList {
            margin: 15px 0 0 0;
        }

        .flexItem {
            font-size: 14px;
            line-height: 16px;
        }

        .flexItem + .flexItem {
            margin-top: 15px;
        }
    }
    @media screen and (max-width: 440px) {
        .priceInner {
            padding-bottom: 26px;
        }

        .descr {
            font-size: 11.2729px;
            line-height: 13px;
        }
    }
    @media screen and (max-width: 420px) {
        .product {
            margin-left: 50px;
        }

        .prices_btn {
            width: 222px;
            height: 42px;
            font-size: 14.7875px;
            line-height: 17px;
        }

        .prices_1, .prices_2 {
            width: 21px;
        }
    }
`

