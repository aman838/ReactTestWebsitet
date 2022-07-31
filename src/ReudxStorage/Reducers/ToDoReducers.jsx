import {ADD_TODO_ITEM,DELETE_ITEM,UPDATE_ITEM} from "../actionType/ToDoActionTypes"

const initialState={
  todos: []
};

const TodoReducer=(state=initialState,action)=>{
  console.log(action)
    switch(action.type) {
        case ADD_TODO_ITEM:
          return{
             ...state,
           todos : [...state.todos,action.payload] 
          };

        case DELETE_ITEM:
          return {state :[action.payload]};

        case UPDATE_ITEM:
        return {state :[action.payload]};

        default:
          return state
      }
}
export default TodoReducer