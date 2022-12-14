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
                            Системы управления
                        </h3>
                        <div className={styles.price}>
                            от 630 $
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Автоматические продажи</p>
                                <p className={styles.option}>Онлайн-калькуляторы</p>
                                <p className={styles.option}>Базы данных продаж</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Мульти-администрирование</p>
                                <p className={styles.option}>Онлайн оплата</p>
                                <p className={styles.option}>Встроенная аналитика</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridElement + ' ' + styles.blue}>
                        <h3 className={styles.subtitle}>
                            крупные сервисы
                        </h3>
                        <div className={styles.price}>
                            от 1300 $
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Системы бух. учета</p>
                                <p className={styles.option}>Маркетплейсы</p>
                                <p className={styles.option}>Торговые биржи</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Системы ведения проектов</p>
                                <p className={styles.option}>Фриланс биржи</p>
                                <p className={styles.option}>Системы управления персоналом</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prices;