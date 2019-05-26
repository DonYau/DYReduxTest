import { handleActions } from 'redux-actions'

const todos = handleActions({
  'ADD_TODO': (state, action) => [
    ...state,
    {
      id: state.length,
      text: action.payload,
      completed: false
    }
  ],
  'TOGGLE_TODO': (state, action) => {
    console.log(action)
    return state.map(todo =>
      (todo.id === action.payload)
        ? {...todo, completed: !todo.completed}
        : todo
    )
  }
},[])

export default todos
