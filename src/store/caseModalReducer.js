import case1 from '../images/cases/case1.jpg'

const defaultState = {
    isModal: false,
    activeCase: null,
    cases: [
        case1,
        case1,
        case1,
        case1,
        case1,
        case1,
        case1,
        case1,
        case1,
        case1,
        case1,
        case1,
    ]
}


export default function caseModalReducer(state = defaultState, action) {
    switch (action.type) {
        case 'OPEN_CASE':
            console.log(action.payload)
            return {...state, isModal: true, activeCase: action.payload}
        case 'CLOSE_CASE':
            return {...defaultState}
        case 'NEXT_CASE':
            const nextCount = state.activeCase % state.cases.length + 1
            return {...state, activeCase: nextCount}
        case 'PREV_CASE':
            const prevCount = state.activeCase % state.cases.length - 1
            return {...state, activeCase: prevCount}
    }
    return state
}

