import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { add, reduce } from './actions'
import { rootReducer } from './reducers'
import promise from 'redux-promise'



const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(promise)))

store.subscribe(function() {
    console.log('状态树发生变更')
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
    store.dispatch(add(value))
    inputElement.value = ""
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
