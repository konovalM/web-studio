import React, {useState} from 'react';
import styled from "styled-components";
import bg from '../images/bg.png'
import tree from '../images/tree.svg'
import mobileTree from '../images/treeMobile.svg'
import blueBottomArrow from '../images/blueBottomArrow.svg'
import blueTopArrow from '../images/blueTopArrow.svg'
import crossesMobile from "../images/crossesMobile.jpg";
import crosses from "../images/crosses.jpg";

const FaqTag = styled.section`
  padding: 84px 0 70px;
  background-color: #fff;
  background-image: url(${bg});
  background-position: center -100px;
  background-repeat: repeat;
  min-height: 950px;
  .title{
    font-size: 88px;
    line-height: 106px;
    color: #1A1A1A;
    margin-bottom: 8px;
  }
  .blue{
    color: #1E4FCD;
  }
  .description{
    max-width: 490px;
    font-size: 18px;
    color: #1A1A1A;
    margin-bottom: 64px;
  }
  .wrapper{
    position: relative;
  }
  .tree{
    position: absolute;
    left: 50%;
    top: -100px;
    transform: translateX(calc(-50% - 2px));
  }
  .gridWrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(9, minmax(46px, auto));
    grid-column-gap: 13px;
    z-index: 100;
    position: relative;
  }
  .question{
    margin-bottom: 5px;
  }
  .questionText{
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
  .accordionWrapper{
    position: relative;
  }
  .questionText::before{
    content: '';
    position: absolute;
    width: 24px;
    height: 1px;
    background-color: #1A1A1A;
    top: 50%;
    transform: translateY(-50%);
  }
  .questionText::after{
    content: '';
    position: absolute;
    width: 20px;
    height: 13px;
    top: 5px;
    background: url(${blueBottomArrow});
    transition: transform 0.3s ease 0s;
  }
  .accordionWrapper:nth-child(odd){
    
    grid-column: 1 / 2;
    margin-right: 25px;
    .answer{
      text-align: right;
    }
    .questionText{
      padding-left: 30px;
    }
    .question{
      text-align: right;
    }
    .questionText::before{
      right: -31px;
    }
    .questionText::after{
      left: 0;
    }
  }
  .accordionWrapper::after{
    content: '';
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 100%;
    background-color: #1E4FCD;
    z-index: 50;
  }
  .accordionWrapper::before{
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: #fff;
    z-index: 50;
  }
  .rotate::after{
    transform: translateY(-10%) rotate(180deg);
  }
  .accordionWrapper:nth-child(odd)::before{
    right: -41px;
    top: 4px;
  }
  .accordionWrapper:nth-child(odd)::after{
    right: -39px;
    top: 6px;
  }
  .accordionWrapper:nth-child(even)::before{
    content: '';
    left: -39px;
    top: 4px;
    z-index: 50;
  }
  .accordionWrapper:nth-child(even)::after{
    left: -37px;
    top: 6px;
  }
  .accordionWrapper:nth-child(even){
    grid-column: 2 / 3;
    margin-left: 25px;
    .questionText{
      display: inline-block;
      padding-right: 30px;
    }
    .questionText::before{
      left: -31px;
    }
    .questionText::after{
      right: 0;
    }
  }
  .accordionWrapper:nth-child(1){
    grid-row: 1 / 2;
  }
  .accordionWrapper:nth-child(2){
    grid-row: 2 / 3;
  }
  .accordionWrapper:nth-child(3){
    grid-row: 3 / 4;
  }
  .accordionWrapper:nth-child(4){
    grid-row: 4 / 5;
  }
  .accordionWrapper:nth-child(5){
    grid-row: 5 / 6;
  }
  .accordionWrapper:nth-child(6){
    grid-row: 6 / 7;
  }
  .accordionWrapper:nth-child(7){
    grid-row: 7 / 8;
  }
  .accordionWrapper:nth-child(8){
    grid-row: 8 / 9;
  }
  .accordionWrapper:nth-child(9){
    grid-row: 9 / 10;
  }
  .questionText{
    font-weight: 900;
    font-size: 21px;
    line-height: 25px;
    color: #1A1A1A;
  }
  .answer{
    font-size: 18px;
    color: #1A1A1A;
    max-height: 0;
    overflow: hidden;
    transition: all .5s;
    transition-timing-function: cubic-bezier(.25,.1,.25,1);
  }
  .answerActive{
    height: auto;
    max-height: none;
    margin-top: 5px;
  }
  
  //ADAPTIVE
  @media(max-width: 1145px){
    padding: 74px 0 80px;
    .title{
      font-size: 80px;
      line-height: 96px;
    }
    .questionText{
      font-size: 16px;
      line-height: 19px;
    }
    .answer{
      font-size: 16px;
      line-height: 150%;
    }
    .description{
      margin-bottom: 141px;
    }
    .questionText::after{
      top: 5px;
      content: '';
      position: absolute;
      width: 16px;
      height: 10px;
      background-image: url(${blueBottomArrow});
      background-size: 16px;
      background-repeat: no-repeat;
      transition: transform 0.3s ease 0s;
    }
  }
  @media(max-width: 920px){
    .accordionWrapper:nth-child(odd){
    }
  }
  //@media(max-width: 767px){
  @media(max-width: 856px){
    padding: 54px 0 80px;
    .accordionWrapper:nth-child(odd) {
      .questionText {
        padding: 0 0 0 0;
      }
      .answer{
        text-align: left;
      }
    }
    .accordionWrapper:nth-child(even) {
      .questionText {
        padding: 0 0 0 0;
      }
    }
    .title{
      font-size: 60px;
      line-height: 72px;
      margin-bottom: 25px;
    }
    .description{
      font-size: 14px;
      line-height: 150%;
    }
    .tree{
      left: 55px;
      top: -115px;
    }
    .gridWrapper{
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(9, minmax(46px, auto));
      grid-column-gap: 13px;
      z-index: 100;
      position: relative;
      margin-left: 12px;
    }
    .accordionWrapper:nth-child(odd) .question {
      text-align: left;
    }
    .accordionWrapper:nth-child(n){
      grid-column: 1;
    }
    .accordionWrapper:nth-child(odd) {
      margin-left: 25px;
    }
    .accordionWrapper:nth-child(even){
      .questionText::after{
        right: -24px;
        top: 3px;
      }
    }
    .accordionWrapper:nth-child(odd) .questionText {
      margin-left: 0;
    }
    .accordionWrapper:nth-child(odd){
      
      .questionText::after{
        content: '';
        position: absolute;
        width: 24px;
        height: 1px;
        background-color: #1A1A1A;
        top: 50%;
        transform: translateY(-50%);
      }
      .questionText::before{
        content: '';
        position: absolute;
        width: 16px;
        height: 10px;
        background-color: unset;
        top: 9px;
        background-image: url(${blueBottomArrow});
        background-size: 16px;
        background-repeat: no-repeat;
        transition: transform 0.3s ease 0s;
      }
      .questionText::before{
        right: -23px;
      }
      .questionText::after{
        left: -30px;
      }
    }
    .accordionWrapper:nth-child(odd)::after{
      left: -37px;
      top: 6px;
    }
    .accordionWrapper:nth-child(odd)::before{
      left: -39px;
      top: 4px;
    }
    .questionText{
      font-size: 14px;
      line-height: 16px;
    }
    .rotate::before{
      transform: translateY(-70%) rotate(180deg);
    }
    .answer{
      font-size: 14px;
      line-height: 150%;
    }
  }
`

