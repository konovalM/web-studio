import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
    0%{
        transform: translate(-374px,-247px) rotate(0deg);
        transform-origin: 95% 79%;
    }
    40%{
        transform: translate(-374px,-247px) rotate(360deg);
        transform-origin: 95% 79%;
    }
    100%{
        transform: translate(-374px,-247px) rotate(720deg);
        transform-origin: 95% 79%;
    }
`

export const LiquidCircleTag = styled.div`
    .circleMask{
        animation: ${rotate} 2.5s cubic-bezier(.4, .2, .6, .7) infinite;
    }
`