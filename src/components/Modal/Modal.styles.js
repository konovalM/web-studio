import styled from 'styled-components'

export const ModalTag = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1100;
    width: 100vw;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, .3);
    padding: 40px;

    .content{
        width: 100%;
        color: #fff;
        user-select: none;
        height: 100px;
        background-color: #1E4FCD;
    }
`
