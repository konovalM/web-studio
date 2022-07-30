import styled from 'styled-components'
import {BLACK_MAIN} from "../../../theme/colors/colors.constants";

export const ModalTag = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1100000;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .3);
    overflow: auto;
    padding: 10px 20px;
    .contentWrapper{
        min-height: calc(100% - 3.5rem);
        margin: 1.75rem auto;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 1200px;
    }
    .content{
        position: relative;
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
        padding: 0 40px;
    }
    .subtitle{
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: ${BLACK_MAIN};
        margin-bottom: 65px;
    }
    .close{
        position: absolute;
        right: 30px;
        top: 30px;
    }
    @media screen and (max-width: 550px){
        .content{
            padding: 36px 20px;
        }
        .title{
            font-size: 45px;
            line-height: 100%;
        }
        .subtitle{
            font-size: 16px;
            line-height: 19px;
        }
        .close{
            width: 20px;
            right: 15px;
            top: 15px;
        }
    }
`