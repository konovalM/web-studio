import React from 'react';
import styled from "styled-components";
import bg from '../images/bg.png'
import tree from '../images/tree.svg'
import blueBottomArrow from '../images/blueBottomArrow.svg'
import blueTopArrow from '../images/blueTopArrow.svg'

const FaqTag = styled.section`
  padding: 84px 0 70px;
  background-color: #fff;
  background-image: url(${bg});
  background-position: center -100px;
  background-repeat: repeat;
  min-height: 900px;
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
    grid-template-rows: minmax(0, auto);
    grid-column-gap: 15px;
    z-index: 100;
    position: relative;
  }
  .gridLeft{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    padding-right: 23px;
  }
  .accordionWrapper{
    margin-bottom: 60px;
  }
  .question{
    font-weight: 900;
    font-size: 21px;
    line-height: 25px;
    color: #1A1A1A;
    position: relative;
  }
  .question::before{
    content: '';
    position: absolute;
    width: 13px;
    height: 13px;
    background-color: #1E4FCD;
    border-radius: 100%;
    right: -38px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
  }
  .questionLeft::before{
    right: -38px;
  }
  .questionRight::before{
    left: -36px;
  }
  .question::after{
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 100%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 50;
  }
  .questionLeft::after{
    right: -40px;
  }
  .questionRight::after{
    left: -38px;
  }
  .questionInner{
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
  .questionInner::before{
    content: '';
    width: 20px;
    height: 12px;
    background: url(${blueBottomArrow});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .questionInnerLeft::before{
    left: -30px;
    transform: translateY(-50%);
  }
  .questionInnerRight::before{
    right: -30px;
    transform: translateY(-50%);
  }
  .questionInner::after{
    content: '';
    width: 24px;
    height: 2px;
    background-color: #1A1A1A;
    position: absolute;
    right: -31px;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 1px 0 1px #000;
  }
  .questionInnerLeft::after{
    right: -31px;
  }
  .questionInnerRight::after{
    left: -31px;
  }
  .answer{
    font-size: 18px;
    color: #1A1A1A;
    max-height: 0;
    overflow: hidden;
    transition: all 1s;
    transition-timing-function: cubic-bezier(.25, .1, .25, 1);
  }
  .answerActive{
    height: auto;
    max-height: none;
    margin-top: 5px;
  }
  // right part of tree
  .gridRight{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding-left: 23px;
    margin-top: 47px;
  }
`

const Faq = () => {
    return (
        <FaqTag>
            <div className="container">
                <h2 className="title">F<span className='blue'>{`{`}</span>A<span className='blue'>{`}`}</span>Q</h2>
                <div className="description">
                    Если вы не нашли ответа на свой вопрос, напишите нам и мы ответим в течение 10 минут.
                </div>
                <div className="wrapper">
                    <div className="gridWrapper">
                        <div className="gridLeft">
                            <div className="accordionWrapper accordionWrapperLeft">
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
                            </div>
                        </div>
                        <div className="gridRight">
                            <div className="accordionWrapper accordionWrapperRight">
                                <div className="question questionRight">
                                    <p className="questionInner questionInnerRight">
                                        Короткий вопрос
                                    </p>
                                </div>
                                <div className="answer answerRight">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea eum iste iure quasi sapiente sequi ut! Amet distinctio.</div>
                            </div>
                            <div className="accordionWrapper accordionWrapperRight">
                                <div className="question questionRight">
                                    <p className="questionInner questionInnerRight">
                                        Очередной вопрос очень длинный
                                    </p>
                                </div>
                                <div className="answer answerRight">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea eum iste iure quasi sapiente sequi ut! Amet distinctio.</div>
                            </div>
                            <div className="accordionWrapper accordionWrapperRight">
                                <div className="question questionRight">
                                    <p className="questionInner questionInnerRight">
                                        Очень очень очень длинный вопрос раз два три
                                    </p>
                                </div>
                                <div className="answer answerRight">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea eum iste iure quasi sapiente sequi ut! Amet distinctio.</div>
                            </div>
                            <div className="accordionWrapper accordionWrapperRight">
                                <div className="question questionRight">
                                    <p className="questionInner questionInnerRight">
                                        Короткий вопрос
                                    </p>
                                </div>
                                <div className="answer answerRight">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur ea eum iste iure quasi sapiente sequi ut! Amet distinctio.</div>
                            </div>

                        </div>
                    </div>
                    <div className="tree">
                        <img src={tree} alt="tree of questions" className="treeImg"/>
                    </div>
                </div>
            </div>
        </FaqTag>
    );
};

export default Faq;