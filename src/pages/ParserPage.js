import React from 'react';
import Main from "../components/Parser/Main/Main";
import Includes from "../components/Parser/Includes/Includes";
import Stages from "../components/Parser/Stages/Stages";
import Prices from "../components/Parser/Prices/Prices";
import Questions from "../components/Main/Questions";
import Layout from "./Layout";

const ParserPage = () => {
    return (
        <div>
            <Layout>
                <Main/>
                <Includes/>
                <Stages/>
                <Prices/>
                <Questions/>
            </Layout>
        </div>
    );
};

export default ParserPage;