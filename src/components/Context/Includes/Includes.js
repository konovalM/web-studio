import React from 'react';
import styles from './Includes.module.css'
import cn from 'classnames'
import arrows from '../../../images/contextPage/arrows.svg'
import arrows2 from '../../../images/contextPage/arrows2.svg'
import dollar from '../../../images/contextPage/dollar.svg'
import eye from '../../../images/contextPage/eye.svg'

const Includes = () => {
    return (
        <section className={styles.includes}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        Что включает
                    </h2>
                    <p className={styles.descr}>
                        Контекстная реклама - самый популярный и быстрый способ найти первых клиентов из поисковых систем.
                    </p>
                    <div className={styles.gridWrapper}>
                        <div className={cn(styles.gridItem, styles.white)}>
                            <h3 className={cn(styles.subtitle, styles.subtitleBlack)}>целевой трафик</h3>
                            <p className={cn(styles.gridDescr, styles.gridDescrBlack)}>
                                Реклама показывается только аудитории, которая заинтересована вашим товаром.
                            </p>
                            <img src={arrows} alt="arrows" className={styles.arrows}/>
                        </div>
                        <div className={cn(styles.gridItem, styles.blue)}>
                            <h3 className={cn(styles.subtitle, styles.subtitleWhite)}>быстрый результат</h3>
                            <p className={cn(styles.gridDescr, styles.gridDescrWhite)}>
                                Вам не надо ждать повышения позиций вашего сайта в поиске. Клиенты приходят сразу же.
                            </p>
                            <img src={arrows2} alt="arrows" className={styles.arrows2}/>
                        </div>
                        <div className={cn(styles.gridItem, styles.white)}>
                            <h3 className={cn(styles.subtitle, styles.subtitleBlack)}>дешевые клиенты</h3>
                            <p className={cn(styles.gridDescr, styles.gridDescrBlack)}>
                                Стоимость привлечения покупателя минимальна. Затраты зависят от конкуренции в нише.
                            </p>
                            <img src={dollar} alt="dollar" className={styles.dollar}/>
                        </div>
                        <div className={cn(styles.gridItem, styles.blue)}>
                            <h3 className={cn(styles.subtitle, styles.subtitleWhite)}>мониторинг конкурентов</h3>
                            <p className={cn(styles.gridDescr, styles.gridDescrWhite, styles.gridDescrLast)}>
                                Инструменты анализа конкурентов показывают по каким запросам они продвигаются.
                            </p>
                            <img src={eye} alt="eye" className={styles.eye}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Includes;