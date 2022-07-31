import { combineReducers } from 'redux'
import IncrementDecrementReducer from './InDe-rementReducer'
import TodoReducer from './ToDoReducers'
const rootReducers = combineReducers({
    counter : IncrementDecrementReducer,
    TodoList : TodoReducer
})
export default rootReducers