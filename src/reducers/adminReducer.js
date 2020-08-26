//import action types
import { actionTypes } from "../constants"



const initState = 
{
    token: sessionStorage.getItem('token')
}

export default function userReducer(state= initState, action)
{
    switch(action.type)
    {
        case actionTypes.USER_LOGIN:
            return {
                ...state,
                token: action.payload
            }
        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                token: action.payload
            }
        default: 
        return {...state }
    }

}