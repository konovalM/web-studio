import styled, {keyframes} from 'styled-components'
import {BLACK_MAIN, BLUE_MAIN} from "../../theme/colors/colors.constants";

const gradient1 = keyframes`
    0% {
        height: 100%;
    }
    25% {
        height: 100%;
    }
    40% {
        height: 0%;
    }
    60% {
        height: 0%;
    }
    75% {
        height: 100%;
    }
    100% {
        height: 100%;
    }
`

const gradient2 = keyframes`
    0% {
        height: 0%;
    }
    25% {
        height: 0%;
    }
    40% {
        height: 100%;
    }
    60% {
        height: 100%;
    }
    75% {
        height: 0%;
    }
    100% {
        height: 0%;
    }

`


export const AnimationTag = styled.div`
    position: relative;
    width: 561px;
    height: 322px;
    margin-top: -20px;

    .google {
        z-index: 15;
        position: absolute;
        left: 25px;
        top: 22px;
    }

    .yandex {
        z-index: 15;
        position: absolute;
        right: 25px;
        bottom: 11px;
    }

    .top {
        position: absolute;
        top: 0;
        left: 0;
        width: 486px;
        height: 173px;
        z-index: 5;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;


        .one {
            background-color: ${BLUE_MAIN};
            animation: ${gradient1} 3s ease infinite;
        }

        .two {
            background-color: ${BLACK_MAIN};
            animation: ${gradient2} 3s ease infinite;
        }

    }

    .bottom {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 486px;
        height: 167px;
        display: flex;
        align-items: flex-end;
        z-index: 3;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;


        .one {
            background-color: ${BLACK_MAIN};
            width: 100%;
            animation: ${gradient1} 3s ease infinite;
        }

        .two {
            background-color: ${BLUE_MAIN};
            width: 100%;
            animation: ${gradient2} 3s ease infinite;
        }
    }
    
    @media screen and (max-width: 1100px){
        width: 402px;
        height: 232px;
        .top{
            width: 350px;
            height: 125px;
        }
        .bottom {
            width: 350px;
            height: 120px;
        }
        .google{
            width: 315px;
            left: 9px;
            top: -8px;
        }
        .yandex{
            width: 317px;
            bottom: -12px;
        }
    }
    @media screen and (max-width: 1100px){
        width: 327px;
        height: 187px;
        .top{
            width: 283px;
            height: 100px;
        }
        .bottom {
            width: 283px;
            height: 97px;
        }
        .google{
            width: 254px;
            left: 14px;
            top: -21px;
        }
        .yandex{
            width: 257px;
            bottom: -25px;
            right: 16px;
        }
    }

    @media screen and (max-width: 700px){
        margin: 0 0 25px 0;
    }
    @media screen and (max-width: 500px){
        overflow: hidden;
        width: 172px;
        height: 98px;
        .top{
            width: 148px;
            height: 53px;
        }
        .bottom {
            width: 148px;
            height: 50px;
        }
        .google{
            width: 134px;
            left: 7px;
            top: -44px;
        }
        .yandex{
            width: 135px;
            bottom: -52px;
            right: 8px;
        }
    }

`
