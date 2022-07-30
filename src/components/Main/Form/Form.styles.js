import styled from 'styled-components'

export const FormTag = styled.div`
    padding: 0;
    .formWrapper{
        width: 750px;
        background-color: #1A1A1A;
        margin: 0 auto 22px;
        padding: 30px 7px 30px 30px;
        position: relative;
    }
    .formWrapper::before, .formWrapper::after{
        content: '';
        width: 60px;
        height: 220px;
        background-color: #1A1A1A;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .formWrapper::before{
        left: -80px;
    }
    .formWrapper::after{
        right: -80px;
    }
    .form{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .inputs{
        flex: 0 1 330px;
    }
    .other{
        flex: 0 1 350px;
    }
    .input{
        width: 100%;
        height: 51px;
        font-size: 18px;
        line-height: 21px;
        color: #1A1A1A;
        padding-left: 24px;
    }
    .input::placeholder{
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #9D9D9D;
    }
    .input+.input{
        margin-top: 20px;
    }
    .socials{
        width: 141px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto 20px;
        height: 51px;
    }
    .agreement{
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        padding-right: 3px;
        margin-bottom: 16px;
    }
    .special{
        text-decoration-line: underline;
    }
    .question_consultation{
        background: #1E4FCD;
        width: 271px;
        height: 52px;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #FFFFFF;
        border: none;
        cursor: pointer;
    }
    .contactsWrapper{
        display: flex;
        height: 133px;
        max-width: 750px;
        align-items: center;
        margin: 0 auto;
        overflow: hidden;
        background-color: #1E4FCD;
    }
    .animation{
        flex: 0 1 440px;
    }
    .contacts{
        flex-grow: 1;
    }
    .contact{
        text-align: center;
    }
    .contact+.contact{
        margin-top: 12px;
    }
    .contact, .mail{
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
    .contactPhone{
        color: #FFFFFF;
    }
    .btnWrapper{
        margin-top: 32px;
        display: flex;
        justify-content: flex-start;
        width: 353px;
    }
    .points-questions{
        width: 82px;
        position: relative;
    }
    .question_1{
        width: 26px;
        height: 50%;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
    }
    .question_2{
        width: 26px;
        height: 50%;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        right: 0;
    }
    .contacts__socials{
        display: none;
    }

    // ADAPTIVE
    @media (max-width: 991px){
        .title{
            font-size: 80px;
            line-height: 100%;
        }
        .description{
            margin-bottom: 42px;
        }
        .formWrapper{
            width: 738px;
        }
        .formWrapper::before{
            width: 0;
            height: 0;
        }
        .formWrapper::after{
            width: 0;
            height: 0;
        }
        .input{
            width: 309px;
        }
        .contactsWrapper{
            width: 738px;
        }
    }
    @media (max-width: 767px){
        .title{
            font-size: 45px;
            line-height: 100%;
            margin-bottom: 18px;
        }
        .description{
            margin-bottom: 90px;
            font-size: 16px;
            line-height: 19px;
        }
        .br{
            display: block;
        }
        .formOutside{
            padding: 0 5px;
        }
        .formWrapper{
            margin: 0 auto 90px;
            max-width: 290px;
            padding: 30px 10px;
        }
        .formWrapper::before{
            width: 264px;
            height: 40px;
            top: -50px;
            left: 50%;
            transform: translateX(-50%);
        }
        .formWrapper::after{
            bottom: -50px;
            width: 264px;
            height: 40px;
            top: auto;
            left: 50%;
            transform: translateX(-50%);
        }

        .inputs{
            flex: 0 1 auto;
            max-width: 100%;
            margin-bottom: 20px;
        }
        .other{
            flex: 0 1 auto;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            margin: 0;
        }
        .agreement{
            font-size: 14px;
            line-height: 150%;
        }
        .btnWrapper{
            width: auto;
            margin: 0 0 30px 0;
        }
        .socials{
            order: 3;
            width: 141px;
            margin: 0 auto;
            height: auto;
        }
        .input{
            width: 100%;
        }

        .question_consultation{
            width: 207px;
            height: 40px;
            font-size: 13.7677px;
            line-height: 16px;
        }
        .points-questions{
            width: 63px;
        }
        .question_1, .question_2{
            width: 20px;
        }
        .socials{
        }
        .contactsWrapper{
            width: 290px;
            height: 302px;
            flex-direction: column;
        }
        .contacts{
            flex-grow: unset;
            height: 170px;
            padding: 0 27px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .contactPhone{
            font-size: 18px;
            line-height: 21px;
        }
        .mail{
            font-size: 18px;
            line-height: 21px;
            margin-bottom: 20px;
        }
        .animation{
            flex: 0 1 auto;
            order: 2;
        }
        .contacts__socials{
            display: flex;
            justify-content: center;
        }
        .social+.social{
            margin-left: 18px;
        }
    }
    @media(max-width: 425px){
        .formWrapper{
            margin: 0 auto 90px;
            max-width: unset;
            width: 100%;
            padding: 30px 10px;
            ::before{
                width: 91%;
            }
            ::after{
                width: 91%;
            }
        }
    }
`