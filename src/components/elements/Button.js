import React, {Fragment, useState, useEffect} from 'react';
import styled from 'styled-components'



const Button = ({children, clazz1, clazz2, btnClassName, btnStyles, parentClass}) => {
    function useWindowSize() {
        const [size, setSize] = useState(window.innerWidth)
        useEffect(() => {
            const handleResize = () => {
                setSize(window.innerWidth)
            }
            window.addEventListener('resize', handleResize)
        }, [])
        return size
    }
    const size = useWindowSize()
    useEffect(() => {
        const element1 = document.querySelectorAll(`.${clazz1}`)
        const element2 = document.querySelectorAll(`.${clazz2}`)
        const parent = document.querySelector(`.${parentClass}`)
        const btn = document.querySelectorAll(`.${btnClassName}`)
        const duration = 700
        const distance = parent.clientWidth - element1[0].clientWidth
        let startAnimation = null
        console.log(element1)
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
                btn.forEach((elem) => {
                    elem.style.background = btnStyles[0].background
                    elem.style.color = btnStyles[0].color
                    elem.style.body = btnStyles[0].border
                })

            } else{
                translate1 = easeInOut(distance * 2  - progress) * distance
                // translate1 = 112  - progress * distance
                // translate2 = 112  - progress * distance
                translate2 = easeInOut(distance * 2  - progress) * distance
                btn.forEach((elem) => {
                    elem.style.background = btnStyles[1].background
                    elem.style.color = btnStyles[1].color
                    elem.style.body = btnStyles[1].border
                })

                /*btn.style.cssText =
                    `
                        background: ${btnStyles[1].background};
                        border: ${btnStyles[1].border};
                        color: ${btnStyles[1].color};
                    `*/

            }
            element1.forEach((elem) => {
                elem.style.transform = `translateX(${translate1}px)`
            })

            element2.forEach((elem) => {
                elem.style.transform = `translateX(${-translate2}px)`
            })

            requestAnimationFrame((animation))
        })
        return function cleanUp() {
            console.log('end')
            cancelAnimationFrame(requestId)
        }
    }, [size])
    return (
        <Fragment>
            {children}
        </Fragment>
    );
};

export default Button;