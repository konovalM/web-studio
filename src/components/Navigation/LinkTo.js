import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components'



const LinkTo = ({ src, children, className }) => {
    const toStatic = () => {
        document.getElementById('root').style.position = 'static'
    }
    return (
        <Link to={src} className={className} onClick={() => toStatic()}>
            {children}
        </Link>
    );
};

export default LinkTo;