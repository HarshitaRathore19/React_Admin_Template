//import action types
import { actionTypes } from "../constants"



const initState = 
{
    employee: []
}

export default function empReducer(state= initState, action)
{
    switch(action.type){
        case actionTypes.GET_EMP:
            return {
                ...state,
                employee: action.payload
            }
        default:
            return{
                ...state
            }       
    }

}