import React from 'react';
import Main from "../components/Main/Main";
import Reasons from "../components/Main/Reasons/Reasons";
import Stages from "../components/Main/Stages";
import Services from "../components/Main/Services/Services";
import Prices from "../components/prices/Prices";
import About from "../components/Main/About/About";
import Questions from "../components/Main/Questions";
import Test from "../components/test/Test";
import Layout from "./Layout";
import Faq from "../components/Main/Faq/Faq";

const MainPage = () => {
    return (
        <div>
            <Layout>
                <Main/>
                <Reasons />
                <Stages />
                <Services />
                <Prices />
                <Faq />
                <About />
                <Questions />
            </Layout>
        </div>
    );
};

export default MainPage;