import React from 'react';
import Header from "../components/Header/Header";
import Main from "../components/Applications/Main/Main";
import Includes from "../components/Applications/Includes/Includes";
import Stages from "../components/Applications/Stages/Stages";
import Cases from "../components/Applications/Cases/Cases";
import Prices from "../components/Applications/Prices/Prices";
import Questions from "../components/Main/Questions";
import Footer from "../components/Footer";

const ApplicationsPage = () => {
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

export default ApplicationsPage;