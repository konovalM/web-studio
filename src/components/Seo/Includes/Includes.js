import React from 'react';
import styles from './Includes.module.css'
import cn from "classnames";
import search from "../../../images/seoPage/search.svg";
import percent from "../../../images/seoPage/percent.svg";
import crowd from "../../../images/seoPage/crowd.svg";
import arrow from "../../../images/seoPage/arrow.svg";

const Includes = () => {
    return (
        <section className={styles.includes}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        Что включает
                    </h2>
                    <p className={styles.descr}>
                        SEO оптимизированный сайт приводит клиентов не сразу, однако результат окупает себя в долгосрочной перспективе.                    </p>
                    <div className={styles.gridWrapper}>
                        <div className={cn(styles.gridItem, styles.white)}>
                            <h3 className={cn(styles.subtitle, styles.subtitleBlack)}>Бесплатные клиенты</h3>
                            <p className={cn(styles.gridDescr, styles.gridDescrBlack)}>
                                Клиенты находят вас сами через бесплатные запросы в поиске.
                            </p>
                            <img src={search} alt="search" className={styles.search}/>
                        </div>
                        <div className={cn(styles.gridItem, styles.blue)}>
                            <h3 className={cn(styles.subtitle, styles.subtitleWhite)}>Высокий процент продаж</h3>
                            <p className={cn(styles.gridDescr, styles.gridDescrWhite)}>
                                Люди больше верят сайтам, которые выданы алгоритмом поиска.
                            </p>
                            <img src={percent} alt="percent" className={styles.percent}/>
                        </div>
                        <div className={cn(styles.gridItem, styles.blue)}>
                            <h3 className={cn(styles.subtitle, styles.subtitleWhite)}>Доверие к бренду</h3>
                            <p className={cn(styles.gridDescr, styles.gridDescrWhite, styles.gridDescrLast)}>
                                Посетители постоянно видят ваш сайт в поисковиках и привыкают к нему.
                            </p>
                            <img src={crowd} alt="crowd" className={styles.crowd}/>
                        </div>
                        <div className={cn(styles.gridItem, styles.white)}>
                            <h3 className={cn(styles.subtitle, styles.subtitleBlack)}>долгосрочный результат</h3>
                            <p className={cn(styles.gridDescr, styles.gridDescrLong, styles.gridDescrBlack)}>
                                Результаты SEO сперва незначительны, но поток клиентов быстро нарастает.
                            </p>
                            <img src={arrow} alt="arrow" className={styles.arrow}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Includes;