const Faq = () => {
    const [answers, setAnswers] = useState([false, false, false, false, false, false, false, false, false])

    const toggleActive = (id) => {
        setAnswers(answers.map((property, i) => {
            return id === i ? !property : false
        }))
    }

    return (
        <FaqTag>
            <div className="container">
                <h2 className="title">F<span className='blue'>{`{`}</span>A<span className='blue'>{`}`}</span>Q</h2>
                <div className="description">
                    Если вы не нашли ответа на свой вопрос, напишите нам и мы ответим в течение 10 минут.
                </div>
                <div className="wrapper">
                    <div className="gridWrapper">
                            {
                                questions.map((obj, i) => {
                                    return (
                                        <div className="accordionWrapper" key={i}>
                                            <div className="question">
                                                <p className={answers[i] ? 'questionText rotate' : 'questionText'} onClick={() => toggleActive(i)}>
                                                    {obj.question}
                                                </p>
                                            </div>
                                            <div className={answers[i] ? 'answer answerActive' : 'answer'}>{obj.answer}</div>
                                        </div>
                                    )
                                })
                            }
                            {/*<div className="accordionWrapper accordionWrapperLeft">
                                <div className="question questionLeft">
                                    <p className="questionInner questionInnerLeft">
                                        Очень длинное название вопроса
                                    </p>
                                </div>
                                <div className="answer answerLeft">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea eum iste iure quasi sapiente sequi ut! Amet distinctio.</div>
                            </div>
                            <div className="accordionWrapper accordionWrapperLeft">

                                <div className="question questionLeft">
                                    <div className="questionInner questionInnerLeft">
                                        Еще один вопрос раздела
                                    </div>
                                </div>
                                <div className="answer answerLeft">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea eum iste iure quasi sapiente sequi ut! Amet distinctio.</div>
                            </div>
                            <div className="accordionWrapper accordionWrapperLeft">
                                <div className="question questionLeft">
                                    <p className="questionInner questionInnerLeft">
                                        Еще вопрос
                                    </p>
                                </div>
                                <div className="answer answerLeft">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea eum iste iure quasi sapiente sequi ut! Amet distinctio.</div>
                            </div>
                            <div className="accordionWrapper accordionWrapperLeft">
                                <div className="question questionLeft">
                                    <p className="questionInner questionInnerLeft">
                                        Еще один вопрос раздела
                                    </p>
                                </div>
                                <div className="answer answerLeft">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea eum iste iure quasi sapiente sequi ut! Amet distinctio.</div>
                            </div>
                            <div className="accordionWrapper accordionWrapperLeft">
                                <div className="question questionLeft">
                                    <p className="questionInner questionInnerLeft">
                                        Очередной вопрос очень длинный
                                    </p>
                                </div>
                                <div className="answer answerLeft">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea eum iste iure quasi sapiente sequi ut! Amet distinctio.</div>
                            </div>*/}
                    </div>
                    <div className="tree">
                        <picture>
                            {/*<source srcSet={mobileTree} media="(max-width: 767px)" />*/}
                            <source srcSet={mobileTree} media="(max-width: 856px)" />
                            <img src={tree} alt="tree of questions" className="treeImg"/>
                        </picture>
                    </div>
                </div>
            </div>
        </FaqTag>
    );
};

