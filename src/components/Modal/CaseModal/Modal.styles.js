import styled from 'styled-components'
import {BLUE_MAIN} from "../../../theme/colors/colors.constants";

export const ModalTag = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1100000;
    width: 100vw;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, .6);
    padding: 40px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 0;
        
    }
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
    .btn{
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
    .prev{
        left: 32px;
    }
    .next{
        right: 32px;
    }
    .close{
        position: fixed;
        right: 53px;
        top: 60px;
        border: none;
        background-color: transparent;
    }
    
    @media screen and (max-width: 800px){
        .close{
            right: 38px;
            top: 28px;
            svg{
                width: 28px;
                height: 28px;  
            }
        }
        .btn {
            width: 53px;
            height: 53px;
            img{
                width: 80%;
            }
        }
        
    }
    @media screen and (max-width: 550px){
        .content{
            img{
                max-width: 100vw;
            }
        }
        .close{
            right: 19px;
            top: 21px;
            padding: 0;

            svg{
                width: 20px;
                height: 20px;
            }
        }
        .btn {
            width: 29px;
            height: 29px;
            padding: 0;
            img{
                width: 19px;
            }
        }
        .prev{
            left: 15px;
        }
        .next{
            right: 15px;
        }
    }
`
