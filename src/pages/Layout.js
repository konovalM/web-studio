import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

const Layout = ({children}) => {
    const isMenu = useSelector((state) => state.menu.isMenu)
    const dispatch = useDispatch()
    let location = useLocation()
    if (!isMenu){
        document.querySelector('body').style.position = 'static'
        document.querySelector('body').style.width = 'auto'
    }
    useEffect(() => {
        dispatch({type: 'CLOSE_MENU'})
    }, [location])
    return (
        <>
            <Header isMenu={isMenu}/>
            <Modal />
            <div style={{height: '63px'}}></div>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;