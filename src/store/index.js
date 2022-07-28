import {combineReducers, createStore} from "redux";
import modal from "./modalReducer";


const rootReducer = combineReducers({
    modal,
})

export const store = createStore(rootReducer)