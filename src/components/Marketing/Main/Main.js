import React from 'react';
import styles from './Main.module.css'
import Button from "../../../elements/Button";
import {scrollToElement} from "../../../utils/scrollToElement";
import {XYSvgAnimation} from "../../../icons/components/XYAnimation/XYSvgAnimation";


const Main = () => {
    return (
        <section className={styles.main}>
            <div className={styles.scroll} onClick={() => scrollToElement('marketing-second')}>
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
                            DIGITAL-агентство полного цикла <span className={styles.bold}>Cube80</span>
                        </h1>
                        <h2 className={styles.subtitle}>
                            Брендинг и маркетинг
                        </h2>
                        <p className={styles.descr}>
                            Разработаем стратегию развития компании, создадим фирменный стиль, либо исправим репутацию.
                        </p>
                        <div className={styles.btnWrapper}>
                            <Button btnColor='#000000' btnStyles={[{background: '#1ECD44', color: '#fff', border: 'none'}, {background: '#fff', color: '#1a1a1a', border: '1px solid #1a1a1a'}]}/>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <XYSvgAnimation className={styles.image}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;