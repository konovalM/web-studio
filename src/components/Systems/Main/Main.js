import React from 'react';
import styles from './Main.module.css'
import Button from "../../../elements/Button";
import image from '../../../images/systemsPage/main.svg'
import styled from 'styled-components'

const ButtonWrapperTag= styled.div`
    .consultation{
        width: 271px;
        height: 52px;
        background: #1E4FCD;
        border: none;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        position: relative;
    }
    .btnWrapper{
        margin-top: 32px;
        display: flex;
        width: 353px;
        position: relative;
    }
    .pointFirst{
        width: 26px;
        height: 50%;
        background-color: #1a1a1a;
        position: absolute;
        top: 0;
        left: 0;
    }
    .pointSecond{
        width: 26px;
        height: 50%;
        background-color: #1a1a1a;
        position: absolute;
        bottom: 0;
        right: 0;
    }
    .points{
        width: 82px;
        position: relative;
    }
    @media (max-width: 760px){
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
                            Самописные системы
                        </h2>
                        <p className={styles.descr}>
                            Разработаем систему управления, либо сервис под ваши нестандартные задачи.
                        </p>
                        <ButtonWrapperTag>
                            <Button btnClassName='consultation' clazz1='pointFirst' clazz2='pointSecond' parentClass='points' btnStyles={[{background: '#1E4FCD', color: '#fff', border: 'none'}, {background: '#fff', color: '#1a1a1a', border: '1px solid #1a1a1a'}]}>
                                <div className={'btnWrapper'}>
                                    <button className='consultation'>
                                        Получить консультацию
                                    </button>
                                    <div className='points'>
                                        <div className='pointFirst'></div>
                                        <div className='pointSecond'></div>
                                    </div>
                                </div>
                            </Button>
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