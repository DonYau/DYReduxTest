import { VisibilityFilters } from '../actions'
import {handleAction} from 'redux-actions'

const visibilityFilter = handleAction('SET_VISIBILITY_FILTER',(state, action) => action.payload,VisibilityFilters.SHOW_ALL)

export default visibilityFilter
