import React from 'react';
import Modal from "../Modal/Modal";

const Layout = ({children}) => {

    return (
        <>
            <Modal />
            {children}
        </>
    );
};

export default Layout;