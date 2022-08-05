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
    overflow: hidden;
    .wrapperAnimation{
        position: absolute;
        left: 0;
        bottom: 0;
        min-height: 50px;
        width: 100%;
        background: ${BLUE_MAIN};
    }
    .bubbles{
        position: absolute;
        top: 0;
        left: 0;
        height: 1rem;
        background: ${BLUE_MAIN};
        width: 100%;
        filter:url("#blob");
    }
    .bubble {
        position: absolute;
        left: var(--position, 50%);
        background: ${BLUE_MAIN};
        border-radius: 100%;
        animation: ${bubbleSize} var(--time, 4s) ease-in infinite var(--delay, 0s), ${bubbleMove} var(--time, 4s) ease-in infinite var(--delay, 0s);
        transform: translate(-50%, 100%);
    }
`