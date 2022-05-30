import React from 'react';
import Header from "../components/Header";
import Main from "../components/Main";
import Reasons from "../components/Reasons";
import Stages from "../components/Stages";
import Services from "../components/Services";
import Prices from "../components/prices/Prices";
import About from "../components/About";
import Questions from "../components/Questions";
import Footer from "../components/Footer";

const MainPage = () => {
    return (
        <div>
            <Header />
            <Main />
            <Reasons />
            <Stages />
            <Services />
            <Prices />
            {/*{/*<Faq />*/}
            <About />
            <Questions />
            <Footer />
        </div>
    );
};

export default MainPage;