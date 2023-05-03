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
                            landing page
                        </h3>
                        <div className={styles.price}>
                            от 20 000 руб.
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Анализ конкурентов</p>
                                <p className={styles.option}>Покупка внешних ссылок</p>
                                <p className={styles.option}>Анализ сайта</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Подбор ключевых слов</p>
                                <p className={styles.option}>Коррекция текстов сайта</p>
                                <p className={styles.option}>Отчет и прогноз позиций</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridElement + ' ' + styles.blue}>
                        <h3 className={styles.subtitle}>
                            online магазин
                        </h3>
                        <div className={styles.price}>
                            от 40 000 руб.
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Анализ конкурентов</p>
                                <p className={styles.option}>Покупка внешних ссылок</p>
                                <p className={styles.option}>Анализ сайта</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Подбор ключевых слов</p>
                                <p className={styles.option}>Коррекция текстов сайта</p>
                                <p className={styles.option}>Отчет и прогноз позиций</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridElement + ' ' + styles.blue}>
                        <h3 className={styles.subtitle}>
                            <span className={styles.small}>корпоративный</span> сайт
                        </h3>
                        <div className={styles.price}>
                            от 30 000 руб.
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Анализ конкурентов</p>
                                <p className={styles.option}>Покупка внешних ссылок</p>
                                <p className={styles.option}>Анализ сайта</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Подбор ключевых слов</p>
                                <p className={styles.option}>Коррекция текстов сайта</p>
                                <p className={styles.option}>Отчет и прогноз позиций</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridElement + ' ' + styles.black}>
                        <h3 className={styles.subtitle}>
                            крупный сервис
                        </h3>
                        <div className={styles.price}>
                            от 50 000 руб.
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Анализ конкурентов</p>
                                <p className={styles.option}>Покупка внешних ссылок</p>
                                <p className={styles.option}>Анализ сайта</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Подбор ключевых слов</p>
                                <p className={styles.option}>Коррекция текстов сайта</p>
                                <p className={styles.option}>Отчет и прогноз позиций</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prices;