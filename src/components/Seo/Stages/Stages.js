import React from 'react';
import styles from "../../Context/Stages/Stages.module.css";

const Stages = () => {
    return (
        <section className={styles.stages}>
            <div className="container">
                <h2 className={styles.title}>
                    Этапы работы <span className={styles.blue}>;<span className={styles.black}>-</span>]</span>
                </h2>
                <p className={styles.descr}>
                    Выберем ключевые запросы для вашего продвижения и конкурентность ниши. Работаем только с “белым” SEO.                </p>
                <div className={styles.gridWrapper}>
                    <div className={styles.gridItem}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>Бесплатная консультация</h3>
                                <p className={styles.text}>Изучаем вашу нишу и разрабатываем стратегию. Просчитываем сроки продвижения.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>Частичная предоплата</h3>
                                <p className={styles.text}>Подписание договора, либо устная договоренность об условиях сдачи работы.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>Сбор семантики</h3>
                                <p className={styles.text}>Подбираем ключевые запросы для вашего продвижения, оптимизируем сайт и закупаем “белые” ссылки.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>запуск и прогноз</h3>
                                <p className={styles.text}>Изучаем динамику повышения позиций сайта, корректируем семантику и оптимизацию.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stages;