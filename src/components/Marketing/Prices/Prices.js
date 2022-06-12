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
                            фирменный стиль
                        </h3>
                        <div className={styles.price}>
                            от 50 000 руб.
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Создание логотипа</p>
                                <p className={styles.option}>Дизайн продукции</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Корпоративная айдентика</p>
                                <p className={styles.option}>Дизайн рекламных носителей </p>
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
                                <p className={styles.option}>Работа с отзывами</p>
                                <p className={styles.option}>Работа со СМИ</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Внешнее SEO</p>
                                <p className={styles.option}>Коррекция сайта</p>
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
                                <p className={styles.option}>Глубокий анализ ниши</p>
                                <p className={styles.option}>Брендинг</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Составление точек роста</p>
                                <p className={styles.option}>Работа с репутацией</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridElement + ' ' + styles.black}>
                        <h3 className={styles.subtitle}>
                            маркетинг соцсетей
                        </h3>
                        <div className={styles.price}>
                            от 80 000 руб.
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Ведение аккаунтов</p>
                                <p className={styles.option}>Отрисовка дизайна</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Работа с обратной связью</p>
                                <p className={styles.option}>Рекламные кампании</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prices;