import {createAction, createActions} from 'redux-actions'

export const list = createActions('ADD','REDUCE')

export const titleChange = createAction('TITLECHANGE')

export const promiseAction = createAction('PROMISE', (value) => {
    console.log(value)
    return new Promise((fulfill,reject) => {
        setTimeout(() => {
            fulfill(value)
        }, 1000);
    })
})