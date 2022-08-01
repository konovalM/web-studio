import styled, {keyframes} from 'styled-components'


export const rotate1 = keyframes`
    0% {
        transform-origin: center;
        transform: rotateZ(0deg) translate(-150px, 0);
    }
    50% {
        transform-origin: center;
        transform: rotateZ(-180deg) translate(-150px, 0);
    }
    100% {
        transform-origin: center;
        transform: rotateZ(-360deg) translate(-150px, 0);
    }
`

export const rotate2 = keyframes`
    0% {
        transform-origin: center;
        transform: rotateZ(0deg) translate(100px, 100px);
    }

    50% {
        transform-origin: center;
        transform: rotateZ(180deg) translate(100px, 100px);
    }
    100% {
        transform-origin: center;
        transform: rotateZ(360deg) translate(100px, 100px);
    }
`

export const XYTag = styled.div`
    overflow: hidden;
    .firstMask {
        animation: ${rotate1} 5s linear infinite;
    }

    .secondMask {
        animation: ${rotate2} 5s linear infinite;
    }
`