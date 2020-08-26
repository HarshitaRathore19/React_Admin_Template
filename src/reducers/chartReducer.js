//import action types
import { actionTypes } from "../constants"



const initState = 
{
    chartData: []
}

export default function chartReducer(state= initState, action)
{
    switch(action.type)
    {
        case actionTypes.GET_CHARTDATA:
            return {
                ...state,
                chartData: action.payload
            }
        default:
            return{
                ...state
            }       
    }

}