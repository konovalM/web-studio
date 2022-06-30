import React from 'react';
import {Link, NavLink} from "react-router-dom";
import styled from 'styled-components'
import styles from '../Header/Header.module.css'
import useWindowSize from "../../hooks/useWindowSize";


const LinkTo = ({ src, children, className }) => {
    const toStatic = () => {
        document.getElementById('root').style.position = 'static'
    }
    let additionalClassname;
    const sizeWidth = useWindowSize();
    if (sizeWidth < 1100){
        additionalClassname = styles.active
    } else {
        additionalClassname = 'active'
    }
    return (
        <NavLink to={src} className={ ({isActive}) => isActive ? `${additionalClassname} ${className}` : className } onClick={() => toStatic()}>
            {children}
        </NavLink>
    );
};

export default LinkTo;