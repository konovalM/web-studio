import React from 'react';
import styles from './Prices.module.css'
import google from '../../../images/contextPage/google.svg'
import yandex from '../../../images/contextPage/yandex.svg'

const Prices = () => {
    return (
        <section className={styles.prices}>
            <div className="container">
                <h2 className={styles.title}>
                    Цены
                </h2>
                <div className={styles.gridWrapper}>
                    <div className={styles.gridElement + ' ' + styles.black}>
                        <img src={google} alt="google" className={styles.google}/>
                        <h3 className={styles.subtitle}>
                            Google adwords
                        </h3>
                        <div className={styles.price}>
                            320 $
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Анализ конкурентов</p>
                                <p className={styles.option}>Настройка статистики</p>
                                <p className={styles.option}>Оптимизация расходов</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Подбор ключевых слов</p>
                                <p className={styles.option}>Определение болей клиентов</p>
                                <p className={styles.option}>Отчет и прогноз прибыли</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridElement + ' ' + styles.blue}>
                        <img src={yandex} alt="yandex" className={styles.yandex}/>
                        <h3 className={styles.subtitle}>
                            яндекс. директ
                        </h3>
                        <div className={styles.price}>
                            320 $
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Анализ конкурентов</p>
                                <p className={styles.option}>Настройка статистики</p>
                                <p className={styles.option}>Оптимизация расходов</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Подбор ключевых слов</p>
                                <p className={styles.option}>Определение болей клиентов</p>
                                <p className={styles.option}>Отчет и прогноз прибыли</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prices;