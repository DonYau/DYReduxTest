import {handleAction,handleActions} from 'redux-actions'

import { combineReducers } from 'redux'

const list = handleActions({
    ADD: (state = [],action) => [
        ...state,
        {
            id:state.length,
            text: action.payload
        }
    ],
    REDUCE: (state = [],action) => {
        if (state.length === 0) {
            return state
        }
        state.pop()
        return [...state]
    }
},[])

const titleFilter = handleAction('TITLECHANGE',(state = true,action) => {
    return state = !state
},true)



const promise = handleAction('PROMISE',(state,action)=> {
    return action.payload
}, '1')


export const rootReducer = combineReducers({
    list,
    titleFilter,
    promise
})