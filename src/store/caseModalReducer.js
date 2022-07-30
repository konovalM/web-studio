const defaultState = {
    isModal: false
}


export default function caseModalReducer(state = defaultState, action) {
    switch (action.type) {
        case 'OPEN_CASE':
            return {...state, isModal: true}
        case 'CLOSE_CASE':
            return {...state, isModal: false}
    }
    return state
}

