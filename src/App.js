import './App.css';
import {Fragment} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Stages from "./components/Stages";

function App() {
    return (
        <Fragment>
            <Header />
            <Main/>
            <Stages/>
        </Fragment>
    );
}

export default App;
