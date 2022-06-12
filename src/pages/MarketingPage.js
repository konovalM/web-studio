import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Questions from "../components/Main/Questions";
import Main from "../components/Marketing/Main/Main";
import Includes from "../components/Marketing/Includes/Includes";

const MarketingPage = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Includes/>
            <Questions bg={true}/>
            <Footer/>
        </div>
    );
};

export default MarketingPage;