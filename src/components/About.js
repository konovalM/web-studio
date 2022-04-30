import React from 'react';
import styled from "styled-components";
import bg from '../images/bg.png'
import developerBg from '../images/developer.jpg'

const AboutTag = styled.section`
  padding: 85px 0 40px;
  background-color: #1A1A1A;
  background-image: url(${bg});
  background-position: center -200px;
  background-repeat: repeat;
  overflow: hidden;
  z-index: 100;
  position: relative;
  .mainText{
    max-width: 640px;
  }
  .title{
    font-weight: 400;
    font-size: 88px;
    line-height: 106px;
    color: #FFFFFF;
  }
  .description{
    font-size: 18px;
    line-height: 150%;
    color: #FFFFFF;
    padding-right: 20px;
    margin-bottom: 50px;
  }
  .blue{
    color: #1E4FCD;
  }
  .gridWrapper{
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-template-rows: 260px;
    grid-auto-rows: 260px;
    grid-column-gap: 30px;
    grid-row-gap: 50px;
  }
  .gridElem{
    overflow: hidden;
    background: url(${developerBg})center center/cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .gridElem:nth-child(n+3){
    grid-row-start: 2;
  }
  .name{
    width: 100%;
    height: 31px;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding-left: 16px;
    font-weight: 800;
    font-size: 20px;
    line-height: 23px;
    color: #1A1A1A;
    margin-bottom: 8px;
  }
  .profile{
    display: flex;
    background-color: #1A1A1A;
    align-items: center;
    width: 100%;
    height: 31px;
    padding-left: 16px;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    margin-bottom: 16px;
  }
  .wrapper{
    position: relative;
  }
  .absolute{
    max-width: 670px;
    position: absolute;
    right: -50px;
    top: 150px;
  }
  .absolute::before, .absolute::after{
    position: absolute;
    color: #fff;
    -webkit-text-stroke: 1px rgba(255,255,255,.3);
    -webkit-text-fill-color: transparent;
    z-index: -100;
    font-family: 'Russo One';
    font-size: 280px;
    line-height: 180px;

  }
  .absolute::before{
    content: 'modern';
    top: -40px;
    left: -50px;
  }
  .absolute::after{
    content: 'solutions';
    bottom: 0;
    left: -20px;
  }
  .word:nth-child(1){
    padding-left: 28px;
  }
  .word:nth-child(2){
    text-align: center;
  }
  .word{
    font-family: 'Russo One';
    font-size: 140px;
    color: #fff;
    line-height: 120px;
  }
`

const About = () => {
    return (
        <AboutTag>
            <div className="container">
                <div className="wrapper">
                    <div className="absolute">
                        <p className="word">modern</p>
                        <p className="word">digital</p>
                        <p className="word">solutions</p>
                    </div>
                    <div className="mainText">
                        <h2 className="title">
                            Об <span className='blue'>></span>агентстве
                        </h2>
                        <p className="description">
                            В команде работают специалисты по разработке, маркетингу, дизайну, а также продвижению и рекламе. За 5 лет работы пройден путь от 2 человек до агентства полного цикла, которое закрывает все потребности клиентов по разработке IT продуктов и их продвижению.
                        </p>
                    </div>
                    <div className="gridWrapper">
                        <div className="gridElem">
                            <p className="name">
                                Геннадий Васнецов
                            </p>
                            <p className="profile">
                                full stack разработчик
                            </p>
                        </div>
                        <div className="gridElem">
                            <p className="name">
                                Геннадий Васнецов
                            </p>
                            <p className="profile">
                                full stack разработчик
                            </p>
                        </div>
                        <div className="gridElem">
                            <p className="name">
                                Геннадий Васнецов
                            </p>
                            <p className="profile">
                                full stack разработчик
                            </p>
                        </div>
                        <div className="gridElem">
                            <p className="name">
                                Геннадий Васнецов
                            </p>
                            <p className="profile">
                                full stack разработчик
                            </p>
                        </div>
                        <div className="gridElem">
                            <p className="name">
                                Геннадий Васнецов
                            </p>
                            <p className="profile">
                                full stack разработчик
                            </p>
                        </div>
                        <div className="gridElem">
                            <p className="name">
                                Геннадий Васнецов
                            </p>
                            <p className="profile">
                                full stack разработчик
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </AboutTag>
    );
};

export default About;