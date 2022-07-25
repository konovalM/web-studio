import styled from "styled-components";
import bg from "../../../images/bg.png";

export const FaqTag = styled.section`
    padding: 84px 0 70px;
    background-color: #fff;
    background-image: url(${bg});
    background-position: center -100px;
    background-repeat: repeat;
    min-height: 950px;
    .title {
        font-size: 88px;
        line-height: 106px;
        color: #1A1A1A;
        margin-bottom: 8px;
    }
    .arrow{
        display: flex;
        align-items: center;
        transition: .2s transform;
    }
    .rotate{
        transform: rotate(180deg);
    }
    .blue {
        color: #1E4FCD;
    }
    .questionText {
        text-align: justify;
    }

    .description {
        max-width: 490px;
        font-size: 18px;
        color: #1A1A1A;
        margin-bottom: 64px;
    }

    .wrapper {
        position: relative;
    }

    .tree {
        position: absolute;
        left: 50%;
        top: -100px;
        transform: translateX(calc(-50% - 2px));
    }

    .gridWrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(9, minmax(46px, auto));
        grid-column-gap: 13px;
        z-index: 100;
        position: relative;
    }

    .question {
        margin-bottom: 5px;
        display: flex;
        
    }
    .arrow{
        flex: 0 0 auto;
    }

    .questionText {
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        
    }

    .accordionWrapper {
        position: relative;
    }

    .questionText::before {
        content: '';
        position: absolute;
        width: 24px;
        height: 1px;
        background-color: #1A1A1A;
        top: 12px;
        transform: translateY(-50%);
    }

    .accordionWrapper:nth-child(odd) {

        grid-column: 1 / 2;
        margin-right: 25px;
        
        .answer{
            text-align: right;
        }

        .questionText {
            padding-left: 10px;
        }

        .question {
            flex-direction: row-reverse;
        }

        .questionText::before {
            right: -31px;
        }

        .questionText::after {
            left: 0;
        }
    }

    .accordionWrapper::after {
        content: '';
        position: absolute;
        width: 13px;
        height: 13px;
        border-radius: 100%;
        background-color: #1E4FCD;
        z-index: 50;
    }

    .accordionWrapper::before {
        content: '';
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 100%;
        background-color: #fff;
        z-index: 50;
    }

    .rotate::after {
        transform: translateY(-10%) rotate(180deg);
    }

    .accordionWrapper:nth-child(odd)::before {
        right: -41px;
        top: 4px;
    }

    .accordionWrapper:nth-child(odd)::after {
        right: -39px;
        top: 6px;
    }

    .accordionWrapper:nth-child(even)::before {
        content: '';
        left: -39px;
        top: 4px;
        z-index: 50;
    }

    .accordionWrapper:nth-child(even)::after {
        left: -37px;
        top: 6px;
    }

    .accordionWrapper:nth-child(even) {
        grid-column: 2 / 3;
        margin-left: 25px;

        .questionText {
            padding-right: 10px;
        }

        .questionText::before {
            left: -31px;
        }

        .questionText::after {
            right: 0;
        }
    }

    .accordionWrapper:nth-child(1) {
        grid-row: 1 / 2;
    }

    .accordionWrapper:nth-child(2) {
        grid-row: 2 / 3;
    }

    .accordionWrapper:nth-child(3) {
        grid-row: 3 / 4;
    }

    .accordionWrapper:nth-child(4) {
        grid-row: 4 / 5;
    }

    .accordionWrapper:nth-child(5) {
        grid-row: 5 / 6;
    }

    .accordionWrapper:nth-child(6) {
        grid-row: 6 / 7;
    }

    .accordionWrapper:nth-child(7) {
        grid-row: 7 / 8;
    }

    .accordionWrapper:nth-child(8) {
        grid-row: 8 / 9;
    }

    .accordionWrapper:nth-child(9) {
        grid-row: 9 / 10;
    }

    .questionText {
        font-weight: 900;
        font-size: 21px;
        line-height: 25px;
        color: #1A1A1A;
        transition: .4s all;
    }

    .answer {
        font-size: 18px;
        color: #1A1A1A;
        visibility: hidden;
        height: 0;
        overflow: hidden;
        opacity: 0;
        transition: all .4s ease-out;
        transition-timing-function: cubic-bezier(.25, .1, .25, 1);
    }

    .answerActive {
        padding-top: 5px;
        visibility: visible;
        height: auto;
        overflow: visible;
        opacity: 1;
    }

    //ADAPTIVE
    @media (max-width: 1145px) {
        padding: 74px 0 80px;
        .title {
            font-size: 80px;
            line-height: 96px;
        }

        

        .answer {
            font-size: 16px;
            line-height: 150%;
        }

        .description {
            margin-bottom: 141px;
        }
    }
    @media (max-width: 920px) {
        .accordionWrapper:nth-child(odd) {
        }
        .questionText {
            font-size: 16px;
            line-height: 19px;
        }
    }
    //@media(max-width: 767px){
    @media (max-width: 700px) {
        padding: 54px 0 80px;
        
        .accordionWrapper:nth-child(odd) {
            .questionText {
                padding: 0 0 0 0;
            }
            .answer{
                text-align: left;
            }
            .questionText::before{
                content: none;
            }
        }
        .questionText{
            padding-right: 10px !important;
        }
        .answerActive{
            margin-bottom: 10px;
        }
        .accordionWrapper:nth-child(even) {
            .questionText {
                padding: 0 0 0 0;
            }
        }
        .question{
            flex-direction: row !important;
            justify-content: flex-start !important;
        }
        .title {
            font-size: 60px;
            line-height: 72px;
            margin-bottom: 25px;
        }

        .description {
            font-size: 14px;
            line-height: 150%;
        }

        .tree {
            left: 55px;
            top: -115px;
        }

        .gridWrapper {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(9, minmax(46px, auto));
            grid-column-gap: 13px;
            z-index: 100;
            position: relative;
            margin-left: 12px;
        }



        .accordionWrapper:nth-child(n) {
            grid-column: 1;
        }

        .accordionWrapper:nth-child(odd) {
            margin-left: 25px;
        }

        .accordionWrapper:nth-child(even) {
            .questionText::after {
                right: -24px;
                top: 3px;
            }
        }

        .accordionWrapper:nth-child(odd) .questionText {
            margin-left: 0;
        }

        .accordionWrapper:nth-child(odd) {

            .questionText::after {
                content: '';
                position: absolute;
                width: 24px;
                height: 1px;
                background-color: #1A1A1A;
                top: 12px;
                transform: translateY(-50%);
            }

            .questionText::before {
                right: -23px;
            }

            .questionText::after {
                left: -30px;
            }
        }

        .accordionWrapper:nth-child(odd)::after {
            left: -37px;
            top: 6px;
        }

        .accordionWrapper:nth-child(odd)::before {
            left: -39px;
            top: 4px;
        }

        .questionText {
            font-size: 14px;
            line-height: 16px;
        }

        .answer {
            font-size: 14px;
            line-height: 150%;
        }
    }
`