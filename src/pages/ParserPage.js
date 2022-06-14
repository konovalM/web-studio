import React from 'react';
import Header from "../components/Header/Header";
import Main from "../components/Parser/Main/Main";
import Includes from "../components/Parser/Includes/Includes";
import Stages from "../components/Parser/Stages/Stages";
import Prices from "../components/Parser/Prices/Prices";
import Questions from "../components/Main/Questions";
import Footer from "../components/Footer";

const ParserPage = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Includes/>
            <Stages/>
            <Prices/>
            <Questions/>
            <Footer/>
        </div>
    );
};

export default ParserPage;