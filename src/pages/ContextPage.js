import React from 'react';
import Header from "../components/Header/Header";
import Main from "../components/Context/Main/Main";
import Includes from "../components/Context/Includes/Includes";
import Stages from "../components/Context/Stages/Stages";
import Cases from "../components/Context/Cases/Cases";

const ContextPage = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Includes/>
            <Stages/>
            <Cases/>
        </div>
    );
};

export default ContextPage;