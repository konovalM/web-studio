import React from 'react';
import Header from "../components/Header/Header";
import Main from "../components/Seo/Main/Main";
import Includes from "../components/Seo/Includes/Includes";
import Stages from "../components/Seo/Stages/Stages";
import Cases from "../components/Seo/Cases/Cases";
import Prices from "../components/Seo/Prices/Prices";
import Questions from "../components/Main/Questions";
import Footer from "../components/Footer";

const SeoPage = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Includes/>
            <Stages/>
            <Cases/>
            <Prices/>
            <Questions/>
            <Footer/>
        </div>
    );
};

export default SeoPage;