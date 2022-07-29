const defaultState = {
    isMenu: false
}


export default function menuReducer(state = defaultState, action) {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return {...state, isMenu: action.payload}
        case 'CLOSE_MENU':
            return {...state, isMenu: false}
    }
    return state
}
