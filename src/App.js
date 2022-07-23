import './App.css';
import MainPage from "./pages/MainPage";
import ContextPage from "./pages/ContextPage";
import React, {useEffect} from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import SeoPage from "./pages/SeoPage";
import MarketingPage from "./pages/MarketingPage";
import SmmPage from "./pages/SmmPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import ParserPage from "./pages/ParserPage";
import SystemsPage from "./pages/SystemsPage";
import AOS from "aos";

function App() {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: "linear",
            delay: 100,
            once: true,
        });
    }, [])
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='context' element={<ContextPage/>}/>
            <Route path='seo' element={<SeoPage/>}/>
            <Route path='smm' element={<SmmPage/>}/>
            <Route path='branding' element={<MarketingPage/>}/>
            <Route path='apps' element={<ApplicationsPage/>}/>
            <Route path='parser' element={<ParserPage/>}/>
            <Route path='systems' element={<SystemsPage/>}/>
        </Routes>
    );
}

export default App;
