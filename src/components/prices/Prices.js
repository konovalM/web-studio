import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import bg from '../../images/bg.png'
import bigCircle from '../../images/bigCircle.svg'
import mediumCircle from '../../images/mediumCircle.svg'
import smallCircle from '../../images/smallCircle.svg'
import PricesComponent from "./PricesComponent";


const PricesTag = styled.section`
  padding: 90px 0 75px;
  background-color: #1a1a1a;
  background-image: url(${bg});
  background-position: center -100px;
  background-repeat: repeat;
  .title{
    font-size: 88px;
    line-height: 106px;
    color: #FFFFFF;
  }
  .description{
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    max-width: 490px;
    margin-bottom: 58px;
  }
  .product{
    max-width: 652px;
    margin-left: 120px;
    font-size: 109px;
    line-height: 100%;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 93px;
  }
  .wrapperPrices{
    position: relative;
    z-index: 100;
  }
  .whiteLine{
    background-color: #fff;
    position: absolute;
  }
  .priceInner{
    background-color: #1E4FCD;
    padding: 39px;
    position: relative;
  }
  .price{
    width: 690px;
    height: 186px;
    position: absolute;
    right: 0;
    z-index: 100;
    transform: translate(0);
  }
  .cost{
    max-width: 271px;
    font-size: 35px;
    line-height: 41px;
    color: #FFFFFF;
    margin-bottom: 4px;
  }
  .descr{
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
  }
  .price::before{
    content: '';
    width: 470px;
    height: 480px;
    position: absolute;
    z-index: -10;
    background: url(${bigCircle});
    left: -138px;
    top: 50%;
    transform: translateY(-50%);
  }
  .price::after{
    content: '';
    width: 394px;
    height: 394px;
    position: absolute;
    z-index: -10;
    background: url(${mediumCircle});
    left: -105px;
    top: 50%;
    transform: translateY(-50%);
  }
  .priceInner::before{
    content: '';
    position: absolute;
    background: url(${smallCircle});
    height: 310px;
    width: 310px;
    left: -64px;
    top: 50%;
    transform: translateY(-50%);
    z-index: -100;
  }
  .flexWrapper{
    display: flex;
    margin-bottom: 45px;
  }
  .flexList{
    padding-left: 23px;
  }
  .flexList+.flexList{
    margin-left: 120px;
  }
  .flexItem{
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    position: relative;
  }
  .flexItem+.flexItem{
    margin-top: 20px;
  }
  .flexItem::before{
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #1E4FCD;
    left: -23px;
    top: 50%;
    transform: translateY(-50%);
  }
  .btnWrapper{
    display: flex;
    justify-content: center;
  }
  .btn{
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    height: 52px;
    width: 271px;
    background: #1E4FCD;
    border: none;
    margin-top: 36px;
  }
`

const Prices = () => {


    return (
        <PricesTag>
            <div className="wrapperPrices">
                <div className="container">
                    <h2 className="title">Кейсы и цены</h2>
                    <div className="description">Создаем магазины, лендинги, корпоративные сайты, криптосервисы, сайты мероприятий, а также сайты под нестандартные задачи.</div>
                </div>
                <PricesComponent title='лендинги визитки' price='60 000'/>
                <PricesComponent title='online магазины' margin='225px' price='130 000'/>
                <PricesComponent title='многостраничные сайты' size={true} margin='225px' price='180 000'/>

            </div>
        </PricesTag>
    );
};

export default Prices;