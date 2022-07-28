import React from 'react';
import Modal from "../Modal/Modal";
import {useSelector} from "react-redux";

const Layout = ({children}) => {
    return (
        <div style={{overflow: 'hidden'}}>
            <Modal />
            {children}
        </div>
    );
};

export default Layout;