import {scroller} from "react-scroll";

export const scrollToElement = (element, offset = -100) => {
    scroller.scrollTo(element, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: offset,
    })
}