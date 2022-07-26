import React, {Fragment, useState, useEffect, useRef} from 'react';
import useWindowSize from "../hooks/useWindowSize";
import styles from './Button.module.css'


const Button = ({ btnStyles, btnColor }) => {
    /*let element1 = useRef()
    let element2 = useRef()
    let btn = useRef()
    let parent = useRef()
    const width = useWindowSize()
    useEffect(() => {
        element1 = element1.current
        element2 = element2.current
        parent = parent.current
        btn = btn.current
        const duration = 700
        const distance = parent.clientWidth - element1.clientWidth
        let startAnimation = null
        function easeInOut(time) {
            return 0.5 * (1 - Math.cos(Math.PI * time))
        }
        let requestId = requestAnimationFrame(function animation(time) {

            if (!startAnimation){
                startAnimation = time
            }
            let translate1;
            let translate2;
            const progress = (time - startAnimation) / duration % 2
            if (progress < 1){
                translate1 = easeInOut(progress) * distance
                translate2 = easeInOut(progress) * distance
                btn.style.background = btnStyles[0].background
                btn.style.color = btnStyles[0].color
                btn.style.border = btnStyles[0].border

            } else{
                translate1 = easeInOut(distance * 2  - progress) * distance
                translate2 = easeInOut(distance * 2  - progress) * distance
                btn.style.background = btnStyles[1].background
                btn.style.color = btnStyles[1].color
                btn.style.border = btnStyles[1].border
            }
            element1.style.transform = `translateX(${translate1}px)`

            element2.style.transform = `translateX(${-translate2}px)`

            requestAnimationFrame(animation)
        })
        return function cleanUp() {
            cancelAnimationFrame(requestId)
        }
    }, [width])*/
    return (
        <Fragment>
            {/*<button className={styles.consultation} ref={btn}>
                Получить консультацию
            </button>
            <div className={styles.points} ref={parent}>
                <div className={styles.pointFirst} ref={element1} style={{background: btnColor}}></div>
                <div className={styles.pointSecond} ref={element2} style={{background: btnColor}}></div>
            </div>*/}
        </Fragment>
    );
};

export default Button;