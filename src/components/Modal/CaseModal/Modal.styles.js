import styled from 'styled-components'

export const ModalTag = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1100000;
    width: 100vw;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, .3);
    padding: 40px;
    overflow-y: auto;
    .content{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        height: 100vh;
        img{
            margin: 0 auto;
            max-width: 90vw;
        }
    }
`
