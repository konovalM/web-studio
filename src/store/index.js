import {combineReducers, createStore} from "redux";
import caseModal from "./caseModalReducer";
import contactModal from './contactModalReducer'
import menu from './menuReducer'

const rootReducer = combineReducers({
    caseModal,
    contactModal,
    menu
})

export const store = createStore(rootReducer)
