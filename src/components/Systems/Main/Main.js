import React from 'react';
import styles from './Main.module.css'
import Button from "../../../elements/Button";
import image from '../../../images/systemsPage/main.svg'
import styled from 'styled-components'
import {scrollToElement} from "../../../utils/scrollToElement";

const ButtonWrapperTag= styled.div`
    .btnWrapper{
        margin-top: 32px;
        display: flex;
        width: 353px;
        position: relative;
    }
    @media (max-width: 760px){
        .btnWrapper{
            width: auto;
        }
    }
`

const Main = () => {
    return (
        <section className={styles.main}>
            <div className={styles.scroll} onClick={() => scrollToElement('systems-second')}>
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
                            Самописные системы
                        </h2>
                        <p className={styles.descr}>
                            Разработаем систему управления, либо сервис под ваши нестандартные задачи.
                        </p>
                        <ButtonWrapperTag>
                            <div className={'btnWrapper'}>
                                <Button btnColor='#000000' btnStyles={[{background: '#1E4FCD', color: '#fff', border: 'none'}, {background: '#fff', color: '#1a1a1a', border: '1px solid #1a1a1a'}]}/>
                            </div>
                        </ButtonWrapperTag>
                    </div>
                    <div className={styles.right}>
                        <img src={image} alt="animation" className={styles.image}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;