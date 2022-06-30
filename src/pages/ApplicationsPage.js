import React from 'react';
import Main from "../components/Applications/Main/Main";
import Includes from "../components/Applications/Includes/Includes";
import Stages from "../components/Applications/Stages/Stages";
import Cases from "../components/Applications/Cases/Cases";
import Prices from "../components/Applications/Prices/Prices";
import Questions from "../components/Main/Questions";
import Layout from "./Layout";

const ApplicationsPage = () => {
    return (
        <div>
            <Layout>
                {/*<Main/>
                <Includes/>
                <Stages/>
                <Cases/>*/}
                <Prices/>
                <Questions/>
            </Layout>
        </div>
    );
};

export default ApplicationsPage;