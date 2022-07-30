import React from 'react';
import styles from './Main.module.css'
import Button from "../../../elements/Button";
import image from '../../../images/contextPage/googleYandex.svg'
import {scrollToElement} from "../../../utils/scrollToElement";
import ContextAnimation from "../../../animations/ContextAnimation/ContextAnimation";

const Main = () => {
    return (
        <section className={styles.main}>
            <div className={styles.scroll} onClick={() => scrollToElement('context-second')}>
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
                            Контекстная реклама
                        </h2>
                        <p className={styles.descr}>
                            Настроим контекстную рекламу в Google или Yandex. Две недели ведения бесплатно.
                        </p>
                        <div className={styles.btnWrapper}>
                            <Button btnColor='#000000' btnStyles={[{background: '#1E4FCD', color: '#fff', border: 'none'}, {background: '#fff', color: '#1a1a1a', border: '1px solid #1a1a1a'}]}/>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <ContextAnimation />
                        {/*<img src={image} alt="Google & Yandex" className={styles.image}/>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;