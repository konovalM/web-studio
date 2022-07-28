import React from 'react';
import Modal from "../Modal/Modal";

const Layout = ({children}) => {

    return (
        <div style={{overflow: 'hidden'}}>
            <Modal />
            {children}
        </div>
    );
};

export default Layout;