import React from 'react';
import styles from './Stages.module.css'

const Stages = () => {
    return (
        <section className={styles.stages}>
            <div className="container">
                <h2 className={styles.title}>
                    Этапы работы <span className={styles.blue}>;<span className={styles.black}>-</span>]</span>
                </h2>
                <p className={styles.descr}>
                    Изучим вашу нишу, определим стратегию работы будущего бизнеса и на ее основе соберем продающий сайт. <span className="br">Все остальное возьмем на себя.</span>
                </p>
                <div className={styles.gridWrapper}>
                    <div className={styles.gridItem}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>Бесплатная консультация</h3>
                                <p className={styles.text}>Выясняем целесообразность контекстной рекламы. Определение бюджета и ожиданий от рекламы.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>Частичная предоплата</h3>
                                <p className={styles.text}>Подписание договора, либо устная договоренность об условиях сдачи и оплаты работы.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>анализ ниши</h3>
                                <p className={styles.text}>Анализ конкурентов в вашей сфере. Составление набора ключевых слов для показа рекламы.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>создание объявлений</h3>
                                <p className={styles.text}>Создание набора баннеров для рекламной кампании (без отрисовки), либо текстовых объявлений.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>тесты и удешевление</h3>
                                <p className={styles.text}>Тестирование рекламы, проверка ключевых слов на отклик аудитории. Уменьшение стоимости показов.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.content}>
                                <h3 className={styles.subtitle}>запуск и отчет</h3>
                                <p className={styles.text}>Отчет по статистике показов, количеству переходов. Прогноз продвижения. Оплата за работу.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stages;