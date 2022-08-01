import styled, {keyframes} from 'styled-components'
import {BLACK_MAIN, BLUE_MAIN} from "../../theme/colors/colors.constants";

const first = keyframes`
    0% {
        width: 0;
    }
    15%{
        width: 0;
    }
    100% {
        width: 100%;
    }
`
const second = keyframes`
    0% {
        width: 0;
    }
    30%{
        width: 0;
    }
    100% {
        width: 100%;
    }
`
const third = keyframes`
    0% {
        width: 0;
    }
    50%{
        width: 0;
    }
    100% {
        width: 100%;
    }
`
const fourth = keyframes`
    0% {
        width: 0;
    }
    65%{
        width: 0;
    }
    100% {
        width: 100%;
    }
`
const fifth = keyframes`
    0% {
        width: 0;
    }
    75%{
        width: 0;
    }
    100% {
        width: 100%;
    }
`
const sixth = keyframes`
    0% {
        width: 0;
    }
    85%{
        width: 0;
    }
    100% {
        width: 100%;
    }
`

const scroll = keyframes`
    from {
        top: 0px;
    }
    to {
        top: -245px;
    }
`

export const SystemsAnimationTag = styled.div`
    overflow: hidden;
    width: 620px;
    height: 245px;

    .group1, .group2 {
        animation: ${scroll} 2s linear infinite;
        animation-delay: 2s;
        position: relative;
    }

    .line {
        white-space: nowrap;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 35px;
        line-height: 41px;
        color: ${BLACK_MAIN};
        overflow: hidden;
    }

    .blue {
        color: ${BLUE_MAIN};
    }

    .second, .fifth {
        padding-left: 4%;
    }

    .third, .fourth {
        padding-left: 8%;
    }

    .group1 {
        .first {
            animation: ${first} .8s linear forwards;
        }

        .second {
            animation: ${second} 1.2s linear forwards;
        }

        .third {
            animation: ${third} 1.5s linear forwards;
        }

        .fourth {
            animation: ${fourth} 1.7s linear forwards;
        }

        .fifth {
            animation: ${fifth} 1.9s linear forwards;
        }

        .sixth {
            animation: ${sixth} 2s linear forwards;
        }
    }

    .group2 {
        .first {
            animation: ${first} 2s linear infinite;
        }

        .second {
            animation-delay: 2s;
            animation: ${second} 2s linear infinite;
            
        }
        
        .third {
            animation: ${third} 2s linear infinite;
            animation-delay: 2s;
        }
           
        .fourth {
            animation: ${fourth} 2s linear infinite;
            animation-delay: 2s;
        }
            
        .fifth {
            animation: ${fifth} 2s linear infinite;
            animation-delay: 2s;
        }
            
        .sixth {
            animation: ${sixth} 2s linear infinite;
            animation-delay: 2s;
        }
    }
`
