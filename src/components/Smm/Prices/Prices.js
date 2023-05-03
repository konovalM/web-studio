import React from 'react';
import styles from './Prices.module.css'


const Prices = () => {
    return (
        <section className={styles.prices}>
            <div className="container">
                <h2 className={styles.title}>
                    Цены
                </h2>
                <div className={styles.gridWrapper}>
                    <div className={styles.gridElement + ' ' + styles.black}>
                        <h3 className={styles.subtitle}>
                            facebook
                        </h3>
                        <div className={styles.price}>
                            от 20 000 руб.
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Изучение ниши</p>
                                <p className={styles.option}>Составление объявлений</p>
                                <p className={styles.option}>Настройка аккаунта</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Коррекция ставок рекламы</p>
                                <p className={styles.option}>Ведение аккаунта</p>
                                <p className={styles.option}>Отчет и прогноз продаж</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridElement + ' ' + styles.blue}>
                        <h3 className={styles.subtitle}>
                            VK
                        </h3>
                        <div className={styles.price}>
                            от 20 000 руб.
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Изучение ниши</p>
                                <p className={styles.option}>Составление объявлений</p>
                                <p className={styles.option}>Настройка аккаунта</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Коррекция ставок рекламы</p>
                                <p className={styles.option}>Ведение аккаунта</p>
                                <p className={styles.option}>Отчет и прогноз продаж</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridElement + ' ' + styles.blue}>
                        <h3 className={styles.subtitle}>
                            instagram
                        </h3>
                        <div className={styles.price}>
                            от 25 000 руб.
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Изучение ниши</p>
                                <p className={styles.option}>Составление объявлений</p>
                                <p className={styles.option}>Настройка аккаунта</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Коррекция ставок рекламы</p>
                                <p className={styles.option}>Ведение аккаунта</p>
                                <p className={styles.option}>Отчет и прогноз продаж</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridElement + ' ' + styles.black}>
                        <h3 className={styles.subtitle}>
                            tik tok
                        </h3>
                        <div className={styles.price}>
                            от 20 000 руб.
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Изучение ниши</p>
                                <p className={styles.option}>Составление объявлений</p>
                                <p className={styles.option}>Настройка аккаунта</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Коррекция ставок рекламы</p>
                                <p className={styles.option}>Ведение аккаунта</p>
                                <p className={styles.option}>Отчет и прогноз продаж</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prices;