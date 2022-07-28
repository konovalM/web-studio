import React from 'react';
import Questions from "../components/Main/Questions";
import Main from "../components/Systems/Main/Main";
import Includes from "../components/Systems/Includes/Includes";
import Stages from "../components/Systems/Stages/Stages";
import Cases from "../components/Systems/Cases/Cases";
import Prices from "../components/Systems/Prices/Prices";
import Layout from "./Layout";

const SystemsPage = () => {
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

export default SystemsPage;