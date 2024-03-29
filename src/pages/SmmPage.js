import React from 'react';
import Main from "../components/Smm/Main/Main";
import Includes from "../components/Smm/Includes/Includes";
import Stages from "../components/Smm/Stages/Stages";
import Cases from "../components/Smm/Cases/Cases";
import Prices from "../components/Smm/Prices/Prices";
import Questions from "../components/Main/Questions";
import Layout from "./Layout";
import Header from "../components/Header/Header";

const SmmPage = () => {
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

export default SmmPage;