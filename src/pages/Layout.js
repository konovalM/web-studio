import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div style={{height: '63px'}}></div>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;