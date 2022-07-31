import React from "react"
import {INCREMENT,DECREMENT} from "../actionType/InDe-crementActionTypes"
 export const Increment=()=>{ 
    return {
        type:INCREMENT
    }
}

 export const Decrement=()=>{
    return {
        type:DECREMENT
    }
}


