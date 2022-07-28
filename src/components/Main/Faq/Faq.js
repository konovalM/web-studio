import React, {useState} from 'react';
import styled from "styled-components";
import bg from '../../../images/bg.png'
import tree from '../../../images/tree.svg'
import mobileTree from '../../../images/treeMobile.svg'
import blueBottomArrow from '../../../images/blueBottomArrow.svg'
import blueTopArrow from '../../../images/blueTopArrow.svg'
import crossesMobile from "../../../images/crossesMobile.jpg";
import crosses from "../../../images/crosses.jpg";
import Dash from "../../common/Dash/Dash";
import {FaqTag} from "./Faq.styles";
import {BlueBottomArrow} from "../../../icons/components/BlueBottomArrow";



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
                <Dash color={'#000000'} countBefore={5} countAfter={2} top={'0px'}/>
                <h2 className="title" data-aos='fade-down'>F<span className='blue'>{`{`}</span>A<span className='blue'>{`}`}</span>Q</h2>
                <div className="description" data-aos='fade-down'>
                    Если вы не нашли ответа на свой вопрос, напишите нам и мы ответим в течение 10 минут.
                </div>
                <div className="wrapper">
                    <div className="gridWrapper">
                            {
                                questions.map((obj, i) => {
                                    return (
                                        <div className="accordionWrapper" key={i} data-aos={i % 2 ? 'fade-right' : 'fade-left'}>
                                            <div className="question" >
                                                <p className={'questionText'} onClick={() => toggleActive(i)}>
                                                    {obj.question}
                                                </p>
                                                <div className={'arrow'} onClick={() => toggleActive(i)}>
                                                    <BlueBottomArrow className={answers[i] ? "svg rotate" : 'svg'}/>
                                                </div>
                                            </div>
                                            <div className={answers[i] ? 'answer answerActive' : 'answer'}>{obj.answer}</div>
                                        </div>
                                    )
                                })
                            }
                    </div>
                    <div className="tree">
                        <picture>
                            <source srcSet={mobileTree} media="(max-width: 700px)" />
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