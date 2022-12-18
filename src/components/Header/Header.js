import React, {Fragment, useEffect, useState} from 'react';
import styled from 'styled-components'
import telegram from '../../images/telegram.svg'
import vk from '../../images/vk.svg'
import whatsup from '../../images/whatsup.svg'
import messages from '../../images/messages.svg'
import logotype from '../../images/logoDesktop.svg'
import logoMobile from '../../images/logotype.svg'
import topLine from '../../images/topLine.svg'
import bottomLine from '../../images/bottomLine.svg'
import arrowRight from '../../images/arrowRight.svg'
import useWindowSize from "../../hooks/useWindowSize";
import styles from './Header.module.css'
import {Link, NavLink} from "react-router-dom";
import TgIcon from "../../images/icons/TgIcon";
import VkIcon from "../../images/icons/VkIcon";
import WhatsAppIcon from "../../images/icons/WhatsAppIcon";
import MessagesIcon from "../../images/icons/MessagesIcon";
import LinkTo from "../Navigation/LinkTo";
import {useDispatch} from "react-redux";
import {scrollToElement} from "../../utils/scrollToElement";

const HeaderTag = styled.header`
    height: 63px;
    padding: 2px 0;
    box-shadow: 0px 7px 10px rgba(157, 157, 157, 0.3);
    z-index: 1000;
    width: 100vw;
    background-color: #fff;
    position: fixed;
    left: 0;
    top: 0;

    .wrapper {
        display: flex;
        align-items: center;
    }

    .logo {
        margin-right: 59px;
    }

    .list {
        display: flex;
        align-items: center;
    }

    .listItem:last-child::before {
        content: '';
        position: absolute;
        width: 5px;
        height: 9px;
        left: 3px;
        top: 50%;
        transform: translateY(-50%);
        background: url(${arrowRight}) center center/cover no-repeat;
        transition: .3s all;
    }

    .rotate:last-child::before {
        transition: .3s all;
        transform: rotate(90deg) translateX(-50%);
        top: 42%;
    }

    .listItem:last-child {
        moz-user-select: none;
        -khtml-user-select: none;
        user-select: none;
        position: relative;
        cursor: pointer;
    }

    .itemLink {
        color: #1A1A1A;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
    }

    .listItem:first-child {
        position: relative;
    }

    .active::before {
        content: '';
        width: 23px;
        height: 3px;
        background-color: #1E4FCD;
        position: absolute;
        left: 0;
        bottom: -2px;
    }

    .listItem + .listItem {
        margin-left: 33px;
    }

    .listItem:last-child {
        padding-left: 15px;
        margin-left: 18px;
    }

    .itemLink {
        position: relative;
    }

    .second {
        display: flex;
        flex-direction: column;

        .itemLink::before {
            content: '';
            position: absolute;
            width: 24px;
            height: 9px;
        }

        .itemLink:first-child::before {
            left: -28px;
            bottom: 0px;
            background: url(${topLine}) center center/cover no-repeat;
        }

        .itemLink:last-child::before {
            left: -28px;
            top: 2px;
            background: url(${bottomLine}) center center/cover no-repeat;
        }

        .itemLink + .listItem {
            margin-top: 2px;
        }
    }

    .language {
        margin-left: 95px;
        position: relative;
        cursor: pointer;
        padding-left: 11px;
    }

    .language::before {
        content: '';
        position: absolute;
        width: 5px;
        height: 9px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background: url(${arrowRight}) center center/cover no-repeat;
        transition: .3s transform;
    }
    .language.rotate::before{
        transform: translateY(-50%) rotate(90deg);
    }

    .socials {
        margin-left: 42px;
        display: flex;
    }

    .social + .social {
        margin-left: 20px;
    }

    .social:nth-child(2) {
        display: flex;
        align-items: center;
    }

    .contacts {
        margin-left: auto;
    }
    .contact{
        color: #1A1A1A;
    }

    .burger {
        display: none;
    }

    .dropdown-content {
        background-color: #1A1A1A;
        width: 186px;
        z-index: 1;
        padding: 9px 0 18px 18px;
    }

    .dropdown-lang {
        background-color: #1A1A1A;
        width: 62px;
        height: 74px;
        z-index: 1;
        padding: 9px 0 18px 18px;
    }
    .dropdown-lang .otherLink{
        cursor: pointer;
    }

    .dropdown {
        position: relative;
    }
    .dropdown-wrapper-lang{
        visibility: hidden;
        position: absolute;
        top: 100%;
        left: -12px;
        padding-top: 20px;
        transition: .3s all;
        cursor: default;
        opacity: 0;
    }
    .language:hover .dropdown-wrapper-lang,
    .language .dropdown-wrapper-lang:hover{
        visibility: visible;
        opacity: 1;
    }
    .dropdown-wrapper{
        position: absolute;
        visibility: hidden;
        opacity: 0;
        left: -50%;
        top: 100%;
        padding-top: 20px;
        transition: .3s all;
        cursor: default;
    }
    .other{
        cursor: unset;
    }
    .other:hover .dropdown-wrapper,
    .other .dropdown-wrapper:hover{
        visibility: visible;
        opacity: 1;
    }

    .otherLink {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        display: block;
        position: relative;
    }

    .otherLink + .otherLink {
        margin-top: 15px;
    }


    // ADAPTIVE

    @media (max-width: 1310px) {
        .language {
            margin-left: 25px;
        }

        .contacts {
            margin-left: 25px;
        }

        .listItem + .listItem {
            margin-left: 20px;
        }

        .listItem:nth-child(2) {
            margin-left: 33px;
        }

        .burger {
            display: flex;
            flex-direction: column;

        }
    }

`


