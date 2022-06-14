import React from 'react';
import styles from './Includes.module.css'
import cn from "classnames";
import people from "../../../images/applicationsPage/people.svg";
import report from "../../../images/applicationsPage/report.svg";
import phone from "../../../images/applicationsPage/phone.svg";


const Includes = () => {
    return (
        <section className={styles.includes}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        Что включает
                    </h2>
                    <p className={styles.descr}>
                        Разработка концепции приложения и его внедрение на рынок, гарантийный период тестирования для выявления ошибок.
                    </p>
                    <div className={styles.gridWrapper}>
                        <div className={cn(styles.gridItem, styles.white)}>
                            <h3 className={cn(styles.subtitle, styles.subtitleBlack)}>уведомления и сбор данных</h3>
                            <p className={cn(styles.gridDescr, styles.gridDescrLong,styles.gridDescrBlack)}>
                                Пользователи оперативно получают уведомления от вашего сервиса, а вы собираете базу клиентов.
                            </p>
                            <img src={people} alt="people" className={styles.people}/>
                        </div>
                        <div className={cn(styles.gridItem, styles.white)}>
                            <h3 className={cn(styles.subtitle, styles.subtitleBlack)}>Конверсия до 300%</h3>
                            <p className={cn(styles.gridDescr, styles.gridDescrShort,styles.gridDescrBlack)}>
                                Приложения приносят в несколько раз больше клиентов за счет расширенного функционала.
                            </p>
                            <img src={report} alt="report" className={styles.report}/>
                        </div>
                        <div className={cn(styles.gridItem, styles.blue)}>
                            <h3 className={cn(styles.subtitle, styles.subtitleWhite)}>Популярнее сайта</h3>
                            <p className={cn(styles.gridDescr, styles.gridDescrWhite)}>
                                Постоянные пользователи предпочитают использовать приложение чаще, чем сайт.
                            </p>
                            <img src={phone} alt="phone" className={styles.phone}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Includes;