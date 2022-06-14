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
                            Android приложения
                        </h3>
                        <div className={styles.price}>
                            от 500 000 руб.
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Гарантия 3 месяца</p>
                                <p className={styles.option}>Поддержка и доработка</p>
                                <p className={styles.option}>Бесплатная правка багов</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Загрузка в Google play</p>
                                <p className={styles.option}>Аналитика рынка</p>
                                <p className={styles.option}>Межплатформенная интеграция</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridElement + ' ' + styles.blue}>
                        <h3 className={styles.subtitle}>
                            исправление репутации
                        </h3>
                        <div className={styles.price}>
                            от 70 000 руб.
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Гарантия 3 месяца</p>
                                <p className={styles.option}>Поддержка и доработка</p>
                                <p className={styles.option}>Бесплатная правка багов</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Загрузка в Google play</p>
                                <p className={styles.option}>Аналитика рынка</p>
                                <p className={styles.option}>Межплатформенная интеграция</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridElement + ' ' + styles.blue}>
                        <h3 className={styles.subtitle}>
                            маркетинг под ключ
                        </h3>
                        <div className={styles.price}>
                            от 120 000 руб.
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Гарантия 3 месяца</p>
                                <p className={styles.option}>Поддержка и доработка</p>
                                <p className={styles.option}>Бесплатная правка багов</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Загрузка в Google play</p>
                                <p className={styles.option}>Аналитика рынка</p>
                                <p className={styles.option}>Межплатформенная интеграция</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prices;