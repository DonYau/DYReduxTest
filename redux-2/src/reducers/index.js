import { combineReducers } from 'redux'

const list = (state = [], action) => {
    switch (action.type) {
        case "ADD": 
            return [
                ...state,
                {
                    id:state.length,
                    text: action.text
                }
            ]
        case "REDUCE":
            if (state.length === 0) {
                return state
            }else {
                state.pop()
                return [...state]
            }
        default: 
        return state
    }
}

const show = (state = false, action) => {
    if (action.type === 'SHOW') {
        return !state
    }
    return true
}

const extendShow = (state = false, action) => {
    if (action.type === 'EXTENDSHOW') {
        return !state
    }
    return true
}

export const rootReducer = combineReducers({
    list,
    show
})

const showReducer = combineReducers ({
    extendShow
})

export const secondReducer = combineReducers({
    list,
    'show': show,
    showReducer
})