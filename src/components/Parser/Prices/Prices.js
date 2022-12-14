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
                            разработка парсера
                        </h3>
                        <div className={styles.price}>
                            от 800 $
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Подгрузка товаров на сайт</p>
                                <p className={styles.option}>Синхронизация бухгалтерии</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Копирование цен</p>
                                <p className={styles.option}>Круглосуточный апдейт</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridElement + ' ' + styles.blue}>
                        <h3 className={styles.subtitle}>
                            подключение API
                        </h3>
                        <div className={styles.price}>
                            от 320 $
                        </div>
                        <div className={styles.flexWrapper}>
                            <div className={styles.leftOptions}>
                                <p className={styles.option}>Подгрузка товаров на сайт</p>
                                <p className={styles.option}>Синхронизация бухгалтерии</p>
                            </div>
                            <div className={styles.rightOptions}>
                                <p className={styles.option}>Копирование цен</p>
                                <p className={styles.option}>Круглосуточный апдейт</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prices;