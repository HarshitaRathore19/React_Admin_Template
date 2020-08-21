import { actionTypes } from "../constants"



const initState = {
    token: ''
}

export default function userReducer(state= initState, action){
    switch(action.type){
        case actionTypes.USER_LOGIN:
            return {
                token: action.payload
            }
        case actionTypes.USER_LOGOUT:
            return {
                token: action.payload
            }
        default: 
        return {...state }
    }

}