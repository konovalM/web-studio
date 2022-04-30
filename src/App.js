import './App.css';
import {Fragment} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Stages from "./components/Stages";
import Questions from "./components/Questions";
import About from "./components/About";

function App() {
    return (
        <Fragment>
            <Header />
            <Main />
            <Stages />
            <About />
            <Questions />
        </Fragment>
    );
}

export default App;