const HeaderDesktop = () => {
    const [isHoverLang, handleIsHoverLang] = useState(false)
    const [isHover, handleIsHover] = useState(false)
    return (
        <Fragment>
            <HeaderTag className="header">
                <div className="container">
                    <div className="wrapper">
                        <div className="logo">
                            <Link to="/">
                                <img src={logotype} alt="logotype"/>
                            </Link>
                        </div>
                        <nav className="nav">
                            <ul className="list">
                                <li className="listItem">
                                    <LinkTo src="/" className='itemLink'>Сайты</LinkTo>
                                </li>
                                <li className="listItem">
                                    <div className="second">
                                        <Link to='/#prices' className="itemLink">Кейсы и цены</Link>
                                        <Link to="/#services" className="itemLink">Услуги</Link>
                                    </div>
                                </li>
                                <li className="listItem">
                                    <LinkTo src="/context" className='itemLink'>Контекст</LinkTo>
                                </li>
                                <li className="listItem">
                                    <LinkTo src="/seo" className='itemLink'>SEO</LinkTo>
                                </li>
                                <li className="listItem">
                                    <LinkTo src="/smm" className='itemLink'>SMM</LinkTo>
                                </li>
                                <li className="listItem">
                                    <LinkTo src="/branding" className='itemLink'>Маркетинг</LinkTo>
                                </li>
                                <li className={isHover ? 'listItem other rotate' : 'listItem other'}>
                                    <div className="dropdown">
                                        <div className='itemLink itemLinkMenu' onMouseEnter={() => handleIsHover(true)} onMouseLeave={() => handleIsHover(false)}>Другие услуги</div>
                                        <div className="dropdown-wrapper"  onMouseEnter={() => handleIsHover(true)} onMouseLeave={() => handleIsHover(false)}>
                                            <div className='dropdown-content'>
                                                <LinkTo src="/apps" className='otherLink'>Приложения</LinkTo>
                                                <LinkTo src="/systems" className='otherLink'>Самописные системы</LinkTo>
                                                <LinkTo src="/parser" className='otherLink'>Парсинг</LinkTo>
                                                <LinkTo src="/branding" className='otherLink'>Брендинг и репутация</LinkTo>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <div className={isHoverLang ? "language rotate" : "language"} onMouseEnter={() => handleIsHoverLang(true)} onMouseLeave={() => handleIsHoverLang(false)}>
                            <div className='itemLink itemLinkMenu'>Ru</div>
                            <div className="dropdown-wrapper-lang" onMouseEnter={() => handleIsHoverLang(true)} onMouseLeave={() => handleIsHoverLang(false)}>
                                <div className='dropdown-lang'>
                                    <p className='otherLink'>En</p>
                                    <p className='otherLink'>中文</p>
                                </div>
                            </div>
                        </div>
                        <div className="socials">
                            <div className="social">
                                <a href="https://t.me/ozzodesign">
                                    <img src={telegram} alt="telegram"/>
                                </a>
                            </div>
                            <div className="social">
                                <a href="https://goo.su/68zywvz">
                                    <img src={vk} alt="vk"/>
                                </a>
                            </div>
                            <div className="social">
                                <a href="https://goo.su/fJkCxhc">
                                    <img src={whatsup} alt="whatsup"/>
                                </a>
                            </div>
                            <div className="social">
                                <a href="#">
                                    <img src={messages} alt="messages"/>
                                </a>
                            </div>
                        </div>
                        <div className="contacts">
                            <script>/*
                            <div className="contact">
                                <a href="tel:+98765432100">+ 9 876 543 21 00</a>
                            </div>
                            */</script>
                            <div className="contact">
                                cube80ag@gmail.com
                            </div>
                        </div>

                    </div>
                </div>
            </HeaderTag>
        </Fragment>
    );
};


