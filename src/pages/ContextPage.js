import React from 'react';
import Header from "../components/Header/Header";
import Main from "../components/Context/Main/Main";
import Includes from "../components/Context/Includes/Includes";
import Stages from "../components/Context/Stages/Stages";
import Cases from "../components/Context/Cases/Cases";
import Questions from "../components/Main/Questions";
import Footer from "../components/Footer";
import Prices from "../components/Context/Prices/Prices";

const ContextPage = () => {
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

export default ContextPage;