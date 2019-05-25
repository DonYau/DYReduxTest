import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const addAction = (num1,num2) => {
    return ({
        type: 'ADD',
        num1,
        num2,
    })
}

const addReducer = (state,action) => {
    if(action.type === 'ADD') {
        return ({
            result: action.num1 + action.num2
        })
    }
}

const store = createStore(addReducer,{add:1},composeWithDevTools())

setInterval(() => {
    store.dispatch(addAction(parseInt(Math.random() * 10) ,2))
},2000)