const HeaderLaptop = ({isMenu}) => {
    const dispatch = useDispatch()
    const [langActive, setLangActive] = useState(false)
    const changeLangActive = () => {
        setLangActive(!langActive)
    }
    const toggleActiveClass = () => {
        dispatch({type: 'TOGGLE_MENU', payload: !isMenu})
        if (!isMenu) {
            document.querySelector('body').style.position = 'fixed'
            document.querySelector('body').style.width = '100vw'
        } else {
            document.querySelector('body').style.position = 'static'
            document.querySelector('body').style.width = 'auto'
        }
    }
    return (
        <Fragment>
            <header className={!isMenu ? styles.header : `${styles.header} ${styles.headerActive}`}>
                <div className="container">
                    <div className={!isMenu ? styles.wrapper : styles.wrapper + ' ' + styles.wrapperActive}>
                        <Link to="/">
                            <img src={logoMobile} alt="" className={styles.logoImg}/>
                        </Link>
                        <div className={styles.list}>
                            <div
                                className={!isMenu ? `${styles.listItem} ${styles.main}` : `${styles.listItem} ${styles.main} ${styles.mainActive}`}>
                                <Link to="/" className={styles.itemLink}>Сайты</Link>
                            </div>
                            <div className={styles.listItem}>
                                <div className={styles.second}>
                                    <Link to='/#prices' className={styles.itemLink}>Кейсы и цены</Link>
                                    <Link to="/#services" className={styles.itemLink}>Услуги</Link>
                                </div>
                            </div>
                        </div>
                        <div className={!isMenu ? styles.socials : styles.socials + ' ' + styles.socialsWhite}>
                            <div className={styles.social}>
                                <a href="#">
                                    <TgIcon/>
                                </a>
                            </div>
                            <div className={styles.social}>
                                <a href="#">
                                    <VkIcon/>
                                </a>
                            </div>
                            <div className={styles.social}>
                                <a href="#">
                                    <WhatsAppIcon/>
                                </a>
                            </div>
                            <div className={styles.social}>
                                <a href="#">
                                    <MessagesIcon/>
                                </a>
                            </div>
                        </div>
                        <div className={styles.contact}>
                            <a href="tel:+98765432100" className={styles.contactNumber}>+ 9 876 543 21 00</a>
                        </div>
                        <div className={styles.burger} onClick={() => toggleActiveClass()}>
                            <span
                                className={!isMenu ? styles.burgerElement : styles.burgerElement + ' ' + styles.burgerElementActive}></span>
                            <span
                                className={!isMenu ? styles.burgerElement : styles.burgerElement + ' ' + styles.burgerElementActive}></span>
                            <span
                                className={!isMenu ? styles.burgerElement : styles.burgerElement + ' ' + styles.burgerElementActive}></span>
                        </div>
                    </div>
                </div>
            </header>
            <div className={!isMenu ? styles.menu : styles.menu + ' ' + styles.menuActive}>
                <div className={!isMenu ? styles.menuInner : styles.menuInner}>
                    <div className="container">
                        <div className={styles.menuWrapper}>
                            <div>
                                <div className={styles.language} onClick={() => changeLangActive()}>
                                    <div className={styles.dropdown}>
                                        <div className={`${styles.itemLink} ${styles.whiteColor}`}>Ru</div>
                                        <div
                                            className={langActive ? `${styles.dropdownLang} ${styles.dropdownContentActive}` : styles.dropdownLang}>
                                            <p className={styles.otherLink}>En</p>
                                            <p className={styles.otherLink}>中文</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.sites}>
                                <div className={styles.left}>
                                    <LinkTo src="/" className={styles.linkSites}>
                                        Сайты
                                    </LinkTo>
                                </div>
                                <div className={styles.right}>
                                    <Link to="/#prices" className={styles.linkSites}>Кейсы и цены</Link>
                                    <Link to="/#services" className={styles.linkSites}>Услуги</Link>
                                </div>
                            </div>
                            <LinkTo src="/systems" className={styles.link}>Самописные системы</LinkTo>
                            <LinkTo src='/parser' className={styles.link}>Парсинг</LinkTo>
                            <LinkTo src="/apps" className={styles.link}>Приложения</LinkTo>
                            <LinkTo src="/context" className={styles.link}>Контекст Google/Yandex</LinkTo>
                            <LinkTo src="/seo" className={styles.link}>SEO</LinkTo>
                            <LinkTo src="/smm" className={styles.link}>SMM</LinkTo>
                            <LinkTo src="/branding" className={styles.link}>Брендинг и репутация</LinkTo>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

const HeaderMobile = ({isMenu}) => {
    const [langActive, setLangActive] = useState(false)
    const dispatch = useDispatch()
    const changeLangActive = () => {
        setLangActive(!langActive)
    }
    const toggleActiveClass = () => {
        dispatch({type: 'TOGGLE_MENU', payload: !isMenu})
        if (!isMenu) {
            document.querySelector('body').style.position = 'fixed'
            document.querySelector('body').style.width = '100vw'
        } else {
            document.querySelector('body').style.position = 'static'
            document.querySelector('body').style.width = 'auto'
        }
    }
    return (
        <Fragment>
            <header className={!isMenu ? styles.header : `${styles.header} ${styles.headerActive}`}>
                <div className="container">
                    <div className={!isMenu ? styles.wrapper : styles.wrapper + ' ' + styles.wrapperActive}>
                        <Link to="/">
                            <img src={logoMobile} alt="" className={styles.logoImg}/>
                        </Link>

                        <div className={styles.contact}>
                            <a href="tel:+98765432100" className={styles.contactNumber}>+ 9 876 543 21 00</a>
                        </div>
                        <div className={styles.burger} onClick={() => toggleActiveClass()}>
                            <span
                                className={!isMenu ? styles.burgerElement : styles.burgerElement + ' ' + styles.burgerElementActive}></span>
                            <span
                                className={!isMenu ? styles.burgerElement : styles.burgerElement + ' ' + styles.burgerElementActive}></span>
                            <span
                                className={!isMenu ? styles.burgerElement : styles.burgerElement + ' ' + styles.burgerElementActive}></span>
                        </div>
                    </div>
                </div>
            </header>
            <div className={!isMenu ? styles.menu : styles.menu + ' ' + styles.menuActive}>
                <div className={!isMenu ? styles.menuInner : styles.menuInner}>
                    <div className="container">
                        <div className={styles.menuWrapper}>
                            <div>
                                <div className={styles.language} onClick={() => changeLangActive()}>
                                    <div className={styles.dropdown}>
                                        <div className={`${styles.itemLink} ${styles.whiteColor}`}>Ru</div>
                                        <div
                                            className={langActive ? `${styles.dropdownLang} ${styles.dropdownContentActive}` : styles.dropdownLang}>
                                            <p className={styles.otherLink}>En</p>
                                            <p className={styles.otherLink}>中文</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.sites}>
                                <div className={styles.left}>
                                    <LinkTo src="/" className={styles.linkSites}>
                                        Сайты
                                    </LinkTo>
                                </div>
                                <div className={styles.right}>
                                    <Link to="/#prices" className={styles.linkSites}>Кейсы и цены</Link>
                                    <Link to="/#services" className={styles.linkSites}>Услуги</Link>
                                </div>
                            </div>
                            <LinkTo src="/systems" className={styles.link}>Самописные системы</LinkTo>
                            <LinkTo src='/parser' className={styles.link}>Парсинг</LinkTo>
                            <LinkTo src="/apps" className={styles.link}>Приложения</LinkTo>
                            <LinkTo src="/context" className={styles.link}>Контекст Google/Yandex</LinkTo>
                            <LinkTo src="/seo" className={styles.link}>SEO</LinkTo>
                            <LinkTo src="/smm" className={styles.link}>SMM</LinkTo>
                            <LinkTo src="/branding" className={styles.link}>Брендинг и репутация</LinkTo>
                            <div className={styles.contacts}>
                                <a href='tel:+98765432100' className={styles.number}>+ 9 876 543 21 00</a>
                                <div className={styles.mail}>test_ mail@gmail.com</div>
                            </div>
                            <div className={!isMenu ? styles.socials : styles.socials + ' ' + styles.socialsWhite}>
                                <div className={styles.social}>
                                    <a href="#">
                                        <TgIcon/>
                                    </a>
                                </div>
                                <div className={styles.social}>
                                    <a href="#">
                                        <VkIcon/>
                                    </a>
                                </div>
                                <div className={styles.social}>
                                    <a href="#">
                                        <WhatsAppIcon/>
                                    </a>
                                </div>
                                <div className={styles.social}>
                                    <a href="#">
                                        <MessagesIcon/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};


const Header = ({isMenu}) => {
    const sizeWidth = useWindowSize();
    return (
        <Fragment>
            {
                sizeWidth < 630 ?
                    <HeaderMobile isMenu={isMenu}/>
                    :
                    sizeWidth < 1100 ?
                        <HeaderLaptop isMenu={isMenu}/>
                        :
                        <HeaderDesktop />
            }
        </Fragment>
    );
};

export default Header;

