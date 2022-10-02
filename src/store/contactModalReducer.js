const defaultState = {
    isModal: 0,
}


export default function caseModalReducer(state = defaultState, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {...state, isModal: 1}
        case 'NEXT_MODAL':
            return {...state, isModal: 2}
        case 'CLOSE_MODAL':
            return {...state, isModal: 0}
    }
    return state
}
