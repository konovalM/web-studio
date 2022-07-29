import React from 'react';
import Questions from "../components/Main/Questions";
import Main from "../components/Marketing/Main/Main";
import Includes from "../components/Marketing/Includes/Includes";
import Stages from "../components/Marketing/Stages/Stages";
import Cases from "../components/Marketing/Cases/Cases";
import Prices from "../components/Marketing/Prices/Prices";
import Layout from "./Layout";
import Header from "../components/Header/Header";

const MarketingPage = () => {
    return (
        <>
            <Main/>
            <Includes/>
            <Stages/>
            {/*<Cases/>*/}
            <Prices/>
            <Questions/>
        </>
    );
};

export default MarketingPage;