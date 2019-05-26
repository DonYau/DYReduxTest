import {createAction} from 'redux-actions'

export const addTodo = createAction('ADD_TODO')

export const setVisibilityFilter = createAction('SET_VISIBILITY_FILTER')

export const toggleTodo = createAction('TOGGLE_TODO')

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
