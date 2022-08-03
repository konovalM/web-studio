import React from 'react';
import styles from "./Main.module.css";
import Button from "../../../elements/Button";
import image from '../../../images/smmPage/main.svg'
import {scrollToElement} from "../../../utils/scrollToElement";
import {SmmAnimation} from "../../../icons/components/SmmAnimation/SmmAnimation";

const Main = () => {
    return (
        <section className={styles.main}>
            <div className={styles.scroll} onClick={() => scrollToElement('smm-second')}>
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
                            Продвижение в соцсетях
                        </h2>
                        <p className={styles.descr}>
                            Приведем клиентов из соцсетей и повысим лояльность к вашей компании.
                        </p>
                        <div className={styles.btnWrapper}>
                            <Button btnColor='#000000' btnStyles={[{background: '#1E4FCD', color: '#fff', border: 'none'}, {background: '#fff', color: '#1a1a1a', border: '1px solid #1a1a1a'}]}/>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <SmmAnimation className={styles.image}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;