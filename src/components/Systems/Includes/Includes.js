import React from 'react';
import styles from './Includes.module.css'
import cn from "classnames";
import speed from "../../../images/systemsPage/speed.svg";
import columns from "../../../images/systemsPage/columns.svg";
import noLimits from "../../../images/systemsPage/noLimits.svg";



const Includes = () => {
    return (
        <section className={styles.includes}>
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
                            <img src={noLimits} alt="noLimits" className={styles.noLimits}/>
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
        </section>
    );
};

export default Includes;