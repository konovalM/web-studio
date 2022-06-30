import './App.css';
import {Fragment} from "react";
import MainPage from "./pages/MainPage";
import ContextPage from "./pages/ContextPage";
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import SeoPage from "./pages/SeoPage";
import MarketingPage from "./pages/MarketingPage";
import SmmPage from "./pages/SmmPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import ParserPage from "./pages/ParserPage";
import SystemsPage from "./pages/SystemsPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
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
