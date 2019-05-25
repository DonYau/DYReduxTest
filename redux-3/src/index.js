import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { add, reduce } from './actions'
import { rootReducer } from './reducers'
import thunk from 'redux-thunk'

const customObj1 = {
    name: 'Tom',
    age: 18
}

const customObj2 = {
    name: 'Chen',
    age: 20
}

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument(customObj1,customObj2))))

store.subscribe(function() {
    updateList()
})

const addElement = document.getElementById('add')
const reduceElement = document.getElementById('reduce')
const inputElement = document.getElementById('item')

addElement.onclick = () => {
    if (inputElement.value.length <= 0) {
        return
    }
    let value = inputElement.value
    store.dispatch(function(dispatch,getState) {
        //从这里log输出可知，通过withExtraArgument只支持传递一个参数
        console.log(arguments)
        console.log(getState())
        setTimeout(() => {
            dispatch(add(value))
            console.log(getState())
        }, 1000)
    })
    // store.dispatch(addHandle(value))
    inputElement.value = ""
}

function addHandle(value) {
    return function(dispatch,getState) {
        console.log(arguments)
        setTimeout(() => {
            dispatch(add(value))
        }, 1000)
    }
}

reduceElement.onclick = () => {
    store.dispatch(reduce())
}

function updateList() {
    inputElement.value = ""
    const listItem = document.getElementById('list')
    if (listItem.lastElementChild.id !== 'action') {
        listItem.removeChild(listItem.lastChild)
    }

    const ul = document.createElement('ul')
    listItem.appendChild(ul)

    const list = store.getState().list
    list.forEach(item => {
        const li = document.createElement('li')
        li.innerText = item.text
        ul.appendChild(li)
    });
}
