import {combineReducers, createStore} from "redux";
import modal from "./modalReducer";
import menu from './menuReducer'


const rootReducer = combineReducers({
    modal,
    menu
})

export const store = createStore(rootReducer)