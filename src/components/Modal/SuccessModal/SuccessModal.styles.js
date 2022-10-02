import styled from 'styled-components'
import {BLACK_MAIN} from "../../../theme/colors/colors.constants";

export const SuccessModalTag = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1100000;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .6);
    overflow: auto;
    padding: 10px 20px;
    .contentWrapper{
        min-height: calc(100% - 3.5rem);
        margin: 1.75rem auto;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 690px;
    }
    .content{
        position: relative;
        background-color: #FFFFFF;
        padding: 95px 20px;
        flex-basis: 100%;
    }
    .subtitle{
        font-size: 18px;
        line-height: 21px;
        font-weight: 400;
        text-align: center;
        color: ${BLACK_MAIN};
    }
    .close{
        position: absolute;
        right: 30px;
        top: 30px;
        cursor: pointer;
    }
    @media screen and (max-width: 550px){
        padding: 10px 5px;
        .content{
            padding: 38px 20px;
        }
        .contentWrapper{
            max-width: 310px;
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
