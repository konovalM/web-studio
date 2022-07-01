import React from 'react';
import styles from './Main.module.css'
import Button from "../../../elements/Button";
import image from '../../../images/applicationsPage/main.png'
import styled from 'styled-components'
import LoaderAnimation from "../../../animations/LoaderAnimation/LoaderAnimation";

const Main = () => {
    return (
        <section className={styles.main}>
            <div className={styles.scroll}>
                <div className={styles.scrollOutside}>
                </div>
                <div className={styles.scrollInner}>
                    <div className={styles.scrollCircle}></div>
                </div>
                <p className={styles.scrollText}>scroll</p>
            </div>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <h1 className={styles.title}>
                            DIGITAL-агентство полного цикла <span className={styles.bold}>Code:T</span>
                        </h1>
                        <h2 className={styles.subtitle}>
                            Написание парсеров и наполнение
                        </h2>
                        <p className={styles.descr}>
                            Спарсим товары на ваш online магазин, подключим API торговых площадок.
                        </p>
                        <div className={styles.btnWrapper}>
                            <Button btnColor='#000000' btnStyles={[{background: '#1E4FCD', color: '#fff', border: 'none'}, {background: '#fff', color: '#1a1a1a', border: '1px solid #1a1a1a'}]}/>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <LoaderAnimation />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;