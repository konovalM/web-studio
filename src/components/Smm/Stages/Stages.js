import React from 'react';
import styles from "./Stages.module.css";

const Stages = () => {
    return (
        <section className={styles.stages}>
            <div className="container">
                <h2 className={styles.title}>
                    Этапы работы <span className={styles.blue}>;<span className={styles.black}>-</span>]</span>
                </h2>
                <p className={styles.descr}>
                    Подберем соцсети для вашего продвижения и определим точки давления на аудиторию.
                </p>
                <div className={styles.gridWrapper}>
                    <div className={styles.gridItem}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>Бесплатная консультация</h3>
                                <p className={styles.text}>Изучим вашу нишу, после чего определим методику продвижения и бюджеты.</p>
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
                                <h3 className={styles.subtitle}>Анализ ниши</h3>
                                <p className={styles.text}>Составление объявлений на основе анализа рынка и конкурентов. Настройка аккаунтов.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>запуск и прогноз</h3>
                                <p className={styles.text}>Изучаем результаты старта кампании и корректируем рекламу. Получаем остаток оплаты.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stages;