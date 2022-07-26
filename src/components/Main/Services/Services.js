import React from 'react';
import styled from 'styled-components'
import manVector from '../../../images/manVector.svg'
import lines from '../../../images/lines.svg'
import qrCode from '../../../images/qr.svg'
import qrCodeMobile from '../../../images/qrMobile.svg'
import Dash from "../../common/Dash/Dash";
import useWindowSize from "../../../hooks/useWindowSize";
import {ServicesTag} from "./Services.styles";
import trianleEye from '../../../images/triangleEye.svg'
import seoImg from '../../../images/seoImg.svg'
import seoImgMobile from '../../../images/seoImgMobile.svg'
import {AnimateWrapper} from "../../../animations/AnimateWrapper";


const Services = () => {
    let width = useWindowSize()
    return (
        <ServicesTag>
            <div className="container">
                <Dash color={'#000000'} countBefore={3} countAfter={4} top={'0px'}/>
                <h2 className="title" data-aos='fade-down'>Услуги <span className='blue'>><span className="black">/...</span>{`<`}</span></h2>
                <p className="description" data-aos='fade-right'>Предоставим вашему бизнесу комплекс услуг по развитию и продвижению. Создадим техническую часть вашего бизнеса, займемся брендингом и рекламой.</p>
                <div className="gridWrapper">
                    <div className="landing" data-aos='fade-left'>
                        <div className="landingInner">
                            <div className="er er18">er-9817</div>
                            <div className="landingText">лендинги</div>
                        </div>
                    </div>
                    <div className="parsing" data-aos='fade-down'>
                        <div className="parsingWrapper">
                            <DesignSquare cn={'black'}/>
                            <div className="er er14">er-9817</div>
                            <div className="parsingText">парсинг данных</div>
                        </div>
                    </div>
                    <div className="systems" data-aos='fade-right'>
                        <div className="man">
                            <img src={manVector} alt="vector man"/>
                        </div>
                        <div className="systemsWrapper">
                            <div className="er er18">er-9817</div>
                            <div className="systemsText">самописные системы и сервисы</div>
                        </div>
                    </div>
                    <div className="ad" data-aos='fade-right'>
                        <div className="bublik">
                            <img src={lines} alt="lines" className='lines'/>
                        </div>
                        <div className="bublikWrapper">
                            <div className="er er18">er-9817</div>
                            <div className="bublikText">реклама google, yandex</div>
                        </div>
                    </div>
                    <div className="marketing" data-aos='fade-left' data-aos-offset='20'>
                        <div className="marketingWrapper">
                            <div className="er er18">er-9817</div>
                            <div className="marketingText">marketing</div>
                        </div>
                    </div>
                    <div className="seo">
                        <div className="seoImg">
                            <picture>
                                <source srcSet={seoImgMobile} media="(max-width: 720px)" />
                                <img src={seoImg} alt="letters"/>
                            </picture>
                        </div>
                        <div className="seoWrapper">
                            <div className="er er18">er-9817</div>
                            <div className="seoText">seo</div>
                        </div>
                    </div>
                    <div className="sites">
                        <div className="sitesWrapper">
                            <DesignSquare cn={width <= 720 ? 'black' : 'blue'}/>
                            <div className="er er14">er-9817</div>
                            <div className="sitesText">сайты компаний</div>
                        </div>
                    </div>
                    <div className="apps">
                        <div className="appsWrapper">
                            <div className="er er18">er-9817</div>
                            <div className="appsText">приложения</div>
                        </div>
                    </div>
                    <div className="branding">
                        <div className="brandingImg">
                            <div className="brandingAnimationWrapper">
                                <div className="animationInnerPolygon">
                                    <img src={trianleEye} alt="eye" className="eye"/>
                                </div>
                            </div>
                            <div className="brandingWrapper">
                                <div className="er er18">er-9817</div>
                                <div className="brandingText">брендинг и репутация</div>
                            </div>
                        </div>
                    </div>
                    <div className="online">
                        <div className="onlineWrapper">
                            <DesignSquare cn={'black'}/>
                            <div className="er er14">er-9817</div>
                            <div className="onlineText">online<br/>магазины</div>
                        </div>
                    </div>
                    <div className="smm">
                        <div className="smmImg">
                            <picture>
                                <source srcSet={qrCodeMobile} media="(max-width: 720px)" />
                                <img src={qrCode} alt="QR Code"/>
                            </picture>
                        </div>
                        <div className="smmWrapper">
                            <div className="er er18">er-9817</div>
                            <div className="smmText">smm</div>
                        </div>
                    </div>
                </div>
            </div>
        </ServicesTag>
    );
};

const DesignSquareTag = styled.div`
    width: 21px;
    height: 20px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 4px;
    margin-bottom: 24px;
    .blue{
        width: 8px;
        height: 8px;
        background-color: #1E4FCD;
    }
    .white{
        width: 8px;
        height: 8px;
        background-color: #FFFFFF;
    }
    .black{
        width: 8px;
        height: 8px;
        background-color: #1A1A1A;
    }
`
const DesignSquare = ({cn}) => {
    return (
        <DesignSquareTag>
            <div className={cn}></div>
            <div className='white'></div>
            <div className='white'></div>
            <div className={cn}></div>
        </DesignSquareTag>
    )
}

export default Services;