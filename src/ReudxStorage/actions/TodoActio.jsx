import {ADD_TODO_ITEM,UPDATE_ITEM,DELETE_ITEM} from "../actionType/ToDoActionTypes"

export const AddTodoItem=(payload)=>{
    
    return{
        type:ADD_TODO_ITEM,
        payload
}
}

export const updateTodoItem=(payload)=>{
return {
    type:UPDATE_ITEM,
    payload
}
}

export const DeleteTodoItem=(payload)=>{
    return{
        type:DELETE_ITEM,
        payload
    }
}

