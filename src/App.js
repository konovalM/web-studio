import './App.css';
import {Fragment} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Stages from "./components/Stages";
import Questions from "./components/Questions";
import About from "./components/About";
import Footer from "./components/Footer";
import Reasons from "./components/Reasons";

function App() {
    return (
        <Fragment>
            <Header />
            <Main />
            <Reasons />
            <Stages />
            <About />
            <Questions />
            <Footer />
        </Fragment>
    );
}

export default App;
