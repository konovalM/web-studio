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

function App() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/context' element={<ContextPage/>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default App;
