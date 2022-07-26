import React from 'react';
import star from '../../../images/star.svg'
import Dash from "../../common/Dash/Dash";
import {AnimateWrapper} from "../../../animations/AnimateWrapper";
import {Element} from 'react-scroll'
import {ReasonsTag} from "./Reasons.styles";



const Reasons = () => {
    return (
        <ReasonsTag>
            <Element name='main-second'>
                <div className="container">
                    <Dash color={'#ffffff'} countBefore={1} countAfter={6} top={'0px'}/>
                    <div className="content">
                        <h2 className="title" data-aos='fade-down'>Почему <span className='blue blueSpan'>{`{`}</span><span
                            className='white'>мы</span><span className='blue blueSpan'>{`}`}</span></h2>
                        <div className="item">
                            <AnimateWrapper animate='fade-left'>
                                <h4 className="subtitle" data-aos='fade-up'>Никаких операторов по продажам</h4>
                                <div className="text" data-aos='fade-down'>Все сотрудники и менеджеры проектов имеют профильное образование в
                                    сайтостроении. Вам не придется общаться с “продавцами утюгов”.
                                </div>
                            </AnimateWrapper>
                        </div>
                        <div className="item">
                            <h4 className="subtitle" data-aos='fade-up'>Надежнее фриланса</h4>
                            <div className="text" data-aos='fade-down'>Больше половины клиентов фрилансеров получают неработающие сайты, либо
                                платят мошенникам. С нами вы забудете про эти проблемы.
                            </div>
                        </div>
                        <div className="item">
                            <h4 className="subtitle" data-aos='fade-up'>Приведем клиентов</h4>
                            <div className="text" data-aos='fade-down'>Если сайт не приносит прибыли - цена ему “ноль”. Настраиваем рекламу и
                                приводим реальных заказчиков с деньгами.
                            </div>
                        </div>
                        <div className="item">
                            <h4 className="subtitle" data-aos='fade-up'>Анализируем конкурентов</h4>
                            <div className="text" data-aos='fade-down'>Разработчики-любители сдают вместо сайтов красивые картинки. Мы сперва
                                изучаем вашу нишу и делаем по-настоящему продающий сайт.
                            </div>
                        </div>
                    </div>
                    <div className="circle" data-aos='circle' data-aos-anchor=".star">
                        <img src={star} alt="star" className='star' data-aos='turn'/>
                        <div className="first advantage" data-aos='fade-from-circle-first'>
                            <span className='blackW'>5+</span><span className='blue'> [<span
                            className='white'>..</span>]</span>
                        </div>
                        <div className="second advantage" data-aos='fade-from-circle-second'>
                            <span className='blackW'>200+</span><span className="blue"> ></span><span
                            className="white">></span>
                        </div>
                        <div className="third advantage" data-aos='fade-from-circle-third'>
                            <span className='blackW'>12+</span><span className="blue"> //</span><span
                            className="white">#</span>
                        </div>
                    </div>
                </div>

            </Element>
        </ReasonsTag>
    );
};

export default Reasons;