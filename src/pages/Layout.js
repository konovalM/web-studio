import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import CaseModal from "../components/Modal/CaseModal/CaseModal";
import ContactModal from "../components/Modal/ContactModal/ContactModal";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {scrollToElement} from "../utils/scrollToElement";

const Layout = ({children}) => {
    const isMenu = useSelector((state) => state.menu.isMenu)
    const dispatch = useDispatch()
    let location = useLocation()
    if (!isMenu){
        document.querySelector('body').style.position = 'static'
        document.querySelector('body').style.width = 'auto'
    }
    console.log(location)
    useEffect(() => {
        dispatch({type: 'CLOSE_MENU'})
    }, [location])
    useEffect(() => {
        if (location.hash){
            scrollToElement(location.hash)
        }
    }, [location.key])
    return (
        <>
            <Header isMenu={isMenu}/>
            <CaseModal />
            <ContactModal />
            <div style={{height: '63px'}}></div>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;