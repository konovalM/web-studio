import styled, {keyframes} from 'styled-components'
import {BLUE_MAIN} from "../../theme/colors/colors.constants";

const bubbleSize = keyframes`
    0%, 75% {
        width:var(--size, 4rem);
        height:var(--size, 4rem);
    }
    100% {
        width:0rem;
        height:0rem;
    }
`
const bubbleMove = keyframes`
    0% {
        bottom:-4rem;
    }
    100% {
        bottom:var(--distance, 10rem);
    }
`

export const MainWaveAnimationTag = styled.div`
    .wrapperAnimation{
        position: absolute;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 12vw;
        background: ${BLUE_MAIN};
        //transform: translateX(50%) rotate(-90deg) ;
    }
    .bubbles{
        position: absolute;
        top: 0;
        left: 0;
        height: 1rem;
        background: ${BLUE_MAIN};
        width: ${props => `${props.height}px`};
        filter:url("#blob");
        transform: ${props => `translate(-50%, ${props.height * 0.5}px) rotate(-90deg)`} 
    }
    .bubble {
        position: absolute;
        left: var(--position, 50%);
        background: ${BLUE_MAIN};
        border-radius: 100%;
        animation: ${bubbleSize} var(--time, 4s) ease-in infinite var(--delay, 0s), ${bubbleMove} var(--time, 4s) ease-in infinite var(--delay, 0s);
        transform: translate(-50%, 100%);
    }
    /*@media screen and (min-width: 1920px){
        .wrapperAnimation{
            min-height: 60vw;
        }
    }*/
    @media screen and (min-width: 2000px){
        .wrapperAnimation{
            width: 25vw;
        }
    }
    @media screen and (min-width: 1500px){
        .wrapperAnimation{
            width: 20vw;
        }
    }
    @media screen and (max-width: 1100px){
        .wrapperAnimation{
            width: 5vw;
        }
    }
    @media screen and (max-width: 991px){
        
        display: none;
    }
`