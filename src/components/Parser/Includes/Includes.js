import React from 'react';
import styles from './Includes.module.css'
import cn from "classnames";
import input from "../../../images/parserPage/input.svg";
import pig from "../../../images/parserPage/pig.svg";
import calc from "../../../images/parserPage/calc.svg";



const Includes = () => {
    return (
        <section className={styles.includes}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        Что включает
                    </h2>
                    <p className={styles.descr}>
                        Автоматизация наполнения сайта без участия ручного труда. Синхронизация с базой данных.
                    </p>
                    <div className={styles.gridWrapper}>
                        <div className={cn(styles.gridItem, styles.white)}>
                            <h3 className={cn(styles.subtitle, styles.subtitleBlack)}>автоматическое наполнение</h3>
                            <p className={cn(styles.gridDescr, styles.gridDescrLong,styles.gridDescrBlack)}>
                                Не надо следить за сайтом-донором. Обновление каталога автоматическое.
                            </p>
                            <img src={input} alt="input" className={styles.input}/>
                        </div>
                        <div className={cn(styles.gridItem, styles.blue)}>
                            <h3 className={cn(styles.subtitle, styles.subtitleWhite)}>экономия на сотрудниках</h3>
                            <p className={cn(styles.gridDescr, styles.gridDescrWhite)}>
                                Больше не нужно платить зарплату человеку, который наполнял сайт.
                            </p>
                            <img src={pig} alt="pig" className={styles.pig}/>
                        </div>
                        <div className={cn(styles.gridItem, styles.white)}>
                            <h3 className={cn(styles.subtitle, styles.subtitleBlack)}>синхронизация с бухгалтерией</h3>
                            <p className={cn(styles.gridDescr, styles.gridDescrShort,styles.gridDescrBlack)}>
                                Вся информация о продажах поступает в вашу бухгалтерию автоматически.
                            </p>
                            <img src={calc} alt="calc" className={styles.calc}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Includes;