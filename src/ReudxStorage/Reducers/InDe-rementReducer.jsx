import {DECREMENT,INCREMENT} from "../actionType/InDe-crementActionTypes"

const initialState = {
  number:0
 }
const IncrementDecrementReducer=(state=initialState,action)=>{

    switch (action.type) {
        case INCREMENT:
          return {number : state.number+1};

        case DECREMENT:
          return {number: state.number-1};

        default:
          return state
      }

}
export default IncrementDecrementReducer