import React from 'react';
import Main from "../components/Main/Main";
import Reasons from "../components/Main/Reasons";
import Stages from "../components/Main/Stages";
import Services from "../components/Main/Services";
import Prices from "../components/prices/Prices";
import About from "../components/Main/About";
import Questions from "../components/Main/Questions";
import Test from "../components/test/Test";
import CrossAnimation from "../animations/CrossAnimation/CrossAnimation";
import Layout from "./Layout";
import Faq from "../components/Main/Faq";

const MainPage = () => {
    return (
        <div>
            <Layout>
                <Main/>
                <Reasons />
                <Stages />
                <Services />
                <Prices />
                {/*<Faq />*/}
                <About />
                <Questions />
                {/*<Test/>*/}
            </Layout>
        </div>
    );
};

export default MainPage;