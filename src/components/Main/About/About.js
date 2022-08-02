import React from 'react';
import styled from "styled-components";
import Dash from "../../common/Dash/Dash";
import useWindowSize from "../../../hooks/useWindowSize";
import {AboutTag} from "./About.styles";
import {LiquidCircle} from "../../../icons/components/LiquidCircle/LiquidCircle";



const About = () => {
    const width = useWindowSize()
    let design;
    if (width <= 450){
        design = <DesignSquaresMobile/>
    } else design = <DesignSquares/>
    return (
        <AboutTag>
            <div className="container">
                <Dash color={'#ffffff'} countBefore={6} countAfter={1} top={'0px'}/>
                <div className="wrapper">
                    <div className="absolute" data-aos='fade-left'>
                        {/*<p className="word">modern</p>
                        <p className="word">digital</p>
                        <p className="word">solutions</p>*/}
                        <LiquidCircle />
                    </div>
                    <div className="mainText">
                        <h2 className="title" data-aos='fade-down'>
                            Об <span className='blue'>></span>агентстве
                        </h2>
                        <p className="description" data-aos='fade-down'>
                            В команде работают специалисты по разработке, маркетингу, дизайну, а также продвижению и рекламе. За 5 лет работы пройден путь от 2 человек до агентства полного цикла, которое закрывает все потребности клиентов по разработке IT продуктов и их продвижению.
                        </p>
                    </div>
                    <div className="gridWrapper" data-aos='fade-right'>
                        <div className="gridElem">
                            <div className="nameWrapper">
                                <div className="flexWrapper">
                                    <div className="name">
                                        <p className="nameText">
                                            Геннадий Васнецов
                                        </p>
                                    </div>
                                    {design}
                                </div>
                            </div>
                            <p className="profile" data-aos='fade-left'>
                                full stack разработчик
                            </p>
                        </div>
                        <div className="gridElem">
                            <div className="nameWrapper">
                                <div className="flexWrapper">
                                    <div className="name">
                                        <p className="nameText">
                                            Геннадий Васнецов
                                        </p>
                                    </div>
                                    {design}
                                </div>
                            </div>
                            <p className="profile" data-aos='fade-left'>
                                full stack разработчик
                            </p>
                        </div>
                        <div className="gridElem">
                            <div className="nameWrapper">
                                <div className="flexWrapper">
                                    <div className="name">
                                        <p className="nameText">
                                            Геннадий Васнецов
                                        </p>
                                    </div>
                                    {design}
                                </div>
                            </div>
                            <p className="profile" data-aos='fade-left'>
                                full stack разработчик
                            </p>
                        </div>
                        <div className="gridElem">
                            <div className="nameWrapper">
                                <div className="flexWrapper">
                                    <div className="name">
                                        <p className="nameText">
                                            Геннадий Васнецов
                                        </p>
                                    </div>
                                    {design}
                                </div>
                            </div>
                            <p className="profile" data-aos='fade-left'>
                                full stack разработчик
                            </p>
                        </div>
                        <div className="gridElem">
                            <div className="nameWrapper">
                                <div className="flexWrapper">
                                    <div className="name">
                                        <p className="nameText">
                                            Геннадий Васнецов
                                        </p>
                                    </div>
                                    {design}
                                </div>
                            </div>
                            <p className="profile" data-aos='fade-left'>
                                full stack разработчик
                            </p>
                        </div>
                        <div className="gridElem">
                            <div className="nameWrapper">
                                <div className="flexWrapper">
                                    <div className="name">
                                        <p className="nameText">
                                            Геннадий Васнецов
                                        </p>
                                    </div>
                                    {design}
                                </div>
                            </div>
                            <p className="profile" data-aos='fade-left'>
                                full stack разработчик
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </AboutTag>
    );
};

const DesignSquaresTag = styled.div`
    display: flex;
    flex: 0 0 auto;
    margin-left: 7px;
    height: 31px;
    width: 53px;
    flex-wrap: wrap;
    column-gap: 7px;
    row-gap: 5px;
    .blue{
        background-color: #1E4FCD;
        width: 13px;
        height: 13px;
    }
    .white{
        background-color: #FFFFFF;
        width: 13px;
        height: 13px;
    }
    .long{
        width: 33px;
    }
`

const DesignSquares = () => {
    return (
        <DesignSquaresTag>
            <div className="blue"></div>
            <div className="white long"></div>
            <div className="white"></div>
            <div className="blue long"></div>
        </DesignSquaresTag>
    )
}

const DesignSquaresMobileTag = styled.div`
    display: flex;
    flex: 0 0 auto;
    margin-left: 3px;
    height: 32px;
    width: 19px;
    flex-wrap: wrap;
    column-gap: 3px;
    row-gap: 4px;
    .blue{
        background-color: #1E4FCD;
        width: 8px;
        height: 8px;
    }
    .white{
        background-color: #FFFFFF;
        width: 8px;
        height: 8px;
    }
    .long{
        height: 20px;
    }
`

const DesignSquaresMobile = () => {
    return (
        <DesignSquaresMobileTag>
            <div className="white"></div>
            <div className="blue"></div>
            <div className="blue long"></div>
            <div className="white long"></div>
        </DesignSquaresMobileTag>
    )
}

export default About;