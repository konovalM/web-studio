import React, {Fragment, useEffect} from 'react';
import styled from 'styled-components'
import bg from '../../images/bg.png'
import Button from "../../elements/Button";
import Dash from "../common/Dash/Dash";
// import Button from "./elements/Button";

const MainTag = styled.section`
  min-height: 676px;
  background-color: #fff;
  background-image: url(${bg});
  background-position: center -100px;
  background-repeat: repeat;
  padding: 93px 0 65px;
  z-index: 110;
  position: relative;
  .wrapper{
    display: flex;
    justify-content: space-between;
  }
  .subtitle{
    margin-top: 40px;
    font-family: Roboto;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #1A1A1A;
  }
  .title{
    margin-top: 29px;
    font-size: 38px;
    line-height: 46px;
    color: #1A1A1A;
  }
  .blue{
    color: #1E4FCD;
  }
  .white{
    color: #FFFFFF;
    background-color: #1A1A1A;
    line-height: 16px;
  }
  .btnWrapper{
    margin-top: 32px;
    display: flex;
    width: 353px;
    position: relative;
  }
  .pointFirst{
    width: 26px;
    height: 50%;
    background-color: #1a1a1a;
    position: absolute;
    top: 0;
    left: 0;
  }
  .pointSecond{
    width: 26px;
    height: 50%;
    background-color: #1a1a1a;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .points{
    width: 82px;
    position: relative;
  }
  .consultation{
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

  .stacks{
    margin-top: 112px;
    max-width: 540px;
    display: flex;
    justify-content: space-between;
  }
  .stack{
    width: 140px;
  }
    .bold{
        font-weight: 900;
    }
  .stackItem{
    display: flex;
    font-size: 18px;
    line-height: 21px;
    color: #1A1A1A;
    height: 30px;
    align-items: center;
    padding-left: 8px;
  }
  .stackItem+.stackItem{
    margin-top: 5px;
  }
  .stackItemActive{
    background-color: #1E4FCD;
    color: #fff;
  }
  .stackText{
    position: relative;
  }
  .stackItemActive .stackText::before{
    content: '';
    width: 11px;
    height: 3px;
    background-color: #fff;
    position: absolute;
    right: -3px;
    bottom: -2px;
  }
  .rightInner{
    margin-right: 38px;
  }
  .rightTitle{
    color: #1A1A1A;
    text-align: right;
    margin-bottom: 8px;
  }
  .websites{
    font-size: 100px;
    line-height: 68px;
  }
  .applications{
    margin-right: 20px;
    font-size: 60px;
    line-height: 57px;
    margin-bottom: 12px;
  }
  .marketing{
    margin-right: 140px;
    font-size: 70px;
    line-height: 57px;
  }
  .smm{
    margin-right: 170px;
    font-size: 100px;
    line-height: 63px;
  }
  .webDevelopment{
    margin-right: 43px;
    font-size: 45px;
    line-height: 42px;
  }
  .seo{
    margin-right: 230px;
    line-height: 42px;
    font-size: 60px;
  }
    .scroll{
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
    }
    .scrollOutside{
        height: 60px;
        width: 21px;
        border: 2px solid #1E4FCD;
        border-radius: 10px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 5;
    }
    .scroll:hover .scrollInner{
        transform: translateY(40px);
        
    }
    .scrollInner{
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
    
    .scrollCircle{
        width: 9px;
        height: 9px;
        background-color: #1E4FCD;
        border-radius: 100%;
    }
    .scrollText{
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
  
  @media screen and (max-width: 1100px){
    .scroll{
        display: none;
    }
    .title{
      max-width: 405px;
    }
    .stack+.stack{
      margin-left: 20px;
    }
    .rightInner{
      margin: 35px 0 0 0;
      position: absolute;
      right: 0;
      top: 0;
    }
    .wrapper{
      position: relative;
    }
    .websites{
      font-size: 70px;
      line-height: 68px;
      margin-bottom: 0;
    }
    .applications{
      font-size: 44px;
      line-height: 41px;
      margin-bottom: 0;
    }
    .marketing{
      font-size: 49px;
      line-height: 48px;
      margin-bottom: 0;
    }
    .smm{
      font-size: 66px;
      line-height: 55px;
      margin-bottom: 0;
    }
    .webDevelopment{
      font-size: 35px;
      line-height: 31px;
      margin-bottom: 0;
    }
    .seo{
      font-size: 44px;
      line-height: 41px;
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 900px){
    .rightInner{
      position: absolute;
      right: 0;
      top: 30px;
    }
    .websites{
      font-size: 56px;
      line-height: 55px;
    }
    .applications{
      font-size: 34px;
      line-height: 34px;
      margin-right: 13px;
    }
    .marketing{
      font-size: 39px;
      line-height: 39px;
      margin-right: 81px;
    }
    .smm{
      font-size: 56px;
      line-height: 55px;
      margin-right: 99px;
    }
    .webDevelopment{
      font-size: 25px;
      line-height: 25px;
      margin-right: 26px;
    }
    .seo{
      font-size: 34px;
      line-height: 34px;
      margin-right: 133px;
    }
  }
  @media screen and (max-width: 680px){
    .right{
      display: none;
    }
  }
  @media screen and (max-width: 500px){
    padding: 71px 0 116px;
    .title{
      font-size: 30px;
      line-height: 36px;
      max-width: 300px;
    }
    .subtitle{
      margin-top: 0;
    }
    .consultation{
      width: 209px;
      height: 40px;
      font-size: 13.92px;
      line-height: 16px;
    }
    .pointFirst, .pointSecond{
      width: 20px;
    }
    .points{
      width: 63px;
    }
    .stack+.stack{
      margin: 0;
    }
    .stacks{
      flex-wrap: wrap;
      justify-content: flex-start;
      row-gap: 28px;
      .frameworks{
        order: 1;
        margin-left: 30px;
        margin-right: 30px;
      }
    }
    .programLang{
      order: 2;
    }
    
  }
  @media screen and (max-width: 380px){
    .btnWrapper{
      width: 300px;
    }
    .stacks{
      .frameworks{
        margin-left: 20px;
        margin-right: 0;
      }
    }
  }
`

