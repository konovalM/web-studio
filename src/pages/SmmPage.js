import React from 'react';
import Header from "../components/Header/Header";
import Main from "../components/Smm/Main/Main";
import Includes from "../components/Smm/Includes/Includes";
import Stages from "../components/Smm/Stages/Stages";
import Cases from "../components/Smm/Cases/Cases";
import Prices from "../components/Smm/Prices/Prices";
import Questions from "../components/Main/Questions";
import Footer from "../components/Footer";

const SmmPage = () => {
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

export default SmmPage;