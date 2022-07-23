import React from 'react';
import styles from './Includes.module.css'
import cn from "classnames";
import speed from "../../../images/systemsPage/speed.svg";
import columns from "../../../images/systemsPage/columns.svg";
import noLimits from "../../../images/systemsPage/noLimits.svg";
import noLimitsTablet from "../../../images/systemsPage/noLimitsTablet.svg";
import { Element } from 'react-scroll'


const Includes = () => {
    return (
        <section className={styles.includes}>
            <Element name='systems-second'>
                <div className="container">
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>
                            Что включает
                        </h2>
                        <p className={styles.descr}>
                            Если ни одна из имеющихся систем управления не удовлетворяет вашим требованиям, то оптимальным решением станет написание своей.
                        </p>
                        <div className={styles.gridWrapper}>
                            <div className={cn(styles.gridItem, styles.white)}>
                                <h3 className={cn(styles.subtitle, styles.subtitleBlack)}>нет ограничений</h3>
                                <p className={cn(styles.gridDescr, styles.gridDescrLong,styles.gridDescrBlack)}>
                                    Стандартные системы управления ограничены своим функционалом. Самописные ограничений не имеют.
                                </p>
                                <picture>
                                    <source srcSet={noLimits} media="(max-width: 725px)"/>
                                    <source srcSet={noLimitsTablet} media="(max-width: 991px)"/>
                                    <img src={noLimits} alt="noLimits" className={styles.noLimits}/>
                                </picture>

                            </div>
                            <div className={cn(styles.gridItem, styles.white)}>
                                <h3 className={cn(styles.subtitle, styles.subtitleBlack)}>скорость работы</h3>
                                <p className={cn(styles.gridDescr, styles.gridDescrShort,styles.gridDescrBlack)}>
                                    Сайт работает гораздо быстрее за счет отсутствия ненужного функционала.
                                </p>
                                <img src={speed} alt="speed" className={styles.speed}/>
                            </div>
                            <div className={cn(styles.gridItem, styles.blue)}>
                                <h3 className={cn(styles.subtitle, styles.subtitleWhite)}>масштабируемость</h3>
                                <p className={cn(styles.gridDescr, styles.gridDescrWhite, styles.gridDescrMiddle)}>
                                    Легко добавлять новые модули и дорабатывать имеющийся функционал.
                                </p>
                                <img src={columns} alt="columns" className={styles.columns}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Includes;