const Main = () => {
    return (
        <MainTag>
            <div className="scroll">
                <div className="scrollOutside">
                </div>
                <div className="scrollInner">
                    <div className="scrollCircle"></div>
                </div>
                <p className="scrollText">scroll</p>
            </div>
            <div className="container">
                <Dash color={'#000000'} countBefore={0} countAfter={7} bottom={'0px'}/>
               <div className="wrapper">
                   <div className="left">
                       <h1 className="subtitle">
                           DIGITAL-агентство полного цикла STUDIO NAME
                       </h1>
                       <h2 className="title">
                           Сайты под ключ и <span className='blue'>[web. <span className='white'>с</span>]</span>
                       </h2>
                           <Button btnClassName='consultation' clazz1={'pointFirst'} clazz2={'pointSecond'} parentClass={'points'} btnStyles={[{background: '#1E4FCD', color: '#fff', border: 'none'}, {background: '#fff', color: '#1a1a1a', border: '1px solid #1a1a1a'}]}>
                               <div className="btnWrapper">
                                   <button className="consultation">
                                       Получить консультацию
                                   </button>
                                   <div className="points">
                                       <div className="pointFirst"></div>
                                       <div className="pointSecond"></div>
                                   </div>
                               </div>
                           </Button>
                       <div className="stacks">
                           <div className="stack programLang">
                               <div className="stackItem">
                                   <div className="stackText">Python</div>
                               </div>
                               <div className="stackItem stackItemActive">
                                   <div className="stackText bold">JavaScript</div>
                               </div>
                               <div className="stackItem">
                                   <div className="stackText">Node</div>
                               </div>
                           </div>
                           <div className="stack frameworks">
                               <div className="stackItem stackItemActive">
                                   <div className="stackText bold">Django</div>
                               </div>
                               <div className="stackItem">
                                   <div className="stackText">React</div>
                               </div>
                               <div className="stackItem">
                                   <div className="stackText">Next</div>
                               </div>
                               <div className="stackItem">
                                   <div className="stackText">Vue</div>
                               </div>
                           </div>
                           <div className="stack cms">
                               <div className="stackItem">
                                   <div className="stackText">Wordpress</div>
                               </div>
                               <div className="stackItem stackItemActive">
                                   <div className="stackText bold">Tilda</div>
                               </div>
                               <div className="stackItem">
                                   <div className="stackText">Ghost</div>
                               </div>
                               <div className="stackItem">Others...</div>
                           </div>
                       </div>
                   </div>
                   <div className="right">
                       <div className="rightInner">
                           <h3 className="websites rightTitle">websites</h3>
                           <h3 className="applications rightTitle">applications</h3>
                           <h3 className="marketing rightTitle">marketing</h3>
                           <h3 className="smm rightTitle">smm</h3>
                           <h3 className="webDevelopment rightTitle">webdevelopment</h3>
                           <h3 className="seo rightTitle">seo</h3>
                       </div>
                   </div>
               </div>
            </div>
        </MainTag>
    );
};

export default Main;
