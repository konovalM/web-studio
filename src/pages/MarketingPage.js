import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Questions from "../components/Main/Questions";
import Main from "../components/Marketing/Main/Main";
import Includes from "../components/Marketing/Includes/Includes";
import Stages from "../components/Marketing/Stages/Stages";
import Cases from "../components/Marketing/Cases/Cases";
import Prices from "../components/Marketing/Prices/Prices";

const MarketingPage = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Includes/>
            <Stages/>
            <Cases/>
            <Prices/>
            <Questions bg={true}/>
            <Footer/>
        </div>
    );
};

export default MarketingPage;