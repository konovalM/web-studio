import './App.scss';
import React, {useEffect, Suspense, lazy} from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import AOS from "aos";
import Layout from "./pages/Layout";
const PolicyPage = lazy(() => import("./pages/PolicyPage"))
const SystemsPage = lazy(() => import("./pages/SystemsPage"))
const ParserPage = lazy(() => import("./pages/ParserPage"))
const ApplicationsPage = lazy(() => import("./pages/ApplicationsPage"))
const SmmPage = lazy(() => import("./pages/SmmPage"))
const MarketingPage = lazy(() => import("./pages/MarketingPage"))
const SeoPage = lazy(() => import("./pages/SeoPage"))
const ContextPage = lazy(() => import("./pages/ContextPage"))
const MainPage = lazy(() => import("./pages/MainPage"))

function App() {
    useEffect(() => {
        AOS.init({
            offset: 50,
            duration: 500,
            easing: "linear",
            delay: 0,
            once: true,
        });
    }, [])
    return (
        <Layout>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='context' element={<ContextPage/>}/>
                    <Route path='seo' element={<SeoPage/>}/>
                    <Route path='smm' element={<SmmPage/>}/>
                    <Route path='branding' element={<MarketingPage/>}/>
                    <Route path='apps' element={<ApplicationsPage/>}/>
                    <Route path='parser' element={<ParserPage/>}/>
                    <Route path='systems' element={<SystemsPage/>}/>
                    <Route path='policy' element={<PolicyPage/>}/>
                </Routes>
            </Suspense>
        </Layout>
    );
}

export default App;
