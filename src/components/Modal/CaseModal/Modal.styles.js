import styled from 'styled-components'
import {BLUE_MAIN} from "../../../theme/colors/colors.constants";

export const ModalTag = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1100000;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    overflow: auto;

    ::-webkit-scrollbar {
        width: 0;
    }
    .contentWrapper{
        min-height: 100%;
        max-width: 85vw;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }
    .content {
        flex-basis: 100%;
        img {
            margin: 0 auto;
            width: 85vw;
        }
    }

    .btn {
        width: 76px;
        height: 76px;
        background-color: ${BLUE_MAIN};
        border-radius: 100%;
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .prev {
        left: 32px;
    }

    .next {
        right: 32px;
    }

    .close {
        width: 76px;
        height: 76px;
        background-color: ${BLUE_MAIN};
        position: fixed;
        right: 32px;
        top: 40px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        svg{
            width: 36px;
        }
    }

    @media screen and (max-width: 800px) {
        .close {
            width: 53px;
            height: 53px;
            right: 32px;
            top: 25px;
            svg{
                width: 60%;
            }
        }

        .btn {
            width: 53px;
            height: 53px;

            img {
                width: 80%;
            }
        }

    }
    @media screen and (max-width: 550px) {
        .contentWrapper{
            width: 100vw;
            max-width: none;
        } 
        .content{
            img{
                width: 100vw;
            }
        }

        .close {
            width: 29px;
            height: 29px;
            right: 15px;
            top: 16px;
            svg{
                width: 15px;
            }
        }   

        .btn {
            width: 29px;
            height: 29px;
            padding: 0;

            img {
                width: 19px;
            }
        }

        .prev {
            left: 15px;
        }

        .next {
            right: 15px;
        }
    }
`
