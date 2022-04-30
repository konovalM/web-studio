import React, {Fragment} from 'react';
import styled from 'styled-components'
import bg from '../images/bg.png'

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
  .consultation{
    margin-top: 32px;
    width: 271px;
    height: 52px;
    background: #1E4FCD;
    border: none;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
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
`

const Main = () => {
    return (
        <MainTag>
            <div className="container">
               <div className="wrapper">
                   <div className="left">
                       <h1 className="subtitle">
                           DIGITAL-агентство полного цикла STUDIO NAME
                       </h1>
                       <h2 className="title">
                           Сайты под ключ и <span className='blue'>[web. <span className='white'>с</span>]</span>
                       </h2>
                       <button className="consultation">
                           Получить консультацию
                       </button>
                       <div className="stacks">
                           <div className="stack programLang">
                               <div className="stackItem">
                                   <div className="stackText">Python</div>
                               </div>
                               <div className="stackItem stackItemActive">
                                   <div className="stackText">JavaScript</div>
                               </div>
                               <div className="stackItem">
                                   <div className="stackText">Node</div>
                               </div>
                           </div>
                           <div className="stack frameworks">
                               <div className="stackItem stackItemActive">
                                   <div className="stackText">Django</div>
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
                                   <div className="stackText">Tilda</div>
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