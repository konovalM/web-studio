import React from 'react';
import styles from "./Main.module.css";
import Button from "../../../elements/Button";
import image from '../../../images/smmPage/main.svg'

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
                            Продвижение в соцсетях
                        </h2>
                        <p className={styles.descr}>
                            Приведем клиентов из соцсетей и повысим лояльность к вашей компании.
                        </p>
                        <Button btnClassName={styles.consultation} clazz1={styles.pointFirst} clazz2={styles.pointSecond} parentClass={styles.points} btnStyles={[{background: '#1E4FCD', color: '#fff', border: 'none'}, {background: '#fff', color: '#1a1a1a', border: '1px solid #1a1a1a'}]}>
                            <div className={styles.btnWrapper}>
                                <button className={styles.consultation}>
                                    Получить консультацию
                                </button>
                                <div className={styles.points}>
                                    <div className={styles.pointFirst}></div>
                                    <div className={styles.pointSecond}></div>
                                </div>
                            </div>
                        </Button>
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