const questions = [
    {
        question: 'Очень длинное название вопроса',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea eum iste iure quasi sapiente sequi ut! Amet distinctio.'
    },
    {
        question: 'Короткий вопрос',
        answer: 'Эта услуга требует максимальной оперативности, поскольку часто хостинги хранят исходники не дольше нескольких дней. Однако, в некоторых случаях информацию можно восстановить даже после полного удаления сайта с хостинга через специализированные...'
    },
    {
        question: 'Очередной вопрос очень длинный',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea eum iste iure quasi sapiente sequi ut! Amet distinctio.'
    },
    {
        question: 'Очень очень очень длинный вопрос раз два три',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea eum iste iure quasi sapiente sequi ut! Amet distinctio.'
    },
    {
        question: 'Короткий вопрос',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea eum iste iure quasi sapiente sequi ut! Amet distinctio.'
    },
    {
        question: 'Еще один вопрос раздела',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea eum iste iure quasi sapiente sequi ut! Amet distinctio.'
    },
    {
        question: 'Еще вопрос',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea eum iste iure quasi sapiente sequi ut! Amet distinctio.'
    },
    {
        question: 'Еще один вопрос раздела',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea eum iste iure quasi sapiente sequi ut! Amet distinctio.'
    },
    {
        question: 'Очередной вопрос очень длинный',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea eum iste iure quasi sapiente sequi ut! Amet distinctio.'
    }
]


export default Faq;