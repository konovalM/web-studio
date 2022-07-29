import React from 'react';
import Main from "../components/Seo/Main/Main";
import Includes from "../components/Seo/Includes/Includes";
import Stages from "../components/Seo/Stages/Stages";
import Cases from "../components/Seo/Cases/Cases";
import Prices from "../components/Seo/Prices/Prices";
import Questions from "../components/Main/Questions";
import Layout from "./Layout";
import Header from "../components/Header/Header";

const SeoPage = () => {
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

export default SeoPage;