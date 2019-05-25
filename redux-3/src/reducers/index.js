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

export const rootReducer = combineReducers({
    list
})