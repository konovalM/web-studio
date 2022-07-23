import React from 'react';
import styles from './Includes.module.css'
import cn from "classnames";
import smile from "../../../images/marketing/smile.svg";
import art from "../../../images/marketing/art.svg";
import like from "../../../images/marketing/like.svg";
import pazzles from "../../../images/marketing/pazzles.svg";
import { Element } from 'react-scroll'

const Includes = () => {
    return (
        <section className={styles.includes}>
            <Element name='marketing-second'>
                <div className="container">
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>
                            Что включает
                        </h2>
                        <p className={styles.descr}>
                            SEO оптимизированный сайт приводит клиентов не сразу, однако результат окупает себя в долгосрочной перспективе.                    </p>
                        <div className={styles.gridWrapper}>

                            <div className={cn(styles.gridItem, styles.blue)}>
                                <h3 className={cn(styles.subtitle, styles.subtitleWhite)}>Формирование репутации</h3>
                                <p className={cn(styles.gridDescr, styles.gridDescrWhite)}>
                                    Исправление негативной репутации, создание положительного образа.
                                </p>
                                <img src={smile} alt="smile" className={styles.smile}/>
                            </div>
                            <div className={cn(styles.gridItem, styles.white)}>
                                <h3 className={cn(styles.subtitle, styles.subtitleBlack)}>Брендинг и фирменный стиль</h3>
                                <p className={cn(styles.gridDescr, styles.gridDescrShort, styles.gridDescrBlack)}>
                                    Формирование корпоративного стиля и имиджа.
                                </p>
                                <img src={art} alt="art" className={styles.art}/>
                            </div>
                            <div className={cn(styles.gridItem, styles.white)}>
                                <h3 className={cn(styles.subtitle, styles.subtitleBlack)}>работа с отзывами</h3>
                                <p className={cn(styles.gridDescr,  styles.gridDescrBlack)}>
                                    Настраивание обратной связи с аудиторией и повышение лояльности.
                                </p>
                                <img src={like} alt="like" className={styles.like}/>
                            </div>
                            <div className={cn(styles.gridItem, styles.blue)}>
                                <h3 className={cn(styles.subtitle, styles.subtitleWhite)}>Маркетинговая стратегия</h3>
                                <p className={cn(styles.gridDescr, styles.gridDescrWhite, styles.gridDescrLast)}>
                                    Глубокий анализ ниши и выбор методики продвижения фирмы.
                                </p>
                                <img src={pazzles} alt="pazzles" className={styles.pazzles}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Includes;