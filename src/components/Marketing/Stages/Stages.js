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
                    Определяем путь вашего развития на ближайшие годы и закладываем точки роста.
                </p>
                <div className={styles.gridWrapper}>
                    <div className={styles.gridItem}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>Бесплатная консультация</h3>
                                <p className={styles.text}>Изучим вашу нишу, определим состояние репутации, либо необходимость ребрендинга.</p>
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
                                <h3 className={styles.subtitle}>Составление плана работ</h3>
                                <p className={styles.text}>Глубокий анализ рынка и работы по ребрендингу, исправлению репутации, продвижению.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>сопровождение и отчеты</h3>
                                <p className={styles.text}>Регулярные отчеты о результатах формирования имиджа и бренда компании.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stages;