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
                    Определим перечень функционала, который необходимо реализовать. Выберем язык программирования и фреймворк для разработки системы управления.
                </p>
                <div className={styles.gridWrapper}>
                    <div className={styles.gridItem}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>Бесплатная консультация</h3>
                                <p className={styles.text}>Выясняем требования к вашей системе и выбираем стэк технологий для разработки.</p>
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
                                <h3 className={styles.subtitle}>Разработка</h3>
                                <p className={styles.text}>Написание frontend и backend части системы. Поэтапное утверждение и оплата работы.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>тесты и запуск</h3>
                                <p className={styles.text}>Тестирование функционала, сдача работы и внесение остатка оплаты.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stages;