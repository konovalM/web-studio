import case1 from '../images/cases/landings/case1.jpg'
import case2 from '../images/cases/case2.jpg'
import case3 from '../images/cases/case3.jpg'
import case4 from '../images/cases/case4.jpg'
import case5 from '../images/cases/case5.jpg'
import case6 from '../images/cases/case6.jpg'
import case7 from '../images/cases/case7.jpg'
import case8 from '../images/cases/case8.jpg'
import case9 from '../images/cases/case9.jpg'
import case10 from '../images/cases/case10.jpg'
import case11 from '../images/cases/case11.jpg'
import case12 from '../images/cases/case12.jpg'

const defaultState = {
    isModal: false,
    activeCase: null,
    typeOfCase: '',
    cases: {
        landings: [
            case1,
            case2,
            case3,
            case4,
            case5,
            case6,
            case7,
            case8,
            case9,
            case10,
            case11,
            case12,
        ],
        shops: [
            case7,
            case8,
            case9,
            case10,
            case11,
            case12,
            case1,
            case2,
            case3,
            case4,
            case5,
            case6,
        ],
        multipage: [
            case6,
            case7,
            case8,
            case1,
            case2,
            case9,
            case10,
            case11,
            case12,
            case3,
            case4,
            case5,
        ]
    }
}


export default function caseModalReducer(state = defaultState, action) {
    switch (action.type) {
        case 'OPEN_CASE':
            return {
                ...state,
                isModal: true,
                activeCase: action.payload.activeCase,
                typeOfCase: action.payload.typeOfCase
            }
        case 'CLOSE_CASE':
            return {...defaultState}
        case 'NEXT_CASE':
            const nextCount = (state.activeCase + 1) % state.cases[state.typeOfCase].length
            return {...state, activeCase: nextCount}
        case 'PREV_CASE':
            let prevCount
            if (state.activeCase - 1 < 0) {
                prevCount = state.cases[state.typeOfCase].length - 1
            } else prevCount = state.activeCase - 1
            return {...state, activeCase: prevCount}
    }
    return state
}

