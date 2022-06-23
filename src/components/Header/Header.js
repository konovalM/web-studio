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
import { Link } from "react-router-dom";
import TgIcon from "../../images/icons/TgIcon";
import VkIcon from "../../images/icons/VkIcon";
import WhatsAppIcon from "../../images/icons/WhatsAppIcon";
import MessagesIcon from "../../images/icons/MessagesIcon";

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
    .listItem:last-child::before{
        content: '';
        position: absolute;
        width: 5px;
        height: 9px;
        left: 3px;
        top: 50%;
        transform: translateY(-50%);
        background: url(${arrowRight})center center/cover no-repeat;
        transition: .1s all;
    }
    .rotate:last-child::before{
        transform: rotate(90deg) translateX(-50%);
        top: 42%;
    }
    .listItem:last-child{
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
  .listItem:first-child{
    position: relative;
  }
  .listItem:first-child::before{
    content: '';
    width: 23px;
    height: 3px;
    background-color: #1E4FCD;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .listItem + .listItem {
    margin-left: 33px;
  }
    .listItem:last-child{
        padding-left: 15px;
        margin-left: 18px;
    }
  .second {
    display: flex;
    flex-direction: column;
    .itemLink{
      position: relative;
    }
    .itemLink::before{
      content: '';
      position: absolute;
      width: 24px;
      height: 9px;
    }
    .itemLink:first-child::before{
      left: -28px;
      bottom: 0px;
      background: url(${topLine})center center/cover no-repeat;
    }
    .itemLink:last-child::before{
      left: -28px;
      top: 2px;
      background: url(${bottomLine})center center/cover no-repeat;
    }
    .itemLink + .listItem {
      margin-top: 2px;
    }
  }
  .language{
    margin-left: 95px;
    position: relative;
  }
  .language::before{
    content: '';
    position: absolute;
    width: 5px;
    height: 9px;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    background: url(${arrowRight})center center/cover no-repeat;
  }
  .socials{
    margin-left: 42px;
    display: flex;
  }
  .social+.social{
    margin-left: 20px;
  }
  .social:nth-child(2){
    display: flex;
    align-items: center;
  }
  .contacts{
    margin-left: auto;
  }
  .burger{
    display: none;
  }

    .dropdown-content {
        display: none;
        position: absolute;
        top: 29px;
        background-color: #1A1A1A;
        width: 186px;
        height: 167px;
        z-index: 1;
        padding: 9px 0 18px 18px;
        left: -12px;
    }
    .dropdown {
        position: relative;
    }
    .otherLink{
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        display: block;
        position: relative;
    }
    .otherLink::before{
        content: '';
        width: 23px;
        height: 3px;
        background-color: #1E4FCD;
        position: absolute;
        bottom: -4px;
        left: 0;
    }
    .otherLink+.otherLink{
        margin-top: 15px;
    }
    .dropdown-content-active {display: block;}

  
  // ADAPTIVE
  
  @media (max-width: 1310px){
    .language{
      margin-left: 25px;
    }
    .contacts{
      margin-left: 25px;
    }
    .listItem + .listItem{
      margin-left: 20px;
    }
    .listItem:nth-child(2){
      margin-left: 33px;
    }
    .burger{
      display: flex;
      flex-direction: column;
      
    }
  }

`


const HeaderDesktop = () => {
    const [menuActive, setMenuActive] = useState(false)

    const changeMenuActive = () => {
        setMenuActive(!menuActive)
    }
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
                                    <a href="#" className='itemLink'>Сайты</a>
                                </li>
                                <li className="listItem">
                                    <div className="second">
                                        <a href="#" className="itemLink">Кейсы и цены</a>
                                        <a href="#" className="itemLink">Услуги</a>
                                    </div>
                                </li>
                                <li className="listItem">
                                    <Link to="/context" className='itemLink'>Контекст</Link>
                                </li>
                                <li className="listItem">
                                    <Link to="/seo" className='itemLink'>SEO</Link>
                                </li>
                                <li className="listItem">
                                    <Link to="/smm" className='itemLink'>SMM</Link>
                                </li>
                                <li className="listItem">
                                    <Link to="/marketing" className='itemLink'>Маркетинг</Link>
                                </li>
                                <li className={menuActive ? 'rotate listItem other' :'listItem other'} onClick={() => changeMenuActive()}>
                                    <div className="dropdown">
                                        <div className='itemLink itemLinkMenu'>Другие услуги</div>
                                        <div className={menuActive? 'dropdown-content dropdown-content-active' : 'dropdown-content'}>
                                            <Link to="/apps" className='otherLink'>Приложения</Link>
                                            <Link to="/systems" className='otherLink'>Самописные системы</Link>
                                            <Link to="/parser" className='otherLink'>Парсинг</Link>
                                            <Link to="/apps" className='otherLink'>Работа с репутацией</Link>
                                            <Link to="/marketing" className='otherLink'>Брендинг</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <div className="language">Ru</div>
                        <div className="socials">
                            <div className="social">
                                <a href="#">
                                    <img src={telegram} alt="telegram"/>
                                </a>
                            </div>
                            <div className="social">
                                <a href="#">
                                    <img src={vk} alt="vk"/>
                                </a>
                            </div>
                            <div className="social">
                                <a href="#">
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
                            <div className="contact">
                                <a href="#">+ 7 981 103 65 38</a>
                            </div>
                            <div className="contact">
                                test_mail@gmail.com
                            </div>
                        </div>

                    </div>
                </div>
            </HeaderTag>
        </Fragment>
    );
};



const HeaderLaptop = () => {
    const [active, setActive] = useState(false)
    const toggleActiveClass = () => {
        setActive(!active)
        if (!active){
            document.getElementById('root').style.position = 'fixed'
        } else {
            document.getElementById('root').style.position = 'static'
        }
    }
    return (
        <Fragment>
            <header className={!active ? styles.header : `${styles.header} ${styles.headerActive}`}>
                <div className="container">
                    <div className={!active ? styles.wrapper : styles.wrapper + ' ' + styles.wrapperActive}>
                        <a href="#" className="">
                            <img src={logoMobile} alt="" className={styles.logoImg}/>
                        </a>
                        <div className={styles.list}>
                            <div className={!active ? `${styles.listItem} ${styles.main}` : `${styles.listItem} ${styles.main} ${styles.mainActive}`}>
                                <a href="#" className={styles.itemLink}>Сайты</a>
                            </div>
                            <div className={styles.listItem}>
                                <div className={styles.second}>
                                    <a href="#" className={styles.itemLink}>Кейсы и цены</a>
                                    <a href="#" className={styles.itemLink}>Услуги</a>
                                </div>
                            </div>
                        </div>
                        <div className={!active ? styles.socials : styles.socials + ' ' + styles.socialsWhite}>
                            <div className={styles.social}>
                                <a href="#">
                                    <TgIcon />
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
                            <a href="#" className={styles.contactNumber}>+ 7 981 103 65 38</a>
                        </div>
                        <div className={styles.burger} onClick={() => toggleActiveClass()}>
                            <span className={!active ? styles.burgerElement : styles.burgerElement + ' ' + styles.burgerElementActive}></span>
                            <span className={!active ? styles.burgerElement : styles.burgerElement + ' ' + styles.burgerElementActive}></span>
                            <span className={!active ? styles.burgerElement : styles.burgerElement + ' ' + styles.burgerElementActive}></span>
                        </div>
                    </div>
                </div>
            </header>
            <div className={!active ? styles.menu : styles.menu + ' ' + styles.menuActive}>
                <div className={!active ? styles.menuInner : styles.menuInner}>
                    <div className="container">
                        <div className={styles.menuWrapper}>
                            <div className={styles.language}>Ru</div>
                            <div className={styles.sites}>
                                <div className={styles.left}>
                                    <a href="#" className={styles.linkSites}>
                                        Сайты
                                    </a>
                                </div>
                                <div className={styles.right}>
                                    <a href="#" className={styles.linkSites}>Кейсы и цены</a>
                                    <a href="#" className={styles.linkSites}>Услуги</a>
                                </div>
                            </div>
                            <a href="#" className={styles.link}>Самописные системы</a>
                            <a href="#" className={styles.link}>Парсинг</a>
                            <a href="#" className={styles.link}>Приложения</a>
                            <a href="#" className={styles.link}>Контекст Google/Yandex</a>
                            <a href="#" className={styles.link}>SEO</a>
                            <a href="#" className={styles.link}>SMM</a>
                            <a href="#" className={styles.link}>Брендинг и репутация</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

const HeaderMobile = () => {
    const [active, setActive] = useState(false)
    const toggleActiveClass = () => {
        setActive(!active)
        if (!active){
            document.getElementById('root').style.position = 'fixed'
        } else {
            document.getElementById('root').style.position = 'static'
        }
    }
    return (
        <Fragment>
            <header className={!active ? styles.header : `${styles.header} ${styles.headerActive}`}>
                <div className="container">
                    <div className={!active ? styles.wrapper : styles.wrapper + ' ' + styles.wrapperActive}>
                        <a href="#" className="">
                            <img src={logoMobile} alt="" className={styles.logoImg}/>
                        </a>

                        <div className={styles.contact}>
                            <a href="#" className={styles.contactNumber}>+ 7 981 103 65 38</a>
                        </div>
                        <div className={styles.burger} onClick={() => toggleActiveClass()}>
                            <span className={!active ? styles.burgerElement : styles.burgerElement + ' ' + styles.burgerElementActive}></span>
                            <span className={!active ? styles.burgerElement : styles.burgerElement + ' ' + styles.burgerElementActive}></span>
                            <span className={!active ? styles.burgerElement : styles.burgerElement + ' ' + styles.burgerElementActive}></span>
                        </div>
                    </div>
                </div>
            </header>
            <div className={!active ? styles.menu : styles.menu + ' ' + styles.menuActive}>
                <div className={!active ? styles.menuInner : styles.menuInner}>
                    <div className="container">
                        <div className={styles.menuWrapper}>
                            <div className={styles.language}>Ru</div>
                            <div className={styles.sites}>
                                <div className={styles.left}>
                                    <a href="#" className={styles.linkSites}>
                                        Сайты
                                    </a>
                                </div>
                                <div className={styles.right}>
                                    <a href="#" className={styles.linkSites}>Кейсы и цены</a>
                                    <a href="#" className={styles.linkSites}>Услуги</a>
                                </div>
                            </div>
                            <a href="#" className={styles.link}>Самописные системы</a>
                            <a href="#" className={styles.link}>Парсинг</a>
                            <a href="#" className={styles.link}>Приложения</a>
                            <a href="#" className={styles.link}>Контекст Google/Yandex</a>
                            <a href="#" className={styles.link}>SEO</a>
                            <a href="#" className={styles.link}>SMM</a>
                            <a href="#" className={styles.link}>Брендинг и репутация</a>
                            <div className={styles.contacts}>
                                <div className={styles.number}>+ 7 981 103 65 38</div>
                                <div className={styles.mail}>test_ mail@gmail.com</div>
                            </div>
                            <div className={!active ? styles.socials : styles.socials + ' ' + styles.socialsWhite}>
                                <div className={styles.social}>
                                    <a href="#">
                                        <TgIcon />
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


const Header = () => {
    const headers = [<HeaderMobile/>, <HeaderLaptop/>, <HeaderDesktop/>]
    let header;

    const sizeWidth = useWindowSize();
    if (sizeWidth < 630){
        header = headers[0]
    } else if (sizeWidth < 1100){
        header = headers[1]
    } else {
        header = headers[2]
    }
    return (
        <Fragment>
            {header}
        </Fragment>
    );
};

export default Header;

