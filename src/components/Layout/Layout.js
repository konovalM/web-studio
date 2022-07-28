import React from 'react';
import Modal from "../Modal/Modal";
import ScrollLock from "react-scrolllock";
import {useSelector} from "react-redux";

const Layout = ({children}) => {
    const isModal = useSelector((state) => state.modal.isModal)
    return (
        <div style={{overflow: 'hidden'}}>
            <Modal />
            <ScrollLock isActive={isModal}>
                {children}
            </ScrollLock>
        </div>
    );
};

export default Layout;