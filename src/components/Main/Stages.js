import React from 'react';
import styled from 'styled-components'
import bg from '../../images/bg.png'
import first from '../../images/stagesGrid/first.svg'
import second from '../../images/stagesGrid/second.svg'
import third from '../../images/stagesGrid/third.svg'
import fourth from '../../images/stagesGrid/fourth.svg'
import fifth from '../../images/stagesGrid/fifth.svg'
import sixth from '../../images/stagesGrid/sixth.svg'
import Dash from "../common/Dash/Dash";

const StagesTag = styled.section`
  padding: 80px 0;
  background-color: #fff;
  background-image: url(${bg});
  background-position: center -100px;
  background-repeat: repeat;
  .title{
    font-size: 88px;
    line-height: 106px;
    color: #1A1A1A;
  }
  .blue{
    color: #1E4FCD;
  }
  .black{
    color: #1A1A1A;
  }
  .description{
    font-size: 18px;
    line-height: 21px;
    max-width: 490px;
    color: #1A1A1A;
    margin-bottom: 44px;
  }
  .gridWrapper{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    grid-template-rows: auto;
    grid-auto-rows: auto;
    //grid-template-rows: 170px;
    //grid-auto-rows: 170px;
    column-gap: 27px;
    row-gap: 46px;
  }
  .flexWrapper{
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .content{
    max-width: 520px;
    flex-shrink: 1;
    position: relative;
  }
  .icon{
    height: 170px;
    display: flex;
    align-items: flex-end;
    align-self: flex-start;
    flex-shrink: 0;
    margin-right: 35px;
  }
  .subtitle{
    font-size: 30px;
    line-height: 36px;
    text-transform: uppercase;
    color: #1A1A1A;
    margin: 64px 0 8px;
    position: relative;
  }
  .subtitle::before{
    content: '#';
    font-family: 'Russo One';
    font-size: 40px;
    line-height: 48px;
    text-transform: uppercase;
    color: #1A1A1A;
    position: absolute;
    left: -37px;
    top: -7px;
    z-index: 100;
    
  }
  .content::before{
    font-weight: 900;
    color: #fff;
    font-size: 40px;
    line-height: 47px;
    text-transform: uppercase;
    position: absolute;
    left: -20px;
    top: 15px;
    z-index: 10;
  }
  .gridItem:nth-child(1) .content::before{
    content: '1.';
  }
  .gridItem:nth-child(2) .content::before{
    content: '2.';
  }
  .gridItem:nth-child(3) .content::before{
    content: '3.';
  }
  .gridItem:nth-child(4) .content::before{
    content: '4.';
  }
  .gridItem:nth-child(5) .content::before{
    content: '5.';
  }
  .gridItem:nth-child(6) .content::before{
    content: '6.';
  }
  .subtitle::after{
    content: '';
    width: 56px;
    height: 56px;
    background: #1E4FCD;
    position: absolute;
    transform: rotate(-34.84deg);
    left: -33px;
    top: -51px;
  }
  .text{
    font-size: 18px;
    line-height: 21px;
    color: #1A1A1A;
  }
  // ADAPTIVE
  @media (max-width: 1272px){
    .gridWrapper{
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
  }
  @media (max-width: 991px){
    
    padding: 66px 0 51px;
    .gridWrapper{
      column-gap: 22px;
      row-gap: 49px;
      grid-template-columns: repeat(auto-fit, minmax(351px, 1fr));
    }
    .title{
      font-size: 80px;
      line-height: 96px;
    }
    .description{
      font-size: 18px;
      line-height: 150%;
      margin-bottom: 70px;
    }
    .subtitle{
      font-size: 22px;
      line-height: 27px;
      margin-bottom: 10px;
    }
    .text{
      font-size: 16px;
      line-height: 150%;
    }
  }
  @media (max-width: 767px){
    padding: 52px 0 60px;
    .gridItem{
      padding: 0 5px;
    }
    .gridWrapper{
      column-gap: 22px;
      grid-template-columns: 1fr;
      row-gap: 20px;
    }
    .icon{
      display: none;
    }
    .subtitle{
      margin: 53px 0 6px;
      font-size: 18px;
      line-height: 22px;
    }
    .subtitle::before{
      font-size: 30px;
      line-height: 36px;
      left: 0;
      top: -30px;
      z-index: 100;
    }
    .content::before{
      font-size: 25.2379px;
      line-height: 30px;
      left: 24px;
      top: 10px;
    }
    .subtitle::after{
      width: 35.62px;
      height: 35.62px;
      left: 16px;
      top: -45px;
    }
    .title{
      font-size: 60px;
      line-height: 100%;
      margin-bottom: 7px;
    }
    .description{
      font-size: 14px;
      line-height: 150%;
      margin-bottom: 41px;
      max-width: 450px;
    }
    .text{
      font-size: 14px;
      line-height: 150%;
    }
    @media (max-width: 550px){
      .br{
        display: block;
      }
      .blue{
        display: none;
      }
      .description{
        max-width: 250px;
      }
    }
  }
  
`

const Stages = () => {
    return (
        <StagesTag>
            <div className="container">
                <Dash color={'#000000'} countBefore={2} countAfter={5} top={'0px'}/>
                <h2 className="title">
                    Этапы работы <span className='blue'>;<span className='black'>-</span>]</span>
                </h2>
                <p className="description">
                    Поможем составить техзадание и определиться со структурой сайта. От вас потребуется понимание того как будет работать бизнес. <span className="br">Все остальное возьмем на себя.</span>
                </p>
                <div className="gridWrapper">
                    <div className="gridItem">
                        <div className="flexWrapper">
                            <div className="icon">
                                <img src={first} alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="subtitle">Бесплатная консультация</h3>
                                <div className="text">Выбор типа сайта, определение методов продвижения. Базовый маркетинговый анализ ниши и конкурентов.</div>
                            </div>
                        </div>
                    </div>
                    <div className="gridItem">
                        <div className="flexWrapper">
                            <div className="icon">
                                <img src={second} alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="subtitle">техзадание и предоплата</h3>
                                <div className="text">Составление техзадания, набросок структуры сайта. Договоренность об условиях оплаты.</div>
                            </div>
                        </div>
                    </div>
                    <div className="gridItem">
                        <div className="flexWrapper">
                            <div className="icon">
                                <img src={third} alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="subtitle">маркетинговый анализ</h3>
                                <div className="text">Выявление страхов заказчиков и методов их закрытия. Составление портрета аудитории. Анализ конкурентов.</div>
                            </div>
                        </div>
                    </div>
                    <div className="gridItem">
                        <div className="flexWrapper">
                            <div className="icon">
                                <img src={fourth} alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="subtitle">отрисовка дизайна</h3>
                                <div className="text">Создание прототипа сайта и его отрисовка. Проработка мобильной и планшетной версий.</div>
                            </div>
                        </div>
                    </div>
                    <div className="gridItem">
                        <div className="flexWrapper">
                            <div className="icon">
                                <img src={fifth} alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="subtitle">верстка и разработка</h3>
                                <div className="text">Выбор системы управления сайтом. Адаптивная верстка под различные экраны. Разработка функционала.</div>
                            </div>
                        </div>
                    </div>
                    <div className="gridItem">
                        <div className="flexWrapper">
                            <div className="icon">
                                <img src={sixth} alt=""/>
                            </div>
                            <div className="content">
                                <h3 className="subtitle">тесты и запуск сайта</h3>
                                <div className="text">Загрузка сайта на хостинг, подключение домена, почты, счетчика посещений. Внесение остатка оплаты.</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </StagesTag>
    );
};

export default Stages;