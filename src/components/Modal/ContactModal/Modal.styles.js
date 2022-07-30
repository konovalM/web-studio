import styled from 'styled-components'
import {BLACK_MAIN} from "../../../theme/colors/colors.constants";

export const ModalTag = styled.div`
    width: 100vw;
    min-height: 100vh;
    z-index: 1100000;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .3);
    overflow-y: auto;
    display: flex;
    align-items: center;
    padding: 0 20px;
    .contentWrapper{
        max-width: 1200px;
        margin: 0 auto;
        background-color: #FFFFFF;
        padding: 50px 20px;
        flex-basis: 100%;
    }
    .title{
        font-family: 'Russo One';
        font-weight: 400;
        font-size: 88px;
        line-height: 100%;
        text-align: center;
        color: ${BLACK_MAIN};
        margin-bottom: 22px;
    }
    .subtitle{
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: ${BLACK_MAIN};
        margin-bottom: 65px;
    }
`