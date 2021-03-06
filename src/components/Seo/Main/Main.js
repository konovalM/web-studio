import React from 'react';
import styles from './Main.module.css'
import Button from "../../../elements/Button";
import image from "../../../images/seoPage/seoMain.svg";
import {scrollToElement} from "../../../utils/scrollToElement";

const Main = () => {
    return (
        <section className={styles.main}>
            <div className={styles.scroll} onClick={() => scrollToElement('seo-second')}>
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
                            SEO продвижение
                        </h2>
                        <p className={styles.descr}>
                            Повысим позиции вашего сайта в поисковой выдаче и оптимизируем его SEO.
                        </p>
                        <div className={styles.btnWrapper}>
                            <Button btnColor='#000000' btnStyles={[{background: '#1E4FCD', color: '#fff', border: 'none'}, {background: '#fff', color: '#1a1a1a', border: '1px solid #1a1a1a'}]}/>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <img src={image} alt="seo" className={styles.image}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;