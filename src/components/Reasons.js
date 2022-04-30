import React from 'react';
import styled from 'styled-components'
import bg from '../images/bg.png'
import star from '../images/star.svg'

const ReasonsTag = styled.section`
  padding: 84px 0 46px;
  background-color: #1A1A1A;
  background-image: url(${bg});
  background-repeat: repeat;
  background-position: center -100px;
  position: relative;
  .content{
    max-width: 645px;
    margin-left: auto;
  }
  .title{
    font-size: 88px;
    line-height: 106px;
    color: #FFFFFF;
    margin-bottom: 15px;
  }
  .blue{
    color: #1E4FCD;
  }
  .white{
    color: #fff;
  }
  .item+.item{
    margin-top: 34px;
  }
  .subtitle{
    font-size: 21px;
    line-height: 25px;
    color: #FFFFFF;
    margin-bottom: 14px;
    position: relative;
  }
  .subtitle::after{
    content: '';
    width: 54px;
    height: 3px;
    position: absolute;
    background-color: #1E4FCD;
    bottom: -5px;
    left: 0;
  }
  .subtitle::before{
    content: '';
    width: 9px;
    height: 9px;
    background-color: #fff;
    position: absolute;
    left: -21px;
    top: 50%;
    transform: translateY(-50%);
  }
  .text{
    font-size: 18px;
    color: #FFFFFF;
  }
  .circle{
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
  .advantage{
    position: absolute;
    font-family: 'Russo One';
    font-size: 102px;
    line-height: 80px;
    text-transform: uppercase;
    color: #1A1A1A;
    z-index: 100;
  }
  .blackW{
    display: inline-block;
    color: #000;
    background-color: #fff;
  }
  .advantage::before{
    position: absolute;
    font-size: 35px;
    line-height: 35px;
    bottom: -35px;
    color: #FFFFFF;
    text-transform: lowercase;
  }
  .advantage::after{
    color: rgba(157,157,157, .08);
    position: absolute;
    text-transform: lowercase;
    font-size: 150px;
    z-index: -10;
    left: -30px;
    top: -38px;
  }
  .first{
    transform: rotate(-59.94deg);
    top: -190px;
    right: -70px;
  }
  .first::before{
    content: 'лет на рынке';
    width: 150px;
    bottom: -65px;
    line-height: 30px;
    font-size: 40px;
  }
  .first::after{
    content: 'ui/ux';
  }
  .second{
    transform: rotate(-28.91deg);
    top: -20px;
    right: -360px;
  }
  .second::before{
    content: 'проектов';
  }
  .second::after{
    content: 'digital';
  }
  .third{
    transform: rotate(-5.16deg);
    bottom: 194px;
    right: -387px;
  }
  .third::before{
    content: 'человек';
  }
  .third::after{
    content: 'project';
  }
`

const Reasons = () => {
    return (
        <ReasonsTag>
            <div className="container">
                <div className="content">
                    <h2 className="title">Почему <span className='blue'>{`{`}<span className='white'>мы</span>}</span></h2>
                    <div className="item">
                        <h4 className="subtitle">Никаких операторов по продажам</h4>
                        <div className="text">Все сотрудники и менеджеры проектов имеют профильное образование в сайтостроении. Вам не придется общаться с “продавцами утюгов”.</div>
                    </div>
                    <div className="item">
                        <h4 className="subtitle">Надежнее фриланса</h4>
                        <div className="text">Больше половины клиентов фрилансеров получают неработающие сайты, либо платят мошенникам. С нами вы забудете про эти проблемы.</div>
                    </div>
                    <div className="item">
                        <h4 className="subtitle">Приведем клиентов</h4>
                        <div className="text">Если сайт не приносит прибыли - цена ему “ноль”. Настраиваем рекламу и приводим реальных заказчиков с деньгами.</div>
                    </div>
                    <div className="item">
                        <h4 className="subtitle">Анализируем конкурентов</h4>
                        <div className="text">Разработчики-любители сдают вместо сайтов красивые картинки. Мы сперва изучаем вашу нишу и делаем по-настоящему продающий сайт.</div>
                    </div>
                </div>
            </div>
            <div className="circle">
                <img src={star} alt="star"/>
                <div className="first advantage">
                    <span className='blackW'>5+</span><span className='blue'> [<span className='white'>..</span>]</span>
                </div>
                <div className="second advantage">
                    <span className='blackW'>200+</span><span className="blue"> ></span><span className="white">></span>
                </div>
                <div className="third advantage">
                    <span className='blackW'>12+</span><span className="blue"> //</span><span className="white">#</span>
                </div>
            </div>
        </ReasonsTag>
    );
};

export default Reasons;