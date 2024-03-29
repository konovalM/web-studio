import styled, {keyframes} from "styled-components";
import bg from "../../../images/bg.png";

const wave = keyframes`
    from {
        width: 0;
    }
    
    to {
        width: 100%;
    }
`

export const MainTag = styled.section`
    min-height: 676px;
    background-color: #fff;
    background-image: url(${bg});
    background-position: center -100px;
    background-repeat: repeat;
    padding: 93px 0 65px;
    z-index: 110;
    position: relative;
    overflow: hidden;
    .wrapper {
        display: flex;
        justify-content: space-between;
    }

    .subtitle {
        margin-top: 40px;
        font-family: Roboto;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: #1A1A1A;
    }

    .title {
        margin-top: 29px;
        
    }
    .titleSpan{
        font-size: 38px;
        line-height: 46px;
        color: #1A1A1A;
    }

    .blue {
        color: #1E4FCD;
    }

    .white {
        color: #FFFFFF;
        background-color: #1A1A1A;
        line-height: 16px;
    }

    .btnWrapper {
        margin-top: 32px;
        display: flex;
        width: 353px;
        position: relative;
    }

    .pointFirst {
        width: 26px;
        height: 50%;
        background-color: #1a1a1a;
        position: absolute;
        top: 0;
        left: 0;
    }

    .pointSecond {
        width: 26px;
        height: 50%;
        background-color: #1a1a1a;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .points {
        width: 82px;
        position: relative;
    }

    .consultation {
        width: 271px;
        height: 52px;
        background: #1E4FCD;
        border: none;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        position: relative;
    }

    .stacks {
        margin-top: 112px;
        max-width: 530px;
        column-gap: 55px;
        display: flex;
        justify-content: space-between;
    }

    .stack {
        width: 140px;
    }

    .bold {
        font-weight: 900;
    }
    
    @media screen and (min-width: 551px){
        .stackItemActive{
            animation-name: ${wave};
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: 1;
        }
        .frameworks .stackItemActive{
            animation-delay: .4s;
        }
        .cms .stackItemActive{
            animation-delay: .8s;
        }
    }
    .stackItem {
        display: flex;
        font-size: 18px;
        line-height: 21px;
        color: #1A1A1A;
        height: 30px;
        align-items: center;
        padding-left: 8px;
    }

    .stackItem + .stackItem {
        margin-top: 5px;
    }

    .stackItemActive {
        background-color: #1E4FCD;
        color: #fff;
        
    }

    .stackText {
        position: relative;
    }

    .stackItemActive .stackText::before {
        content: '';
        width: 11px;
        height: 3px;
        background-color: #fff;
        position: absolute;
        right: -3px;
        bottom: -2px;
    }

    .rightInner {
        margin-right: 38px;
    }

    .rightTitle {
        color: #1A1A1A;
        text-align: right;
        margin-bottom: 8px;
    }

    .rightTitleSpan {
        position: relative;
        cursor: pointer;
    }
    .rightTitleSpan::before{
        content: '>';
        font-weight: 900;
        font-size: 80px;
        line-height: 97px;
        color: #1E4FCD;
        position: absolute;
        left: -50px;
        top: 50%;
        transform: translateY(-50%);
        transition: .3s opacity;
        opacity: 0;
    }
    .rightTitleSpan:hover::before {
        opacity: 1;
    }
    .websites {
        font-size: 100px;
        line-height: 68px;
    }

    .applications {
        margin-right: 20px;
        font-size: 60px;
        line-height: 57px;
        margin-bottom: 12px;
    }

    .marketing {
        margin-right: 140px;
        font-size: 70px;
        line-height: 57px;
    }

    .smm {
        margin-right: 170px;
        font-size: 100px;
        line-height: 63px;
    }

    .webDevelopment {
        margin-right: 43px;
        font-size: 45px;
        line-height: 42px;
    }

    .seo {
        margin-right: 230px;
        line-height: 42px;
        font-size: 60px;
    }

    .scroll {
        position: absolute;
        height: 60px;
        width: 21px;
        display: flex;
        flex-direction: column;
        align-items: center;
        left: 50%;
        bottom: 120px;
        transform: translateX(-50%);
        overflow: hidden;
        z-index: 100;
        cursor: pointer;
    }

    .scrollOutside {
        height: 60px;
        width: 21px;
        border: 2px solid #1E4FCD;
        border-radius: 10px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 5;
    }

    .scroll:hover .scrollInner {
        transform: translateY(40px);

    }

    .scrollInner {
        position: absolute;
        left: 0px;
        top: -40px;
        height: 60px;
        width: 21px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        border-radius: 10px;
        padding-bottom: 5px;
        z-index: 1;
        transition: .3s all;
    }

    .scrollCircle {
        width: 9px;
        height: 9px;
        background-color: #1E4FCD;
        border-radius: 100%;
    }

    .scrollText {
        position: absolute;
        right: -6px;
        bottom: 16px;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #1A1A1A;
        transform: rotate(-90deg);
        z-index: -1;
    }

    // ADAPTIVE
    @media screen and (max-width: 1130px){
        .stacks{
            column-gap: 20px;
        }
    }
    @media screen and (max-width: 1100px) {
        .scroll {
            display: none;
        }

        .title {
            max-width: 405px;
        }

        

        .rightInner {
            margin: 35px 0 0 0;
            position: absolute;
            right: 0;
            top: 0;
        }
        .rightTitleSpan::before{
            font-size: 60px;
            line-height: 60px;
            left: -40px;
        }
        .wrapper {
            position: relative;
        }

        .websites {
            font-size: 70px;
            line-height: 68px;
            margin-bottom: 0;
        }

        .applications {
            font-size: 44px;
            line-height: 41px;
            margin-bottom: 0;
        }

        .marketing {
            font-size: 49px;
            line-height: 48px;
            margin-bottom: 0;
        }

        .smm {
            font-size: 66px;
            line-height: 55px;
            margin-bottom: 0;
        }

        .webDevelopment {
            font-size: 35px;
            line-height: 31px;
            margin-bottom: 0;
        }

        .seo {
            font-size: 44px;
            line-height: 41px;
            margin-bottom: 0;
        }
    }
    @media screen and (max-width: 900px) {
        .rightInner {
            position: absolute;
            right: 0;
            top: 30px;
        }
        .rightTitleSpan::before{
            font-size: 45px;
            line-height: 45px;
            left: -35px;
        }
        .websites {
            font-size: 56px;
            line-height: 55px;
        }

        .applications {
            font-size: 34px;
            line-height: 34px;
            margin-right: 13px;
        }

        .marketing {
            font-size: 39px;
            line-height: 39px;
            margin-right: 81px;
        }

        .smm {
            font-size: 56px;
            line-height: 55px;
            margin-right: 99px;
        }

        .webDevelopment {
            font-size: 25px;
            line-height: 25px;
            margin-right: 26px;
        }

        .seo {
            font-size: 34px;
            line-height: 34px;
            margin-right: 133px;
        }
    }
    @media screen and (max-width: 680px) {
        .right {
            display: none;
        }
    }
    @media screen and (max-width: 550px) {
        padding: 71px 0 140px;
        .title {
            font-size: 30px;
            line-height: 36px;
            max-width: 300px;
        }

        .subtitle {
            margin-top: 0;
        }

        .stack + .stack {
            margin: 0;
        }

        .stacks {
            column-gap: unset;
            flex-wrap: wrap;
            justify-content: flex-start;
            row-gap: 28px;

            .frameworks {
                order: 1;
                margin-left: 30px;
                margin-right: 30px;
            }
        }

        .programLang {
            order: 2;
        }
        

    }
    @media screen and (max-width: 380px) {
        .btnWrapper {
            width: 300px;
        }

        .stacks {
            .frameworks {
                margin-left: 20px;
                margin-right: 0;
            }
        }
    }
`