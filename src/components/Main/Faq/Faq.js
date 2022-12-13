import React, {useState} from 'react';
import tree from '../../../images/tree.svg'
import mobileTree from '../../../images/treeMobile.svg'
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
        question: 'Как происходит оплата работы?',
        answer: 'Вы платите за работу поэтапно. Сперва незначительный аванс, после чего мы показываем вам выполненные этапы, за каждый из которых вы вносите следующий платеж.'
    },
    {
        question: 'С чего начинается ваша работа?',
        answer: 'Перед началом создания сайта мы изучаем вашу нишу и конкурентов. На основе этого анализа составляем техническое задание, в котором расписываем наиболее удачную структуру сайта.'
    },
    {
        question: 'Предоставляете скидки?',
        answer: 'Мы можем оптимизировать перечень работ и за счет удаления трудозатратных и необязательных этапов снизить общую цену проекта. Также мы можем дать вам рассрочку на оплату.'
    },
    {
        question: 'А если сайт сломается после полной оплаты?',
        answer: 'В течение месяца мы гарантируем вам бесплатные техническую поддержку и исправление выявленных ошибок. Мы остаемся на связи 7 дней в неделю и никогда не пропадаем.'
    },
    {
        question: 'Почему вы берете дороже фриланса?',
        answer: 'Мы никогда не отговариваем заказчиков от работы с фрилансом, но всегда предупреждаем, что более половины фрилансеров сдают нерабочие сайты, пропадают со связи, а также вы рискуете нарваться на мошенников. С нами вы защищены договором и нашей репутацией.'
    },
    {
        question: 'Можете поменять нам систему управления сайтом?',
        answer: 'Да, но вы должны учитывать, что при смене системы управления может потребоваться доработка сайта под нее. Также некоторые системы управления не предусматривают простого переноса сайта.'
    },
    {
        question: 'Делаете сайты на шаблонах?',
        answer: 'Занимаемся этим в исключительно редких случаях. Шаблоны зачастую очень сильно тормозят сайт, либо сделаны с грубыми ошибками, не имеют возможности гибкой смены структуры сайта.'
    },
    {
        question: 'Доделаете работу за другим разработчиком?',
        answer: 'Если код вашего разработчика пригоден для работы и не нашпигован ошибками, то мы готовы этим заняться.'
    },
    {
        question: 'Занимаетесь техподдержкой?',
        answer: 'Да, после сдачи готовы заняться полным продвижением вашего бизнеса, а также технической поддержкой сайта, его доработкой и масштабированием.'
    }
]


export default Faq;