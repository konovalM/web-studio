import React from 'react';
import styled from 'styled-components'
import bg from '../../images/bg.png'
import star from '../../images/star.svg'
import Dash from "../common/Dash/Dash";
import {AnimateWrapper} from "../../animations/AnimateWrapper";
import {Element} from 'react-scroll'

const ReasonsTag = styled.section`
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
        left: -53px;
        bottom: -100px;
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
        content: '?????? ???? ??????????';
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
        content: '????????????????';
    }

    .second::after {
        content: 'digital';
    }

    .third {
        transform: rotate(-5.16deg);
        bottom: 194px;
        right: -387px;
    }

    .third::before {
        content: '??????????????';
    }

    .third::after {
        content: 'project';
    }

    //ADAPTIVE

    @media (max-width: 1770px) {
        .circle {
            width: 400px;
            height: 400px;
            left: -39px;
            bottom: -80px;
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

        .star {
            width: 260px;
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
    @media (max-width: 1400px) {
        .circle {
            width: 357px;
            height: 357px;
            left: -75px;
            bottom: -69px;
        }

        .star {
            width: 200px;
        }

        .advantage {
            font-size: 72px;
            line-height: 55px;
        }

        .advantage::before {
            font-size: 28px;
            line-height: 21px;
        }

        .advantage::after {
            font-size: 106.474px;
            line-height: 128px;
            left: -27px;
            top: -62px;
        }

        .advantage::before {
            bottom: -21px;
        }

        .first {
            top: -124px;
            right: -59px;
        }

        .first::before {
            bottom: -45px;
        }

        .second {
            top: -25px;
            right: -263px;
        }

        .third {
            bottom: 154px;
            right: -287px;
        }
    }
    @media (max-width: 1265px) {
        padding: 80px 0 490px;
        .content {
            margin-left: unset;
            padding-left: 20px;
            max-width: unset;
        }

        .circle {
            width: 357px;
            height: 357px;
            left: 50%;
            transform: translateX(-100%);
            bottom: -69px;
        }
    }
    @media (max-width: 850px) {
        .title {
            font-size: 80px;
            line-height: 96px;
            margin-bottom: 23px;
        }
    }
    @media (max-width: 688px) {
        .circle {
            bottom: -59px;
        }
    }
    @media (max-width: 623px) {
        padding: 80px 0 350px;
        .circle {
            bottom: -53px;
            width: 300px;
            height: 300px;
        }

        .advantage {
            font-size: 52px;
            line-height: 40px;
        }

        .advantage::after {
            font-size: 85.474px;
        }

        .first {
            top: -90px;
            right: -40px;
        }

        .second {
            top: -5px;
            right: -208px;
        }

        .third {
            bottom: 120px;
            right: -233px;
        }
    }
    @media (max-width: 570px) {
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
        }

        .advantage {
            font-size: 45.0341px;
            line-height: 35px;
        }

        .advantage::after {
            font-size: 66.2267px;
            line-height: 80px;
            left: -23px;
            top: -36px;
        }

        .advantage::before {
            font-size: 17.6604px;
            line-height: 13px;
            bottom: -13px;
        }

        .first::before {
            width: 100px;
            bottom: -28px;
        }

        .star {
            width: 160px;
        }

        .first {
            top: -86px;
            right: -42px;
        }

        .second {
            top: -15px;
            right: -182px;
        }

        .third {
            bottom: 104px;
            right: -200px;
        }
    }
    @media (max-width: 424px) {
        padding: 80px 0 318px;
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

        .circle {
            left: 130px;
            width: 222px;
            height: 222px;
            bottom: -45px;
        }

        .star {
            width: 138px;
        }

        .advantage {
            font-size: 45.0341px;
            line-height: 35px;
        }

        .first {
            top: -86px;
            right: -30px;
        }

        .second {
            top: -21px;
            right: -162px;
        }

        .third {
            bottom: 93px;
            right: -183px;
        }
    }
    @media (max-width: 372px) {
        overflow: hidden;
    }
`

const Reasons = () => {
    return (
        <ReasonsTag>
            <Element name='main-second'>
                <div className="container">
                    <Dash color={'#ffffff'} countBefore={1} countAfter={6} top={'0px'}/>
                    <div className="content">
                        <h2 className="title">???????????? <span className='blue blueSpan'>{`{`}</span><span
                            className='white'>????</span><span className='blue blueSpan'>{`}`}</span></h2>
                        <div className="item">
                            <AnimateWrapper animate='fade-left'>
                                <h4 className="subtitle">?????????????? ???????????????????? ???? ????????????????</h4>
                                <div className="text">?????? ???????????????????? ?? ?????????????????? ???????????????? ?????????? ???????????????????? ?????????????????????? ??
                                    ??????????????????????????. ?????? ???? ???????????????? ???????????????? ?? ??????????????????????? ???????????????.
                                </div>
                            </AnimateWrapper>
                        </div>
                        <div className="item">
                            <h4 className="subtitle">???????????????? ????????????????</h4>
                            <div className="text">???????????? ???????????????? ???????????????? ?????????????????????? ???????????????? ???????????????????????? ??????????, ????????
                                ???????????? ????????????????????. ?? ???????? ???? ???????????????? ?????? ?????? ????????????????.
                            </div>
                        </div>
                        <div className="item">
                            <h4 className="subtitle">???????????????? ????????????????</h4>
                            <div className="text">???????? ???????? ???? ???????????????? ?????????????? - ???????? ?????? ??????????????. ?????????????????????? ?????????????? ??
                                ???????????????? ???????????????? ???????????????????? ?? ????????????????.
                            </div>
                        </div>
                        <div className="item">
                            <h4 className="subtitle">?????????????????????? ??????????????????????</h4>
                            <div className="text">????????????????????????-???????????????? ?????????? ???????????? ???????????? ???????????????? ????????????????. ???? ????????????
                                ?????????????? ???????? ???????? ?? ???????????? ????-???????????????????? ?????????????????? ????????.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle">
                    <img src={star} alt="star" className='star'/>
                    <div className="first advantage">
                        <span className='blackW'>5+</span><span className='blue'> [<span
                        className='white'>..</span>]</span>
                    </div>
                    <div className="second advantage">
                        <span className='blackW'>200+</span><span className="blue"> ></span><span
                        className="white">></span>
                    </div>
                    <div className="third advantage">
                        <span className='blackW'>12+</span><span className="blue"> //</span><span
                        className="white">#</span>
                    </div>
                </div>
            </Element>
        </ReasonsTag>
    );
};

export default Reasons;