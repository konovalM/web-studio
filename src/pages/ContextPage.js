import React from 'react';
import Header from "../components/Header/Header";
import Main from "../components/Context/Main/Main";
import Includes from "../components/Context/Includes/Includes";

const ContextPage = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Includes/>
        </div>
    );
};

export default ContextPage;