import React from 'react';
import styles from './Cases.module.css'

const Cases = () => {
    return (
        <section className={styles.cases}>
            <div className="container">
                <h2 className={styles.title}>
                    Кейсы
                </h2>
            </div>

            <div className={styles.sliderContainer}>
                <div className={styles.navigateButtons}>
                    <div className={styles.prevBtn + ' ' + styles.btnWrapper}>
                        <svg width="90" height="13" viewBox="0 0 90 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M89.5 6.5H0M0 6.5L6.5 0M0 6.5L6.5 13" stroke="white"/>
                        </svg>
                    </div>
                    <div className={styles.nextBtn + ' ' + styles.btnWrapper}>
                        <svg width="90" height="13" viewBox="0 0 90 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 6.5H89.5M89.5 6.5L83 0M89.5 6.5L83 13" stroke="white"/>
                        </svg>
                    </div>
                </div>
                <div className={styles.sliderWrapper}>
                    <div className={styles.slideInner}>
                        <div className={styles.slideImgWrapper}>
                            <div className={styles.sliderInnerText}>Интернет-магазин кухонной мебели</div>
                        </div>
                    </div>
                    <div className={styles.slideInner}>
                        <div className={styles.slideImgWrapper}>
                            <div className={styles.sliderInnerText}>Интернет-магазин кухонной мебели</div>
                        </div>
                    </div>
                    <div className={styles.slideInner}>
                        <div className={styles.slideImgWrapper}>
                            <div className={styles.sliderInnerText}>Интернет-магазин кухонной мебели</div>
                        </div>
                    </div>
                    <div className={styles.slideInner}>
                        <div className={styles.slideImgWrapper}>
                            <div className={styles.sliderInnerText}>Интернет-магазин кухонной мебели</div>
                        </div>
                    </div>
                    <div className={styles.slideInner}>
                        <div className={styles.slideImgWrapper}>
                            <div className={styles.sliderInnerText}>Интернет-магазин кухонной мебели</div>
                        </div>
                    </div>
                    <div className={styles.slideInner}>
                        <div className={styles.slideImgWrapper}>
                            <div className={styles.sliderInnerText}>Интернет-магазин кухонной мебели</div>
                        </div>
                    </div>
                    <div className={styles.slideInner}>
                        <div className={styles.slideImgWrapper}>
                            <div className={styles.sliderInnerText}>Интернет-магазин кухонной мебели</div>
                        </div>
                    </div>
                    <div className={styles.slideInner}>
                        <div className={styles.slideImgWrapper}>
                            <div className={styles.sliderInnerText}>Интернет-магазин кухонной мебели</div>
                        </div>
                    </div>
                    <div className={styles.slideInner}>
                        <div className={styles.slideImgWrapper}>
                            <div className={styles.sliderInnerText}>Интернет-магазин кухонной мебели</div>
                        </div>
                    </div>
                    <div className={styles.slideInner}>
                        <div className={styles.slideImgWrapper}>
                            <div className={styles.sliderInnerText}>Интернет-магазин кухонной мебели</div>
                        </div>
                    </div>
                    <div className={styles.slideInner}>
                        <div className={styles.slideImgWrapper}>
                            <div className={styles.sliderInnerText}>Интернет-магазин кухонной мебели</div>
                        </div>
                    </div>
                    <div className={styles.slideInner}>
                        <div className={styles.slideImgWrapper}>
                            <div className={styles.sliderInnerText}>Интернет-магазин кухонной мебели</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cases;