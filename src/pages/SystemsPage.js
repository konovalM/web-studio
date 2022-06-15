import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Questions from "../components/Main/Questions";
import Main from "../components/Systems/Main/Main";
import Includes from "../components/Systems/Includes/Includes";
import Stages from "../components/Systems/Stages/Stages";
import Cases from "../components/Systems/Cases/Cases";
import Prices from "../components/Systems/Prices/Prices";

const SystemsPage = () => {
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

export default SystemsPage;