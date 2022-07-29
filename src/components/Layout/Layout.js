import React from 'react';
import Modal from "../Modal/Modal";
import {useSelector} from "react-redux";
import ScrollLock from "react-scrolllock";

const Layout = ({children}) => {
    return (
        <div style={{overflow: 'hidden'}}>
            {/*<ScrollLock isActive={true}/>*/}
            <Modal />
            {children}
        </div>
    );
};

export default Layout;