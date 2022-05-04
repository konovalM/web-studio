import React, {Fragment} from 'react';
import styled from 'styled-components'
import {useEffect} from "react";



const Button = ({children, clazz1, clazz2, btnClassName, btnStyles}) => {
    useEffect(() => {
        console.log(clazz1, clazz2, btnClassName)
        const element1 = document.querySelector(`.${clazz1}`)
        const element2 = document.querySelector(`.${clazz2}`)
        const btn = document.querySelector(`.${btnClassName}`)
        const duration = 700
        const distance = 56
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
                // translate1 = progress * distance
                // translate2 = progress * distance
                translate2 = easeInOut(progress) * distance
                /*btn.style.cssText = `
                    background: ${btnStyles[0].background};
                    color: ${btnStyles[0].color};
                `*/
                btn.style.background = btnStyles[0].background
                btn.style.color = btnStyles[0].color
                btn.style.body = btnStyles[0].border
            } else{
                translate1 = easeInOut(112  - progress) * distance
                // translate1 = 112  - progress * distance
                // translate2 = 112  - progress * distance
                translate2 = easeInOut(112  - progress) * distance
                btn.style.background = btnStyles[1].background
                btn.style.color = btnStyles[1].color
                btn.style.body = btnStyles[1].border
                /*btn.style.cssText =
                    `
                        background: ${btnStyles[1].background};
                        border: ${btnStyles[1].border};
                        color: ${btnStyles[1].color};
                    `*/

            }
            element1.style.transform = `translateX(${translate1}px)`
            element2.style.transform = `translateX(${-translate2}px)`
            requestAnimationFrame((animation))
        })
        return function cleanUp() {
            console.log('end')
            cancelAnimationFrame(requestId)
        }
    }, [])
    return (
        <Fragment>
            {children}
        </Fragment>
    );
};

export default Button;