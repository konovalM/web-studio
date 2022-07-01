import React from 'react';
import styles from './Main.module.css'
import Button from "../../../elements/Button";
import image from '../../../images/applicationsPage/main.png'
import styled from 'styled-components'
import BallAnimation from "../../../animations/BallAnimation/BallAnimation";

const ButtonWrapperTag= styled.div`
    .btnWrapper{
        margin-top: 32px;
        display: flex;
        width: 353px;
        position: relative;
    }
    @media (max-width: 750px){
        .consultation{
            width: 209px;
            height: 40px;
            font-size: 14px;
            line-height: 16px;
        }
        .btnWrapper{
            width: auto;
        }
        .pointFirst{
            width: 20px;
        }
        .pointSecond{
            width: 20px;
        }
        .points{
            width: 63px;
        }
    }
`

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
                            Разработка приложений
                        </h2>
                        <p className={styles.descr}>
                            Создание приложений под IOS, Android, дублирование функционала сайта.
                        </p>
                        <ButtonWrapperTag>
                            <div className='btnWrapper'>
                                <Button btnColor='#000000' btnStyles={[{background: '#1E4FCD', color: '#fff', border: 'none'}, {background: '#fff', color: '#1a1a1a', border: '1px solid #1a1a1a'}]}/>
                            </div>
                        </ButtonWrapperTag>
                    </div>
                    <div className={styles.right}>
                        <BallAnimation/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;