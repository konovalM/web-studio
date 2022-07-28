import React from 'react';
import Main from "../components/Context/Main/Main";
import Includes from "../components/Context/Includes/Includes";
import Stages from "../components/Context/Stages/Stages";
import Cases from "../components/Context/Cases/Cases";
import Questions from "../components/Main/Questions";
import Prices from "../components/Context/Prices/Prices";
import Layout from "./Layout";
import Header from "../components/Header/Header";

const ContextPage = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Includes/>
            <Stages/>
            {/*<Cases/>*/}
            <Prices/>
            <Questions/>
        </>
    );
};

export default ContextPage;