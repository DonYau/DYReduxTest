import { createStore, bindActionCreators} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { add, reduce, filter, extendFilter } from './actions'
import { rootReducer, secondReducer } from './reducers'


const store = createStore(rootReducer,composeWithDevTools())

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
    store.dispatch(add(inputElement.value))
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

const showLabel = document.getElementById('showLabel')
const showBtn = document.getElementById('show')

const filterDispatch = bindActionCreators(filter,store.dispatch)

showBtn.onclick = () => {
    filterDispatch()
    showLabel.innerText = store.getState().show ? "显示" : '隐藏'
}


let reducerTypeTop = true 
document.getElementById('change').onclick = () => {
    store.replaceReducer(reducerTypeTop ? secondReducer : rootReducer)
    reducerTypeTop = !reducerTypeTop
}

const extendShowLabel = document.getElementById('secondShowLabel')
const extendShowBtn = document.getElementById('secondShow')
extendShowBtn.onclick = () => {
    store.dispatch(extendFilter())
    extendShowLabel.innerText = store.getState().showReducer.extendShow ? "显示" : '隐藏'
}