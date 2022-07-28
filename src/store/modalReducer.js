const defaultState = {
    isModal: false
}


export default function modalReducer(state = defaultState, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            console.log('opened')
            return {...state, isModal: true}
        case 'CLOSE_MODAL':
            console.log('closed')
            return {...state, isModal: false}
    }
    return state
}
