import React from 'react';
import Main from "../components/Main/Main/Main";
import Reasons from "../components/Main/Reasons/Reasons";
import Stages from "../components/Main/Stages";
import Services from "../components/Main/Services/Services";
import Prices from "../components/prices/Prices";
import About from "../components/Main/About/About";
import Questions from "../components/Main/Questions";
import Faq from "../components/Main/Faq/Faq";

const MainPage = () => {
    return (
        <>
            <Main/>
            <Reasons />
            <Stages />
            <Services />
            <Prices />
            <Faq />
            <About />
            <Questions />
        </>
    );
};

export default MainPage;