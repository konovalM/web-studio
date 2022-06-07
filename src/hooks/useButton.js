/*
import React, {Fragment, useEffect} from 'react';

const useButton = () => {
    const element1 = document.querySelector('.pointFirst')
    const element2 = document.querySelector('.pointSecond')
    const btn = document.querySelector('.consultation')
    const duration = 700
    const distance = 56
    let startAnimation = null

    function easeInOut(time) {
        return 0.5 * (1 - Math.cos(Math.PI * time))
    }
    function startAnimate(){
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
                btn.style.cssText = `
                    background: #1E4FCD;
                    border: none;
                    color: #fff
                `
                btn.style.background = '#1E4FCD'
                btn.style.color = '#fff'

            } else{
                translate1 = easeInOut(112  - progress) * distance
                // translate1 = 112  - progress * distance
                // translate2 = 112  - progress * distance
                translate2 = easeInOut(112  - progress) * distance
                btn.style.cssText =
                    `
                        background: transparent;
                        border: 1px solid #1a1a1a;
                        color: #1a1a1a
                    `

            }
            element1.style.transform = `translateX(${translate1}px)`
            element2.style.transform = `translateX(${-translate2}px)`
            requestAnimationFrame((animation))
            return function cleanUp() {
                console.log('end')
                cancelAnimationFrame(requestId)
            }
        })
    }

    useEffect(() => {
        startAnimate()
    }, [])
    return (
        <Fragment>
        </Fragment>
    );
};

export default useButton;*/
