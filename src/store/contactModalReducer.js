const defaultState = {
    isModal: false
}


export default function caseModalReducer(state = defaultState, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {...state, isModal: true}
        case 'CLOSE_MODAL':
            return {...state, isModal: false}
    }
    return state
}
