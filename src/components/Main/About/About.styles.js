import styled from "styled-components";
import bg from "../../../images/bg.png";
import developerBg from "../../../images/developer.jpg";

export const AboutTag = styled.section`
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
  .flexWrapper{
      display: flex;
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
    -webkit-text-stroke: 1px rgba(157,157,157,.3);
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
  
  
  //ADAPTIVE
  
  @media(max-width: 1331px){
    .gridWrapper{
      grid-template-columns: repeat(auto-fill, 270px);
      grid-gap: 20px;
    }
    .absolute{
      right: -22px;
    }
    .absolute::before{
      font-size: 220px;
      top: -5px;
      left: -124px;
    }
    .absolute::after{
      font-size: 220px;
      bottom: 21px;
      left: -105px;
    }
    .word{
      font-size: 120px;
    }
  }

  @media(max-width: 1174px){
    padding: 70px 0 87px;
    .title{
      font-size: 80px;
      line-height: 96px;
      margin-bottom: 5px;
    }
    .absolute{
      display: none;
    }
    .gridElem{
      background-position: top center;
    }
    .gridWrapper{
      grid-template-columns: repeat(auto-fit, minmax(310px, 356px));
      justify-content: center;
    }
    .gridElem:nth-child(n+3){
      grid-row-start: unset;
    }
    .description{
      font-size: 18px;
      line-height: 150%;
      max-width: 550px;
      margin-bottom: 39px;
    }
  }
  @media(max-width: 1000px){
    .description{
      max-width: 442px;
    }
  }
  @media(max-width: 773px){
    .gridWrapper{
      grid-template-columns: 359px 359px;
    }
  }
  @media(max-width: 767px){
    padding: 52px 0 82px;
    .title{
      font-size: 65px;
      line-height: 100%;
      margin-bottom: 18px;
    }
    .description{
      margin: 0 0 29px 0;
      font-size: 16px;
      line-height: 150%;
    }
    .gridWrapper{
      padding: 0 5px;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      justify-content: center;
    }
    .gridElem{
      background: none;
      display: flex;
      
    }
    .name{
      margin: 0;
    }
    .nameWrapper{
      background: url(${developerBg})top center/cover no-repeat;
      height: calc(100% - 40px);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .profile{
      height: 40px;
      margin: 0;
      background-color: #1a1a1a;
    }
  }
  @media (max-width: 580px){
      .name{
          font-size: 16px;
          line-height: 16px;
      }
  }
  @media(max-width: 555px){
    .title{
      font-size: 50px;
      line-height: 100%;
    }
    .description{
      font-weight: 400;
      font-size: 14px;
      max-width: 290px;
    }
    .name{
      height: 32px;
    }
    .gridWrapper{
      padding: 0 5px;
      
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      justify-content: center;
    }
  }
    @media (max-width: 510px){
        .name{
            font-size: 12px;
            line-height: 14px;
        }
    }
  @media(max-width: 468px){
    .gridWrapper{
      padding: 0 5px;
      grid-template-rows: 200px;
      grid-auto-rows: 200px;
      grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
      justify-content: center;
    }
    .profile{
      font-size: 15px;
      line-height: 17px;
      height: 37px;
      padding-left: 6px;
    }
    .name{
      height: 32px;
      padding-left: 6px;
    }
    .nameText{
      font-size: 12px;
      line-height: 14px;
      max-width: 55px;
      display: flex;
      justify-content: center;
    }
  }
  @media(max-width: 420px){
    .profile{
      font-size: 14px;
      line-height: 16px;
    }
  }
  @media(max-width: 330px){
    .gridWrapper{
      grid-template-rows: 154px;
      grid-auto-rows: 154px;
    }
  }
`