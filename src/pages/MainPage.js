import React from 'react';
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Reasons from "../components/Main/Reasons";
import Stages from "../components/Main/Stages";
import Services from "../components/Main/Services";
import Prices from "../components/prices/Prices";
import About from "../components/Main/About";
import Questions from "../components/Main/Questions";
import Footer from "../components/Footer";
import Test from "../components/test/Test";
import CrossAnimation from "../animations/CrossAnimation/CrossAnimation";

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
            {/*<Test/>*/}
        </div>
    );
};

export default MainPage;