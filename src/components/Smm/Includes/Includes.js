import React from 'react';
import styles from './Includes.module.css'
import cn from "classnames";
import like from "../../../images/smmPage/like.svg";
import messages from "../../../images/smmPage/messages.svg";
import target from "../../../images/smmPage/target.svg";
import sell from "../../../images/smmPage/sell.svg";
import { Element } from 'react-scroll'


const Includes = () => {
    return (
        <section className={styles.includes}>
            <Element name='smm-second'>
                <div className="container">
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>
                            Что включает
                        </h2>
                        <p className={styles.descr}>
                            Работа с аудиторией на площадках, где ваши клиенты проводят максимальное количество своего времени.
                        </p>
                        <div className={styles.gridWrapper}>
                            <div className={cn(styles.gridItem, styles.white)}>
                                <h3 className={cn(styles.subtitle, styles.subtitleBlack)}>Максимальная лояльность</h3>
                                <p className={cn(styles.gridDescr, styles.gridDescrBlack)}>
                                    Соцсети вызывают доверие у аудитории и упрощают продажи.
                                </p>
                                <img src={like} alt="like" className={styles.like}/>
                            </div>
                            <div className={cn(styles.gridItem, styles.blue)}>
                                <h3 className={cn(styles.subtitle, styles.subtitleWhite)}>живое общение</h3>
                                <p className={cn(styles.gridDescr, styles.gridDescrWhite)}>
                                    Прямое общение с покупателем увеличивает шанс продажи.
                                </p>
                                <img src={messages} alt="messages" className={styles.messages}/>
                            </div>
                            <div className={cn(styles.gridItem, styles.white)}>
                                <h3 className={cn(styles.subtitle, styles.subtitleBlack)}>узкий таргетинг</h3>
                                <p className={cn(styles.gridDescr, styles.gridDescrMiddle,styles.gridDescrBlack)}>
                                    Реклама показывается людям, которые уже заинтересованы в покупке.
                                </p>
                                <img src={target} alt="target" className={styles.target}/>
                            </div>
                            <div className={cn(styles.gridItem, styles.blue)}>
                                <h3 className={cn(styles.subtitle, styles.subtitleWhite)}>независимые продажи</h3>
                                <p className={cn(styles.gridDescr, styles.gridDescrWhite, styles.gridDescrShort)}>
                                    В некоторых соцсетях можно собрать магазин на конструкторе.
                                </p>
                                <img src={sell} alt="sell" className={styles.sell}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Includes;