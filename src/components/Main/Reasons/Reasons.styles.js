import styled from "styled-components";
import bg from "../../../images/bg.png";

export const ReasonsTag = styled.section`
    padding: 84px 0 46px;
    background-color: #1A1A1A;
    background-image: url(${bg});
    background-repeat: repeat;
    background-position: center -100px;
    position: relative;
    overflow: hidden;

    .content {
        max-width: 645px;
        margin-left: auto;
    }

    .title {
        font-size: 88px;
        line-height: 106px;
        color: #FFFFFF;
        margin-bottom: 15px;
    }

    .blue {
        color: #1E4FCD;
    }

    .white {
        color: #fff;
    }

    .item + .item {
        margin-top: 34px;
    }

    .subtitle {
        font-size: 21px;
        line-height: 25px;
        color: #FFFFFF;
        margin-bottom: 14px;
        position: relative;
    }

    .subtitle::after {
        content: '';
        width: 54px;
        height: 3px;
        position: absolute;
        background-color: #1E4FCD;
        bottom: -5px;
        left: 0;
    }

    .subtitle::before {
        content: '';
        width: 9px;
        height: 9px;
        background-color: #fff;
        position: absolute;
        left: -21px;
        top: 50%;
        transform: translateY(-50%);
    }

    .text {
        font-size: 18px;
        color: #FFFFFF;
    }

    .circle {
        width: 503px;
        height: 503px;
        position: absolute;
        background-color: #fff;
        left: -342px;
        bottom: -150px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .advantage {
        position: absolute;
        font-family: 'Russo One';
        font-size: 107px;
        line-height: 80px;
        text-transform: uppercase;
        color: #1A1A1A;
        z-index: 100;
    }

    .blackW {
        display: inline-block;
        color: #1A1A1A;
        background-color: #fff;
    }

    .advantage::before {
        position: absolute;
        font-size: 35px;
        line-height: 35px;
        bottom: -35px;
        color: #FFFFFF;
        text-transform: lowercase;
    }

    .advantage::after {
        color: rgba(157, 157, 157, .08);
        position: absolute;
        text-transform: lowercase;
        font-size: 150px;
        z-index: -10;
        left: -30px;
        top: -38px;
    }

    .first {
        transform: rotate(-59.94deg);
        top: -199px;
        right: -66px;
    }

    .first::before {
        content: 'лет на рынке';
        width: 150px;
        bottom: -65px;
        line-height: 30px;
        font-size: 40px;
    }

    .first::after {
        content: 'ui/ux';
    }

    .second {
        transform: rotate(-28.91deg);
        top: -34px;
        right: -364px;
    }

    .second::before {
        content: 'проектов';
    }

    .second::after {
        content: 'digital';
    }

    .third {
        transform: rotate(-5.16deg);
        bottom: 194px;
        right: -410px;
    }

    .third::before {
        content: 'человек';
    }

    .third::after {
        content: 'project';
    }

    //ADAPTIVE

    @media (max-width: 1770px) {
        .circle {
            width: 400px;
            height: 400px;
            left: -170px;
            bottom: -80px;
        }
        .star {
            width: 260px;
        }
        .advantage {
            font-size: 90px;
        }

        .first {
            top: -195px;
            right: -55px;
        }

        .second {
            top: -72px;
            right: -339px;
        }

        .third {
            bottom: 168px;
            right: -368px;
        }
    }
    @media (max-width: 1540px) {
        .circle {
            width: 370px;
            height: 370px;
        }

        

        .advantage {
            font-size: 80px;
        }

        .first {
            top: -179px;
            right: -36px;
        }

        .second {
            top: -66px;
            right: -306px;
        }

        .third {
            bottom: 140px;
            right: -340px;
        }
    }
    @media (max-width: 1770px) {
        .circle {
            width: 357px;
            height: 357px;
            left: -75px;
            bottom: -79px;
        }
    }
    @media (max-width: 1265px) {
        padding: 80px 0 510px;
        .content {
            margin-left: unset;
            padding-left: 20px;
            max-width: unset;
        }
        .star{
            width: 220px;
        }
        .circle {
            width: 357px;
            height: 357px;
            left: 50%;
            transform: translateX(-100%);
            bottom: -575px;
        }
        .advantage::after{
            font-size: 106px;
        }
    }
    @media (max-width: 925px) {
        padding: 80px 0 550px;
        .circle {
            bottom: -615px;
        }
    }
    @media (max-width: 850px) {
        .title {
            font-size: 80px;
            line-height: 96px;
            margin-bottom: 23px;
        }
    }
    @media (max-width: 925px) {
        .circle {
            transform: none;
            left: -60px;
        }
    }
    @media (max-width: 650px) {
        .advantage{
            font-size: 72px;
        }
        .blackW {
            line-height: 57px;
        }
        .advantage::before {
            font-size: 24px;
            bottom: -15px;
        }
        .first::before {
            bottom: -30px !important;
            line-height: 20px;
        }
        .first{
            top: -140px;
            right: -26px;
        }
        .second {
            top: -38px;
            right: -248px;
        }
        .third {
            bottom: 137px;
            right: -278px;
        }
    }
    @media (max-width: 570px) {
        padding: 80px 0 390px;
        .advantage{
            font-size: 45px;
        }
        .star{
            width: 138px;
        }
        .blackW {
            line-height: 36px;
        }
        .advantage::before {
            line-height: 13px;
            font-size: 17px;
            bottom: 7px;
        }
        .advantage::after {
            left: -15px;
            top: -20px;
        }
        .first::before {
            bottom: -6px !important;
            line-height: 13px;
            width: 100px;
        }
        .blueSpan {
            display: none;
        }

        .title {
            font-size: 75px;
            line-height: 75px;
            margin-bottom: 40px;
        }

        .subtitle {
            font-size: 20px;
            line-height: 22px;
        }

        .text {
            font-size: 16px;
            line-height: 150%;
        }

        .circle {
            width: 250px;
            height: 250px;
            bottom: -415px;
            left: -85px;
        }

        .star {
            width: 160px;
        }


        .advantage::after {
            font-size: 66px;
        }
        .first {
            top: -101px;
            right: -25px;
        }
        .second {
            top: -22px;
            right: -165px;
        }
        .third {
            bottom: 75px;
            right: -180px;
        }

    }
    @media (max-width: 424px) {
        .title {
            font-size: 60px;
            line-height: 60px;
        }

        .subtitle {
            font-size: 18px;
            line-height: 22px;
        }

        .text {
            font-size: 14px;
            line-height: 150%;
        }

        .item + .item {
            margin-top: 30px;
        }
    }
    @media (max-width: 372px) {
        overflow: hidden;
    }
    @media (max-width: 350px) {
        .circle{
            left: -115px;
        }
    }
`