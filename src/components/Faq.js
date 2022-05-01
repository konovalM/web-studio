import React, {useState} from 'react';
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
    .accordionWrapper:nth-child(1){
      height: 200px;
    }
    .accordionWrapper:nth-child(2){
      height: 92px;
    }
    .accordionWrapper:nth-child(3){
      height: 92px;
    }
    .accordionWrapper:nth-child(4){
      height: 92px;
    }
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
    transition: transform .3s;
  }
  .questionInnerLeft::before{
    left: -30px;
    transform: translateY(-50%);
  }
  .questionInnerRight::before{
    right: -30px;
    transform: translateY(-50%);
  }
  .rotate::before{
    transform: translateY(-50%) rotate(180deg);
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
    transition: all .5s;
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
    .accordionWrapper:nth-child(1){
      height: 200px;
    }
    .accordionWrapper:nth-child(2){
      height: 92px;
    }
    .accordionWrapper:nth-child(3){
      height: 92px;
    }
    .accordionWrapper:nth-child(4){
      height: 92px;
    }
  }
`

const Faq = () => {
    const [leftAnswers, setLeftAnswers] = useState([false, false, false, false, false])
    const [rightAnswers, setRightAnswers] = useState([false, false, false, false])
    const toggleActiveLeft = (id) => {
        setLeftAnswers(leftAnswers.map((property, i) => {
            return id === i ? !property : false
        }))
    }
    const toggleActiveRight = (id) => {
        setRightAnswers(rightAnswers.map((property, i) => {
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
                        <div className="gridLeft">
                            {
                                leftQuestions.map((obj, i) => {
                                    return (
                                        <div className="accordionWrapper accordionWrapperLeft" key={i}>
                                            <div className="question questionLeft">
                                                <p className={leftAnswers[i] ? 'questionInner questionInnerLeft rotate' : 'questionInner questionInnerLeft'} onClick={() => toggleActiveLeft(i)}>
                                                    {obj.question}
                                                </p>
                                            </div>
                                            <div className={leftAnswers[i] ? 'answer answerLeft answerActive' : 'answer answerLeft'}>{obj.answer}</div>
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
                        <div className="gridRight">
                            {
                                rightQuestions.map((obj, i) => {
                                    return(
                                        <div className="accordionWrapper accordionWrapperRight" key={i}>
                                            <div className="question questionRight">
                                                <p className={rightAnswers[i] ? 'questionInner questionInnerRight rotate' : 'questionInner questionInnerRight'} onClick={() => toggleActiveRight(i)}>
                                                    {obj.question}
                                                </p>
                                            </div>
                                            <div className={rightAnswers[i] ? 'answer answerRight answerActive' : 'answer answerRight'}>{obj.answer}</div>
                                        </div>
                                    )
                                })
                            }
                            {/*<div className="accordionWrapper accordionWrapperRight">
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
                            </div>*/}
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

const leftQuestions = [
    {
        question: 'Очень длинное название вопроса',
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

const rightQuestions = [
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
    }
]

export default Faq;