import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal/Modal";

const Layout = ({children}) => {
    return (
        <>
            <Modal />
            <div style={{height: '63px'}}></div>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;